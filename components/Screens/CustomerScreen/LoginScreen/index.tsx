import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import PhoneInput from 'react-native-international-phone-number';

export default function LoginScreen() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState("")

    function handleInputValue(phoneNumber: string | null | number | any) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: string | null | number | any) {
        setSelectedCountry(country);
    }

    const handlePasswordInput = (text: string) => {
        setPassword(text);
    };
    const router = useRouter()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,

        }}>
            {/* <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>Mobile Phone #</Text>
               
                <PhoneInput
                    defaultCountry="CA"
                    placeholder="+13065014513"
                    phoneInputStyles={{
                        container: {
                            backgroundColor: Colors.white,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: Colors.white,
                        },
                        flagContainer: {
                            backgroundColor: Colors.white,
                            paddingHorizontal: 10,
                            borderWidth: 0
                        },
                        flag: {
                            padding: 0,
                            borderWidth: 0
                        },
                        divider: {
                            backgroundColor: Colors.white,
                            borderWidth: 0,
                            padding: 0,
                            marginLeft: 0
                        },
                        callingCode: {
                            margin: 0,
                            padding: 0
                        },
                        input: {
                            marginLeft: 0,
                            fontFamily: "Montserrat_500Medium",
                        }

                    }}
                    value={inputValue}
                    onChangePhoneNumber={handleInputValue}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={handleSelectedCountry}
                />
            </View> */}

            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>Password</Text>

                <TextInput
                    placeholder="XXXXXX"
                    secureTextEntry={true}
                    onChangeText={handlePasswordInput}
                    value={password}
                    style={{
                        backgroundColor: Colors.white,
                        borderWidth: 1,
                        borderColor: Colors.white,
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        fontFamily: "Montserrat_500Medium",
                        color: "#212529"
                    }}
                />
            </View>
            <Pressable onPress={() => router.push("/customer/verify_number")} style={({ pressed }) => [
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
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Sign In</Text>
            </Pressable>

            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 14,
                    textAlign: 'center'
                }}>Forgot Password?</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text onPress={() => router.push("/customer/reset_password")} style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_700Bold",
                        fontSize: 14,
                        textAlign: 'center',
                        textDecorationLine: 'underline'
                    }}>Click Here</Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 14,
                        textAlign: 'center'

                    }}> to reset your password</Text>

                </View>
            </View>
        </View>
    )
}