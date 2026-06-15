import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 32,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90D9',
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 300,
  },
  botao: {
    backgroundColor: '#4A90D9',
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderRadius: 24,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});