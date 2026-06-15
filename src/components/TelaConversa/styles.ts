import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  containerBotoes: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 16, 
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  containerJogoMock: { 
    padding: 16, 
    backgroundColor: '#FFF', 
    alignItems: 'center'
  },
  botaoFixo: { 
    backgroundColor: '#00A884', 
    paddingHorizontal: 32, 
    paddingVertical: 12, 
    borderRadius: 24
  },
  textoBotao: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 15
  }
});