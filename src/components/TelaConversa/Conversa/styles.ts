import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  listContainer: { 
    paddingHorizontal: 12, 
    paddingBottom: 16
  },
  containerAvisoTopo: { 
    alignItems: 'center', 
    marginVertical: 12
  },
  balaoAviso: {
    backgroundColor: '#F4F4F2',
    color: '#7F7F7F',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    gap: 2
  },
  textoAviso: { 
    fontSize: 12, 
    color: '#7F7F7F', 
    textAlign: 'center', 
    lineHeight: 16
  },
  linha: { 
    flexDirection: 'row', 
    marginBottom: 6
  },
  linhaRemetente: { 
    justifyContent: 'flex-end'
  },
  linhaDestinatario: { 
    justifyContent: 'flex-start'
  },
  balao: { 
    maxWidth: '75%', 
    paddingHorizontal: 10, 
    paddingVertical: 6, 
    borderRadius: 8
  },
  balaoRemetente: { 
    backgroundColor: '#CEFECE', 
    padding: 20,
    borderTopRightRadius: 2
  },
  balaoDestinatario: { 
    backgroundColor: '#FFFFFF', 
    borderTopLeftRadius: 2
  },
  textoMsg: { 
    fontSize: 16, 
    color: '#000000'
  },
  textoHora: { 
    fontSize: 10, 
    color: '#667781', 
    textAlign: 'right', 
    marginTop: 2
  }
});