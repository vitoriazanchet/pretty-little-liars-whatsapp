export interface MensagemData {
  id: string;
  titular: 'remetente' | 'destinatario';
  texto: string;
  timestamp: Date;
}

export interface BotaoOpcao {
  label: string;
  videoSrc?: any;
}

export interface RespostaAutomatica {
  gatilho: string;
  respostas: string[];
  mostrarBotoes?: BotaoOpcao[];
  acaoEspecial?: 'abrirVideo' | 'abrirJogoMemoria';
}

export interface ConversaConfig {
  chatId: string;
  nome: string;
  dataInicioLabel: string;
  mensagensTemporarias: boolean;
  mensagensIniciais: MensagemData[];
  fluxoDeDialogo: RespostaAutomatica[];
}

export interface CartaMemoria {
  id: number;
  pairId: number;
  imagem: any;
  virada: boolean;
  encontrada: boolean;
  doJogador: 'hanna' | 'a' | null;
}