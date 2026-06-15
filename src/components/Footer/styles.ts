import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F4F4F5',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E9E9E9',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    color: '#747474',
    marginTop: 4,
  },
  textActive: {
    fontSize: 10,
    color: '#000000',
    fontWeight: '500',
    marginTop: 4,
  },
  iconDefaultColor: {
    color: '#747474',
  },
  iconActiveColor: {
    color: '#000000',
  }
});