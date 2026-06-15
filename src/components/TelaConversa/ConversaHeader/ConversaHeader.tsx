import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export interface ConversaHeaderData {
  id: string;
  nome: string;
  foto: any;
  status: string;
}

interface ConversaHeaderProps {
  dados: ConversaHeaderData;
  onVoltarParaListaGeral: () => void;
}

export const ConversaHeader: React.FC<ConversaHeaderProps> = ({ dados, onVoltarParaListaGeral }) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={onVoltarParaListaGeral}>
          <MaterialIcons name="arrow-back-ios-new" size={18} style={styles.arrow} />
        </TouchableOpacity>
        <View style={styles.infoInterlocutor}>
            <Image source={dados.foto} style={styles.foto} />
            <View style={styles.infoTexto}>
                <Text style={styles.nome} numberOfLines={1}>{dados.nome}</Text>
                <Text style={styles.status}>{dados.status}</Text>
          </View>
        </View>
      </View>
  );
};

