import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { CartaMemoria } from '../../services/types';
import { TelaVitoria } from './TelaVitoria/TelaVitoria';
import { TelaVideo } from '../TelaVideo/TelaVideo';
import { styles } from "./styles";

const NUM_COLUNAS = 4;

const IMAGENS_PERSONAGENS = [
  require('../../../assets/personagens/geladeira!.jpg'),
  require('../../../assets/personagens/alison!.jpg'),
  require('../../../assets/personagens/aria!.jpg'),
  require('../../../assets/personagens/caleb!.jpg'),
  require('../../../assets/personagens/emily!.jpg'),
  require('../../../assets/personagens/ezra!.jpg'),
  require('../../../assets/personagens/hanna!.jpg'),
  require('../../../assets/personagens/jenna!.jpg'),
  require('../../../assets/personagens/mona!.jpg'),
  require('../../../assets/personagens/spencer!.jpg'),
  require('../../../assets/personagens/toby!.jpg'),
  require('../../../assets/personagens/traficante!.jpg'),
];

const VERSO_CARTA = require('../../../assets/perfil/a.jpeg');
const VIDEO_VITORIA_A = require('../../../assets/videos/perdedor.mov');

const gerarCartas = (): CartaMemoria[] => {
  const pares = IMAGENS_PERSONAGENS.flatMap((imagem, pairId) => [
    { id: pairId * 2,     pairId, imagem, virada: false, encontrada: false, doJogador: null },
    { id: pairId * 2 + 1, pairId, imagem, virada: false, encontrada: false, doJogador: null },
  ]);
  for (let i = pares.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pares[i], pares[j]] = [pares[j], pares[i]];
  }
  return pares;
};

type Jogador = 'hanna' | 'a';

interface JogoMemoriaProps {
  onVoltarParaListaGeral: () => void;
}

export const JogoMemoria: React.FC<JogoMemoriaProps> = ({ onVoltarParaListaGeral }) => {
  const [cartas, setCartas] = useState<CartaMemoria[]>(gerarCartas);
  const [selecionadas, setSelecionadas] = useState<number[]>([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [vezDe, setVezDe] = useState<Jogador>('hanna');
  const [pontosHanna, setPontosHanna] = useState(0);
  const [pontosA, setPontosA] = useState(0);
  const [vencedor, setVencedor] = useState<Jogador | null>(null);

  const TOTAL_PARES = IMAGENS_PERSONAGENS.length;

  useEffect(() => {
    if (selecionadas.length !== 2) return;

    setBloqueado(true);
    const [a, b] = selecionadas;
    const cartaA = cartas.find(c => c.id === a)!;
    const cartaB = cartas.find(c => c.id === b)!;

    if (cartaA.pairId === cartaB.pairId) {
      const novosPontos = vezDe === 'hanna' ? pontosHanna + 1 : pontosA + 1;

      setCartas(atuais =>
        atuais.map(c =>
          c.id === a || c.id === b
            ? { ...c, encontrada: true, doJogador: vezDe }
            : c
        )
      );

      if (vezDe === 'hanna') setPontosHanna(novosPontos);
      else setPontosA(novosPontos);

      if (novosPontos + (vezDe === 'hanna' ? pontosA : pontosHanna) === TOTAL_PARES) {
        const phFinal = vezDe === 'hanna' ? novosPontos : pontosHanna;
        const paFinal = vezDe === 'a'     ? novosPontos : pontosA;
        setVencedor(phFinal >= paFinal ? 'hanna' : 'a');
      }

      setSelecionadas([]);
      setBloqueado(false);
    } else {
      setTimeout(() => {
        setCartas(atuais =>
          atuais.map(c =>
            c.id === a || c.id === b ? { ...c, virada: false } : c
          )
        );
        setSelecionadas([]);
        setBloqueado(false);
        setVezDe(v => v === 'hanna' ? 'a' : 'hanna');
      }, 1000);
    }
  }, [selecionadas]);

  const handleToque = (id: number) => {
    if (bloqueado) return;
    const carta = cartas.find(c => c.id === id)!;
    if (carta.virada || carta.encontrada || selecionadas.length === 2) return;

    setCartas(atuais =>
      atuais.map(c => c.id === id ? { ...c, virada: true } : c)
    );
    setSelecionadas(atuais => [...atuais, id]);
  };

  if (vencedor === 'hanna') {
    return <TelaVitoria onVoltar={onVoltarParaListaGeral} />;
  }

  if (vencedor === 'a') {
    return (
      <TelaVideo
        source={VIDEO_VITORIA_A}
        onFim={onVoltarParaListaGeral}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.placar}>
        <View style={[styles.jogadorInfo, vezDe === 'hanna' && styles.vezAtiva]}>
          <Text style={[styles.nomeJogador, styles.corHanna]}>Hanna</Text>
          <Text style={styles.pontos}>{pontosHanna} pares</Text>
        </View>
        <View style={styles.separador}/>
        <View style={[styles.jogadorInfo, vezDe === 'a' && styles.vezAtiva]}>
          <Text style={[styles.nomeJogador, styles.corA]}>A</Text>
          <Text style={styles.pontos}>{pontosA} pares</Text>
        </View>
      </View>
      <FlatList
        data={cartas}
        keyExtractor={item => String(item.id)}
        numColumns={NUM_COLUNAS}
        scrollEnabled={false}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleToque(item.id)}
            activeOpacity={0.8}
            style={styles.cartaWrapper}
          >
            <Image
              source={item.virada || item.encontrada ? item.imagem : VERSO_CARTA}
              style={[
                styles.carta,
                item.encontrada && item.doJogador === 'hanna' && styles.cartaHanna,
                item.encontrada && item.doJogador === 'a'     && styles.cartaA,
              ]}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};