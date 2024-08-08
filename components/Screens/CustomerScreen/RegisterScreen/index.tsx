import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'

export default function RegisterScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlefirstNameInput = (text: string) => {
        setFirstName(text);
    };


    const handlelastNameInput = (text: string) => {
        setLastName(text);
    };

    const handleEmailInput = (text: string) => {
        setEmail(text);
    };

    const handlePasswordInput = (text: string) => {
        setPassword(text);
    };



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
                }}>What is your full name?</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 10,
                    width: '100%'
                }}>
                    <TextInput
                        placeholder="First Name"
                        onChangeText={handlefirstNameInput}
                        value={firstName}
                        style={{
                            backgroundColor: Colors.white,
                            borderWidth: 1,
                            borderColor: Colors.white,
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            fontFamily: "Montserrat_500Medium",
                            color: "#212529",
                            width: '50%'
                        }}
                    />
                    <TextInput
                        placeholder="Last Name"
                        onChangeText={handlelastNameInput}
                        value={lastName}
                        style={{
                            backgroundColor: Colors.white,
                            borderWidth: 1,
                            borderColor: Colors.white,
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            fontFamily: "Montserrat_500Medium",
                            color: "#212529",
                            width: '50%'
                        }}
                    />
                </View>
            </View>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8,
                    textAlign: 'center'

                }}>What is your email address?</Text>

                <TextInput
                    placeholder="Email Address"
                    onChangeText={handleEmailInput}
                    value={email}
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
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8,
                    textAlign: 'center'
                }}>Choose A Password</Text>

                <TextInput
                    placeholder="Required"
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
            <Pressable style={({ pressed }) => [
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
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Sign Up</Text>
            </Pressable>

        </View>
    )
}