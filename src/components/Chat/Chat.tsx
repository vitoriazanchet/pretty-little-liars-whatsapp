import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface ChatData {
  id: string;
  nome: string;
  mensagem: string;
  data: string;
  naolido: number;
  foto: any;
  tipoClique: "imagem" | "conversa";
  imagemRetorno?: any;
}

interface ChatProps {
  dados: ChatData;
  aoClicar: () => void;
}

export const Chat: React.FC<ChatProps> = ({ dados, aoClicar }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={aoClicar}>
      <Image source={dados.foto} style={styles.foto} />
      <View style={styles.texto}>
        <View style={styles.linhaSuperior}>
          <Text style={styles.nome} numberOfLines={1}>{dados.nome}</Text>
          <Text style={dados.naolido > 0 ? styles.dataVerde : styles.data}>{dados.data}</Text>
        </View>
        <View style={styles.linhaInferior}>
          <Text style={styles.mensagem} numberOfLines={2}>{dados.mensagem}</Text>
          {dados.naolido > 0 && (
            <View style={styles.notificacao}>
              <Text style={styles.textoNotificacao}>{dados.naolido}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};