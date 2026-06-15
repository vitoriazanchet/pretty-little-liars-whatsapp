import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const NUM_COLUNAS = 4;
const TAMANHO_CARTA = (width - 48) / NUM_COLUNAS;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 18,
  },

  placar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 5,
    backgroundColor: '#222',
    borderRadius: 12,
    paddingVertical: 10,
  },
  jogadorInfo: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 4,
    borderRadius: 8,
  },
  vezAtiva: {
    backgroundColor: '#333',
  },
  nomeJogador: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  corHanna: {
    color: '#4A90D9',
  },
  corA: {
    color: '#D94A4A',
  },
  pontos: {
    fontSize: 13,
    color: '#AAA',
    marginTop: 2,
  },
  separador: {
    width: 1,
    height: '80%',
    backgroundColor: '#444',
  },

  grid: {
    paddingHorizontal: 12,
    gap: 6,
  },
  cartaWrapper: {
    margin: 3,
  },
  carta: {
    width: TAMANHO_CARTA,
    height: TAMANHO_CARTA,
    borderRadius: 8,
  },
  cartaHanna: {
    opacity: 0.5,
    borderWidth: 2,
    borderColor: '#4A90D9',
  },
  cartaA: {
    opacity: 0.5,
    borderWidth: 2,
    borderColor: '#D94A4A',
  },
});