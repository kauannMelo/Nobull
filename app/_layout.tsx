// app/_layout.tsx
import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import Splash from '../components/SplashScreen';

// Impede o app de ocultar a splash screen nativa automaticamente
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (Platform.OS === 'android') {
        await NavigationBar.setBackgroundColorAsync('#000000');
        await NavigationBar.setButtonStyleAsync('light');
      }

      // Simula carregamento (ex: fontes, auth, configs)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setAppIsReady(true); // Só isso aqui
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1 }} onLayout={async () => {
        await SplashScreen.hideAsync(); // Esconde somente quando a UI estiver montada
      }}>
        <Splash />
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </NativeBaseProvider>
  );
}
