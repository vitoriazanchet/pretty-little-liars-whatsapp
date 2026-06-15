# Pretty Little Liars — App Interativo
> Projeto mobile desenvolvido em React Native com Expo

## ✨ Sobre o Projeto ✨

Simulação de um aplicativo de mensagens inspirado na série *Pretty Little Liars*, com conversas interativas, fluxos de diálogo automatizados e um jogo da memória integrado.

![Video do site](https://github.com/vitoriazanchet/pretty-little-liars-whatsapp/blob/main/public/assets/pretty-little-liars-whatsapp.gif)

### 📱 Tela de Referência

![Tela de referência](https://github.com/vitoriazanchet/pretty-little-liars-whatsapp/blob/main/assets/whatsapp.png)

---

## 🦾 Funcionalidades

- Lista de conversas estilo WhatsApp com notificações de não lidas
- Conversas com respostas automáticas baseadas em gatilhos de texto
- Botões de escolha com ações especiais (abrir vídeo)
- Reprodução de vídeos locais em tela cheia
- Jogo da memória para dois jogadores locais (Hanna vs A)
- Tela de vitória com imagem (Hanna vence) ou vídeo (A vence)
- Zoom animado em imagens de contatos

---

## 🗂️ Estrutura de Componentes

```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Chat/
│   ├── TelaConversa/
│   │   ├── Conversa/
│   │   ├── ConversaHeader/
│   │   └── ConversaFooter/
│   ├── TelaVideo/
│   └── JogoMemoria/
│       └── TelaVitoria/
└── services/
    ├── types.ts
    └── fluxoConversas.ts
```

---

## ⚙️ Componentes e Elementos React Native Utilizados

| Componente / Elemento | Onde é usado |
|---|---|
| `View` | Estrutura de layout geral |
| `StyleSheet` | Estilização de todos os componentes |
| `Image` | Fotos de perfil, cartas do jogo, tela de vitória |
| `Text` | Mensagens, nomes, botões, placar |
| `TouchableOpacity` | Botões, itens da lista, cartas do jogo |
| `FlatList` | Lista de conversas, Grid de cartas do jogo da memória |
| `TextInput` | Campo de digitação da conversa |
| `Animated` | Zoom de imagem, animação do footer |
| `KeyboardAvoidingView` | Tela de conversa (evitar teclado) |
| `SafeAreaView` | Container principal |
| `ImageBackground` | Wallpaper da tela de conversa |

---

## 💻 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/) — reprodução de vídeo
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) — ícones (Ionicons, Feather, AntDesign)
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)

---

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/vitoriazanchet/pretty-little-liars-whatsapp.git
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd pretty-little-liars-whatsapp
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
     ```
4.  **Inicie o projeto:**
    ```bash
    npx expo start
    ```
5.  Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

---

## 📌 Requisitos Atendidos

- [x] `View` — estrutura e containers
- [x] `StyleSheet` — estilização
- [x] `Image` — imagens de personagens e cartas
- [x] `Text` — textos e mensagens
- [x] `TouchableOpacity` — interações e botões
- [x] `FlatList` — lista de conversas
- [x] `TextInput` — input de mensagem

---

## 👩‍💻 Criadora
|**Vitória Zanchet**  | [GitHub](https://github.com/vitoriazanchet) | [LinkedIn](https://www.linkedin.com/in/vitoria-zanchet) |
| --- | --- | --- |

---

## 📄 Licença

Projeto desenvolvido para fins educacionais no programa **Serratec** — Residência em Tecnologia da Informação.

---
