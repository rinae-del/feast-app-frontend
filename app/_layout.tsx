
import { Stack, useRouter } from 'expo-router';
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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
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

  function goToDashboard() {
    // const router = useRouter()
    // router.push("/customer/account")
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
          headerShown: false
        }} />

        {/* Business screens */}
        <Stack.Screen name="business/main_login_screen/index" options={{ headerShown: false }} />
        <Stack.Screen name="business/login/index" options={{ headerShown: true, title: "Sign In" }} />
        <Stack.Screen name="business/reset_password/index" options={{ headerShown: true, title: "Reset Password" }} />
        <Stack.Screen name="business/dashboard/index" options={{ headerShown: true, title: "Dashboard" }} />
        <Stack.Screen name="business/lookup_user/index" options={{ headerShown: true, title: "Lookup User" }} />
        <Stack.Screen name="business/user_search_result/index" options={{ headerShown: true, title: "User" }} />
        <Stack.Screen name="business/account/index" options={{
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: "#000" }, headerShown: true, title: "My Account"
        }} />

        {/* Customer screens */}
        <Stack.Screen name="customer/main_login_screen/index" options={{ headerShown: false }} />
        <Stack.Screen name="customer/login/index" options={{ headerShown: true, title: "Sign In" }} />
        <Stack.Screen name="customer/reset_password/index" options={{ headerShown: true, title: "Reset Password" }} />
        <Stack.Screen name="customer/verify_number/index" options={{ headerShown: true, title: "Verify Your Number" }} />
        <Stack.Screen name="customer/signup/index" options={{ headerShown: true, title: "Register" }} />
        <Stack.Screen name="customer/history/index" options={{ headerShown: true, title: "History", headerRight: () => <Link href="/customer/my_account"><MaterialCommunityIcons name="account-circle" size={24} color="black" /></Link> }} />
        <Stack.Screen name="customer/location_search/index" options={{ headerShown: true, title: "Location" }} />
        <Stack.Screen name="customer/final_step/index" options={{ headerShown: true, title: "Final Step" }} />
        <Stack.Screen name="customer/dashboard/index" options={{ headerShown: true, title: "Dashboard", headerRight: () => <Link href="/customer/my_account"><MaterialCommunityIcons name="account-circle" size={24} color="black" /></Link> }} />
        <Stack.Screen name="customer/my_profile/index" options={{ headerShown: true, title: "My Profile" }} />
        <Stack.Screen name="customer/store_credit/index" options={{ headerShown: true, title: "Store Credit", headerRight: () => <Link href="/customer/my_account"><MaterialCommunityIcons name="account-circle" size={24} color="black" /></Link> }} />
        <Stack.Screen name="customer/my_account/index" options={{
          headerTintColor: Colors.white,
          headerStyle: { backgroundColor: "#000" }, headerShown: true, title: "My Account", headerRight: () => <MaterialCommunityIcons name="account-circle" size={24} color="black" />
        }} />

      </Stack>
    </SafeAreaProvider>
  );
}
