import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function MyAccountScreen() {
    const navigation = useNavigation()
    const router = useRouter()
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => <Pressable onPress={() => router.push("/business/account")}><FontAwesome6 name="circle-user" size={24} color="white" /></Pressable>
        });
    }, [navigation]);
    return (
        <View style={{

            flex: 1,
            backgroundColor: Colors.black,
            padding: 20,

        }}>
            <Pressable onPress={() => router.push("/business/login")} style={({ pressed }) => [
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