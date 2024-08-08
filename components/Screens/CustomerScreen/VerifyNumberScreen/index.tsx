import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function VerifyNumberScreen() {

    const [verifyNumber, setVerifyNumber] = useState("")
    const handleVerifyNumberInput = (text: string) => {
        setVerifyNumber(text);
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
                    textAlign: 'center',
                    marginBottom: 8
                }}>Please verify your phone number by
                    entering the verification code we just sent
                    to your phone number.</Text>

                <TextInput
                    keyboardType='numeric'
                    placeholder="XXXXXX"
                    onChangeText={handleVerifyNumberInput}
                    value={verifyNumber}
                    style={{
                        backgroundColor: Colors.white,
                        borderWidth: 1,
                        borderColor: Colors.white,
                        borderRadius: 6,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        fontFamily: "Montserrat_500Medium",
                        color: "#212529"
                    }}
                />
            </View>
            <Pressable onPress={() => router.push("/customer/signup")} style={({ pressed }) => [
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
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Verify Number</Text>
            </Pressable>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 14,
                    textAlign: 'center'
                }}>Did not get the code?</Text>

                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 14,
                    textAlign: 'center',
                }}>If you did not receive the code, go back to

                </Text>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 14,
                    textAlign: 'center'
                }}> try again.</Text>
                <Text onPress={() => router.back()} style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 14,
                    textAlign: 'center',
                    marginTop: 10,
                    textDecorationLine: 'underline'
                }}>Go Back</Text>
            </View>
        </View>
    )
}