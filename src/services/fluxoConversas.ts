import { ConversaConfig } from './types';

export const fluxoConversas: { [key: string]: ConversaConfig } = {
  "1": {
    chatId: "1",
    nome: "Traficante",
    dataInicioLabel: "Hoje",
    mensagensTemporarias: true,
    mensagensIniciais: [
      { id: 'previa_1', titular: 'remetente', texto: 'Você me arranja Mounjaro?', timestamp: new Date(new Date().setHours(14, 30, 0)) },
      { id: 'previa_2', titular: 'remetente', texto: 'Estou precisando', timestamp: new Date(new Date().setHours(14, 31, 0)) },
      { id: 'previa_3', titular: 'destinatario', texto: 'Ja falei que num vendo monjaro, mais se tu quise crack te faço a 5 conto', timestamp: new Date(new Date().setHours(17, 0, 0)) }
    ],
    fluxoDeDialogo: [
      {
        gatilho: "Mas mata?",
        respostas: ["alguns sim, outros n", "vai quere?"],
        mostrarBotoes: [
          { label: "Sim", videoSrc: require('../../assets/videos/video_sim.mov') },
          { label: "Não", videoSrc: require('../../assets/videos/video_nao.mov') }
        ],
        acaoEspecial: "abrirVideo"
      }
    ]
  },
  "5": {
    chatId: "5",
    nome: "A",
    dataInicioLabel: "Hoje",
    mensagensTemporarias: false,
    mensagensIniciais: [
      { id: 'previa_1', titular: 'destinatario', texto: 'VOCÊ VAI TER SEU $$$ DE VOLTA. SE FIZER O QUE EU MANDAR. BONS SONHOS -A', timestamp: new Date(new Date().setHours(0, 30, 0)) },
      { id: 'previa_2', titular: 'remetente', texto: 'O que eu preciso fazer?', timestamp: new Date(new Date().setHours(0, 31, 0)) },
      { id: 'previa_3', titular: 'destinatario', texto: 'VÁ PARA 21 MAIN ST. PERGUNTE PELO PEDIDO DA HANNA GORDINHA. -A', timestamp: new Date(new Date().setHours(0, 32, 0)) },
      { id: 'previa_4', titular: 'destinatario', texto: 'Quer a grana? Sente e coma tudo. --A', timestamp: new Date(new Date().setHours(1, 0, 0)) },
      { id: 'previa_5', titular: 'destinatario', texto: 'Você sabe como se livrar disso. --A', timestamp: new Date(new Date().setHours(1, 27, 0)) },
      { id: 'previa_6', titular: 'destinatario', texto: 'OINC OINC. -A', timestamp: new Date(new Date().setHours(1, 28, 0)) },
      { id: 'previa_7', titular: 'destinatario', texto: 'Cuidado, Hanna. Ouvi dizer que a comida da prisão engorda. -A', timestamp: new Date(new Date().setHours(16, 57, 0)) }
    ],
    fluxoDeDialogo: [
      {
        gatilho: "Me deixa em paz!",
        respostas: ["Você achou que estava segura? Vamos ver se sua memória é boa."],
        acaoEspecial: "abrirJogoMemoria"
      }
    ]
  }
};