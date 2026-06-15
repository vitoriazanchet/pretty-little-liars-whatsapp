import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

interface TelaVideoProps {
  source: any;
  onFim: () => void;
}

export const TelaVideo: React.FC<TelaVideoProps> = ({ source, onFim }) => {
  const videoRef = useRef(null);

  const handlePlaybackUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      onFim();
    }
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Video
        ref={videoRef}
        source={source}
        style={{ flex: 1 }}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        onPlaybackStatusUpdate={handlePlaybackUpdate}
      />
    </View>
  );
};