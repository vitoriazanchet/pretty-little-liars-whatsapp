import React, { useState, useRef } from 'react';
import { View, SafeAreaView, Animated, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Header } from './src/components/Header/Header';
import { Footer } from './src/components/Footer/Footer';
import { Chat, ChatData } from './src/components/Chat/Chat';
import { TelaConversa } from './src/components/TelaConversa/TelaConversa';
import { localStyles } from './styles';

export default function App() {
  const [chatAtivoId, setChatAtivoId] = useState<string | null>(null);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<any>(null); 
  const zoomValue = useRef(new Animated.Value(0)).current;

  const triggerZoomImage = (imagemParaAbrir: any) => {
    if (!imagemParaAbrir) return;
    setCurrentImage(imagemParaAbrir);
    setShowImage(true);
    Animated.sequence([
      Animated.timing(zoomValue, { toValue: 1.1, duration: 150, useNativeDriver: true }),
      Animated.delay(1000),
      Animated.timing(zoomValue, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start(() => {
      setShowImage(false);
      setCurrentImage(null);
    });
  };

  const [listaDeConversas, setListaDeConversas] = useState<ChatData[]>([
    {
      id: "1",
      nome: "Traficante",
      mensagem: "Ja falei que num vendo monjaro, mais se tu quise crack te faço a 5 conto",
      data: "17:03",
      naolido: 1,
      foto: require("./assets/perfil/traficante.jpg"),
      tipoClique: "conversa"
    },
    {
      id: "2",
      nome: "Aria",
      mensagem: "digitando...",
      data: "17:02",
      naolido: 2,
      foto: require("./assets/perfil/aria.jpg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/aria!.jpg")
    },
    {
      id: "3",
      nome: "Emily",
      mensagem: "A também te mandou mensagem?",
      data: "16:57",
      naolido: 1,
      foto: require("./assets/perfil/emily.jpg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/emily!.jpg")
    },
    {
      id: "4",
      nome: "Fugitivos da Geladeira",
      mensagem: "Adm: Meta da samana: 7 dias só de água! Se sobreviverem, passo a próxima...",
      data: "16:57",
      naolido: 0,
      foto: require("./assets/perfil/geladeira.jpeg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/geladeira!.jpg")
    },
    {
      id: "5",
      nome: "A",
      mensagem: "Cuidado, Hanna. Ouvi dizer que a comida da prisão engorda. -A",
      data: "16:57",
      naolido: 0,
      foto: require("./assets/perfil/a.jpeg"),
      tipoClique: "conversa"
    },
    {
      id: "6",
      nome: "Spencer Talarica",
      mensagem: "Me perdoa, não sei pq beijei o Caleb!",
      data: "16:31",
      naolido: 0,
      foto: require("./assets/perfil/spencer.jpg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/spencer!.jpg")
    },
    {
      id: "7",
      nome: "Caleb Traidor",
      mensagem: "Vamos conversar, eu te amo!",
      data: "16:30",
      naolido: 0,
      foto: require("./assets/perfil/caleb.jpg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/caleb!.jpg")
    },
    {
      id: "8",
      nome: "Mona",
      mensagem: "Me encontra no shopping, é urgênte!",
      data: "16:18/",
      naolido: 0,
      foto: require("./assets/perfil/mona.jpg"),
      tipoClique: "imagem",
      imagemRetorno: require("./assets/personagens/mona!.jpg")
    }
  ]);

  const contarNaoLidas = (chats: ChatData[]): number => { 
    const conversasNaoLidas = chats.filter(chat => chat.naolido > 0);
    return conversasNaoLidas.length;
  };

  const handleAoClicar = (idDoChat: string) => {
    setListaDeConversas(conversasAtuais =>
      conversasAtuais.map(chat =>
        chat.id === idDoChat ? { ...chat, naolido: 0 } : chat
      )
    );
    setChatAtivoId(idDoChat);
  };

  const contatoAtivo = listaDeConversas.find(chat => chat.id === chatAtivoId);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {chatAtivoId && contatoAtivo ? (
        <TelaConversa 
          idDaConversaAtual={chatAtivoId}
          dados={contatoAtivo}
          onVoltarParaListaGeral={() => setChatAtivoId(null)}
        />
      ) : (
      <>
      <Header unreadCount={contarNaoLidas(listaDeConversas)} /> 
      <SafeAreaView style={localStyles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={listaDeConversas}
            keyExtractor={conversa => conversa.id}
            contentContainerStyle={{ paddingBottom: 55 }}
            showsVerticalScrollIndicator={true}
            renderItem={({ item: conversa }) => (
              <Chat
                dados={conversa}
                aoClicar={
                  conversa.tipoClique === "conversa"
                    ? () => handleAoClicar(conversa.id)
                    : () => triggerZoomImage(conversa.imagemRetorno)
                }
              />
            )}
          />
        </View>
        <Footer onTabPress={() => triggerZoomImage(require('./assets/personagens/hanna!.jpg'))} />
      </SafeAreaView>
      </>
      )}
      {showImage && (
        <View style={localStyles.imageOverlay}>
          <Animated.Image source={currentImage} style={[localStyles.popupImage,{ transform: [{ scale: zoomValue }], opacity: zoomValue }]}/>
        </View>
      )}
    </GestureHandlerRootView>
  );
}