import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Conversa } from './Conversa/Conversa';
import { ConversaFooter } from './ConversaFooter/ConversaFooter';
import { ConversaHeader } from './ConversaHeader/ConversaHeader';
import { MensagemData, RespostaAutomatica, BotaoOpcao } from '../../services/types';
import { fluxoConversas } from '../../services/fluxoConversas';
import { ChatData } from '../Chat/Chat';
import { TelaVideo } from '../TelaVideo/TelaVideo';
import { JogoMemoria } from '../JogoMemoria/JogoMemoria';
import { styles } from "./styles";

interface TelaConversaProps {
  idDaConversaAtual: string;
  dados: ChatData;
  onVoltarParaListaGeral: () => void;
}

export const TelaConversa: React.FC<TelaConversaProps> = ({ idDaConversaAtual, dados, onVoltarParaListaGeral }) => {
  const config = fluxoConversas[idDaConversaAtual];
  const [statusHeader, setStatusHeader] = useState<string>('online');
  const [botoesOpcao, setBotoesOpcao] = useState<BotaoOpcao[] | null>(null);
  const [acaoEspecialPendente, setAcaoEspecialPendente] = useState<string | null>(null);
  const [videoAtivo, setVideoAtivo] = useState<any>(null);
  const [mensagens, setMensagens] = useState<MensagemData[]>(() => {
    return config?.mensagensIniciais || [];
  });

  const dadosParaOHeader = {
    id: dados.id,
    nome: dados.nome,
    foto: dados.foto,
    status: statusHeader
  };

  const dispararRespostasBot = (dialogo: RespostaAutomatica) => {
    setStatusHeader('digitando...');

    dialogo.respostas.forEach((textoBot, index) => {
      setTimeout(() => {
        const novaMsgBot: MensagemData = {
          id: `bot_${Date.now()}_${index}`,
          titular: 'destinatario',
          texto: textoBot,
          timestamp: new Date()
        };

        setMensagens(atuais => [...atuais, novaMsgBot]);
        if (index === dialogo.respostas.length - 1) {
          setStatusHeader('online');
          if (dialogo.mostrarBotoes) setBotoesOpcao(dialogo.mostrarBotoes);
          if (dialogo.acaoEspecial) setAcaoEspecialPendente(dialogo.acaoEspecial);
        }
      }, (index + 1) * 1500);
    });
  };

  const handleEnviarMensagem = (textoEnviado: string) => {
    const novaMsg: MensagemData = {
      id: `mensagem_${Date.now()}`,
      titular: 'remetente',
      texto: textoEnviado,
      timestamp: new Date()
    };

    setMensagens(atuais => [...atuais, novaMsg]);

    if (config) {
      const passoEncontrado = config.fluxoDeDialogo.find(
        d => d.gatilho.toLowerCase() === textoEnviado.toLowerCase().trim()
      );
      const passoFinal = idDaConversaAtual === "5" ? config.fluxoDeDialogo[0] : passoEncontrado;
      if (passoFinal) {
        dispararRespostasBot(passoFinal);
      }
    }
  };

  const handleAcaoBotao = (botao: BotaoOpcao) => {
    setBotoesOpcao(null);
    setAcaoEspecialPendente(null);
    if (acaoEspecialPendente === 'abrirVideo' && botao.videoSrc) {
      setVideoAtivo(botao.videoSrc);
    }
  };

  const obterGatilhoAtual = (): string | null => {
    if (config && config.fluxoDeDialogo && config.fluxoDeDialogo.length > 0) {
      return config.fluxoDeDialogo[0].gatilho;
    }
    return null;
  };

  const [mostrarJogo, setMostrarJogo] = useState(false);
  useEffect(() => {
    if (acaoEspecialPendente === 'abrirJogoMemoria' && statusHeader !== 'digitando...') {
      const timer = setTimeout(() => setMostrarJogo(true), 3000); // 3 segundos
      return () => clearTimeout(timer);
    } else {
      setMostrarJogo(false);
    }
  }, [acaoEspecialPendente, statusHeader]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ConversaHeader dados={dadosParaOHeader} onVoltarParaListaGeral={onVoltarParaListaGeral} />
      <Conversa
        mensagens={mensagens}
        dataInicioLabel={config?.dataInicioLabel || "Hoje"}
        mensagensTemporarias={config?.mensagensTemporarias || false}
      />
      {botoesOpcao && (
        <View style={styles.containerBotoes}>
          {botoesOpcao.map(botao => (
            <TouchableOpacity key={botao.label} style={styles.botaoFixo} onPress={() => handleAcaoBotao(botao)}>
              <Text style={styles.textoBotao}>{botao.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {mostrarJogo && (
        <View style={StyleSheet.absoluteFillObject}>
          <JogoMemoria onVoltarParaListaGeral={() => {
            setAcaoEspecialPendente(null);
            setMostrarJogo(false);
            onVoltarParaListaGeral();
          }} />
        </View>
      )}
      <ConversaFooter onEnviarMensagem={handleEnviarMensagem} onInputFocus={obterGatilhoAtual} />

      {videoAtivo && (
        <TelaVideo
          source={videoAtivo}
          onFim={() => {
            setVideoAtivo(null);
            onVoltarParaListaGeral();
          }}
        />
      )}
    </KeyboardAvoidingView>
  );
};