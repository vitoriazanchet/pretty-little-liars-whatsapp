import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MensagemData } from '../../../services/types';
import { styles } from "./styles";

interface ConversaProps {
  mensagens: MensagemData[];
  dataInicioLabel: string;
  mensagensTemporarias: boolean;
}

export const Conversa: React.FC<ConversaProps> = ({ mensagens, dataInicioLabel, mensagensTemporarias }) => {

  const formatarHora = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <ImageBackground 
      source={require('../../../../assets/wallpaper.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
    <FlatList
      data={mensagens}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      ListHeaderComponent={
        mensagensTemporarias ? (
          <View style={styles.containerAvisoTopo}>
            <View style={styles.balaoAviso}>
            <MaterialCommunityIcons name="progress-clock" size={18}/>
              <Text style={styles.textoAviso}>Mensagens temporárias confuguradas.</Text>
            </View>
          </View>
        ) : (
          <View style={styles.containerAvisoTopo}>
            <View style={styles.balaoAviso}>
              <Text style={styles.textoAviso}>{dataInicioLabel}</Text>
            </View>
          </View>
        )
      }
      renderItem={({ item }) => {
        const ehRemetente = item.titular === 'remetente';
        return (
          <View style={[styles.linha, ehRemetente ? styles.linhaRemetente : styles.linhaDestinatario]}>
            <View style={[styles.balao, ehRemetente ? styles.balaoRemetente : styles.balaoDestinatario]}>
              <Text style={styles.textoMsg}>{item.texto}</Text>
              <Text style={styles.textoHora}>{formatarHora(item.timestamp)}</Text>
            </View>
          </View>
        );
      }}
    />
    </ImageBackground>
  );
};