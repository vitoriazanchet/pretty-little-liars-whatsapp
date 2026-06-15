import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  primaria: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  canto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  topButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F4F4F2',
    color: '#080805',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00AD59',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8,
    marginBottom: 12,
  },
  secundaria: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#F6F4F5',
  },
  filterPillActive: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#CEFECE',
  },
  filterText: {
    fontSize: 14,
    color: '#777475',
    fontWeight: '600',
  },
  filterTextActive: {
    fontSize: 14,
    color: '#115F2F',
    fontWeight: '600',
  },
});