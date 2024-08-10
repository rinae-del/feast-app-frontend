import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function MyAccountScreen() {
    const navigation = useNavigation()
    const router = useRouter()
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => <Pressable onPress={() => router.push("/customer/account")}><FontAwesome6 name="circle-user" size={24} color="white" /></Pressable>
        });
    }, [navigation]);
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.black,
            padding: 20,
        }}>
            <Pressable onPress={() => router.push("/customer/my_profile")} style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.white,
                    fontSize: 14.4,
                    marginTop: 20,
                    width: "100%",
                },
                {
                    backgroundColor: pressed ? Colors.black : Colors.lightGray,
                },
            ]}>
                <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Update Profile</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/customer/login")} style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.white,
                    fontSize: 14.4,
                    marginVertical: 20,
                    width: "100%",
                },
                {
                    backgroundColor: pressed ? Colors.black : Colors.lightGray,
                },
            ]}>
                <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Sign Out</Text>
            </Pressable>
        </View>
    )
}