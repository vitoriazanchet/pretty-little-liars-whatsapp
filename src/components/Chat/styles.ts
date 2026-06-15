import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E2E2',
  },
  foto: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E1E1E1',
  },
  texto: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  linhaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  data: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  dataVerde: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  linhaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  mensagem: {
    flex: 1,
    fontSize: 14,
    color: '#7F7F7F',
    lineHeight: 18,
    marginRight: 8,
  },
  notificacao: {
    backgroundColor: '#10B981',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  textoNotificacao: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});