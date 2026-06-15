import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface HeaderProps {
  unreadCount: number;
}

export const Header: React.FC<HeaderProps> = ({ unreadCount }) => {
  const [activeFilter, setActiveFilter] = useState<string>("Todas");
  const filters = ["Todas", "Grupos 1", "Não lidas"];
  return (
    <View style={styles.header}>
      <View style={styles.primaria}>
        <TouchableOpacity style={styles.topButton} activeOpacity={0.7}>
          <Feather name="more-horizontal" size={20}/>
        </TouchableOpacity>
        <View style={styles.canto}>
          <TouchableOpacity style={styles.topButton} activeOpacity={0.7}>
            <Feather name="camera" size={18}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusButton} activeOpacity={0.7}>
            <Feather name="plus" size={18}/>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.titulo}>Conversas</Text>
      <View style={styles.secundaria}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          const filterLabel = filter === "Não lidas" && unreadCount > 0 
            ? `${filter} (${unreadCount})` 
            : filter;
          return (
            <TouchableOpacity
              key={filter}
              activeOpacity={0.7}
              style={isActive ? styles.filterPillActive : styles.filterPill}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={isActive ? styles.filterTextActive : styles.filterText}>
                {filterLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};