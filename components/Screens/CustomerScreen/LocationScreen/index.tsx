import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router'

export default function LocationScreen() {
    const [city, setCity] = useState("")

    const handleCityInput = (text: string) => {
        setCity(text);
    };
    const router = useRouter()



    return (
        <View style={{

            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,

        }}>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8,
                    textAlign: 'center'
                }}>Please specify your home city</Text>

                <View style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: Colors.white,
                    alignItems: 'center',
                    gap: 10,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    backgroundColor: Colors.white,
                }}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        placeholder="Type your city name"
                        onChangeText={handleCityInput}
                        value={city}
                        style={{

                            paddingVertical: 6,
                            fontFamily: "Montserrat_500Medium",
                            color: "#212529",
                            width: '90%'
                        }}
                    />
                </View>
            </View>
            <Pressable onPress={() => router.push("/customer/final_step")} style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.black,

                    fontSize: 14.4,
                    marginVertical: 20,
                    width: "100%",

                },
                {
                    backgroundColor: pressed ? Colors.lightGray : Colors.black,
                },
            ]}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Continue</Text>
            </Pressable>
        </View>
    )
}