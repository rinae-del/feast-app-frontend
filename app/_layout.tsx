
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black
} from '@expo-google-fonts/montserrat';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Pressable, StatusBar } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#212529" />
      <Stack screenOptions={{
        headerTintColor: Colors.black,
        headerStyle: { backgroundColor: Colors.lightGray },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: "Montserrat_900Black",
          fontSize: 16,

        },
        headerTitleAlign: "center",
        headerShadowVisible: false
      }}>
        <Stack.Screen name="index" options={{
          headerShown: true, title: "User", headerRight: () => <Pressable><FontAwesome6 name="circle-user" size={24} color="black" /></Pressable>
        }} />
        {/* <Stack.Screen name="customer/login" options={{ headerShown: false }} /> */}

      </Stack>
    </SafeAreaProvider>
  );
}
