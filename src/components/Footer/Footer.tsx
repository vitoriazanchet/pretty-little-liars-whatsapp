import React, { useRef, useState } from "react";
import { Text, View, TouchableWithoutFeedback, Animated } from "react-native";
import { Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface FooterProps {
  onTabPress: (tabName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabPress }) => {
  const [activeTab, setActiveTab] = useState<string>("Conversas");
  const tabs = [
    { name: "Atualizações", lib: "SimpleLineIcons", iconOutline: "bubble", iconFilled: "bubble" },
    { name: "Ligações", lib: "Feather", iconOutline: "phone", iconFilled: "phone" },
    { name: "Comunidades", lib: "Feather", iconOutline: "users", iconFilled: "users" },
    { name: "Conversas", lib: "Ionicons", iconOutline: "chatbubbles-outline", iconFilled: "chatbubbles" },
    { name: "Configurações", lib: "Ionicons", iconOutline: "settings-outline", iconFilled: "settings" },
  ];
  const scaleValue = useRef(new Animated.Value(1)).current;
  const handlePress = (tabName: string) => {
    if (tabName === "Conversas") return;
    setActiveTab(tabName);
    onTabPress(tabName);
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.footer}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        const currentIcon = isActive ? tab.iconFilled : tab.iconOutline;
        const iconColor = isActive ? styles.iconActiveColor.color : styles.iconDefaultColor.color;

        return (
          <TouchableWithoutFeedback key={tab.name} onPress={() => handlePress(tab.name)}>
            <View style={styles.button}>
              <Animated.View style={isActive ? { transform: [{ scale: scaleValue }] } : {}}>
                {tab.lib === "SimpleLineIcons" && <SimpleLineIcons name={currentIcon as any} size={22} color={iconColor} />}
                {tab.lib === "Feather" && <Feather name={currentIcon as any} size={22} color={iconColor} />}
                {tab.lib === "Ionicons" && <Ionicons name={currentIcon as any} size={22} color={iconColor} />}
              </Animated.View>
              <Text style={isActive ? styles.textActive : styles.text}>{tab.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};