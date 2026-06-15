import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    header: {
        width: '100%',
        backgroundColor: '#E1E1E1',
        paddingVertical: 8,
        paddingTop: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrow: {
        marginLeft: 18,
    },
    foto: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginHorizontal: 18,
        backgroundColor: '#FFFFFF',
    },
    nome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    status: {
        fontSize: 14,
        color: '#7B7B7B',
    },
    infoInterlocutor: { 
        flex: 1,
        flexDirection: 'row',
    },
    infoTexto: {
        flexDirection: 'column',
    }
});