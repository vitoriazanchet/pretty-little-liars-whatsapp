import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

interface ConversaFooterProps {
  onEnviarMensagem: (texto: string) => void;
  onInputFocus: () => string | null;
}

export const ConversaFooter: React.FC<ConversaFooterProps> = ({ onEnviarMensagem, onInputFocus }) => {
  const [texto, setTexto] = useState('');

  const handleEnviar = () => {
    if (!texto.trim()) return;
    onEnviarMensagem(texto);
    setTexto('');
  };

  const handleFocus = () => {
    if (texto.trim() === '' && onInputFocus) {
      const gatilhoSugerido = onInputFocus();
      if (gatilhoSugerido) {
        setTexto(gatilhoSugerido);
      }
    }
  };

  return (
    <View style={styles.footer}>
      <Feather name="plus" size={22}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={texto} onChangeText={setTexto} multiline onFocus={handleFocus}/>
      </View>
      {texto.length > 0 && (
        <TouchableOpacity style={styles.botaoEnviar} onPress={handleEnviar}>
          <Ionicons name="send" size={22} color="#FFFFFF"/>
        </TouchableOpacity>
      )}
      <Feather name="camera" size={22}/>
      <AntDesign name="audio" size={22}/>  
    </View>
  );
};