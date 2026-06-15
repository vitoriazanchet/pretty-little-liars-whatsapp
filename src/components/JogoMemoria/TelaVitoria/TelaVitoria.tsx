import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const IMAGEM_VITORIA = require('../../../../assets/vencedor.jpg');

interface TelaVitoriaProps {
  onVoltar: () => void;
}

export const TelaVitoria: React.FC<TelaVitoriaProps> = ({ onVoltar }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Você derrotou A!</Text>
      <Image source={IMAGEM_VITORIA} style={styles.imagem} resizeMode="contain" />
      <TouchableOpacity style={styles.botao} onPress={onVoltar}>
        <Text style={styles.textoBotao}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};