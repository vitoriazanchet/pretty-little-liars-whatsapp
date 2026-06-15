import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    footer: { 
        flexDirection: 'row', 
        padding: 7, 
        backgroundColor: '#E1E1E1', 
        alignItems: 'center',
        gap: 10
    },
    inputContainer: { 
        flex: 1, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 24, 
        paddingVertical: 3, 
        marginRight: 10,
    },
    input: { 
        fontSize: 16, 
        paddingHorizontal: 5, 
        paddingVertical: 3,
        maxHeight: 100 
    },
    botaoEnviar: { 
        width: 35, 
        height: 35, 
        borderRadius: 20, 
        backgroundColor: '#00A884',
        color: '#FFFFFF',
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});