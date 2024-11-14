import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const baseColor = colorScheme === 'dark' ? '#FFFFFF' : '#36343B';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1D1B201F', dark: '#36343B' }}
      headerText="Welcome to FierDetec"
      headerImage={
        <Image
          source={require('@/assets/images/logo-groot.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container} lightColor="#1D1B201F" darkColor="#36343B">
        <Text style={[styles.nomor, { color: baseColor }]}>50%</Text>
        <Text style={[styles.title, { color: baseColor }]}> Api</Text>
      </ThemedView>

      <ThemedView style={styles.container} lightColor="#1D1B201F" darkColor="#36343B">
        <Text style={[styles.nomor, { color: baseColor }]}>70%</Text>
        <Text style={[styles.title, { color: baseColor }]}>Asap</Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 50,
    width: 50,
    bottom: 10,
    left: 15,
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    height: 300,
  },
  nomor: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 45,
    left: 80,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 200,
    left: 110,
  }
});
