import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';


export default function ResetPasswordScreen() {
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleOtpInput = (text: string) => {
        setOtp(text);
    };
    const handleNewPasswordInput = (text: string) => {
        setNewPassword(text);
    };
    const handleConfirmPasswordInput = (text: string) => {
        setConfirmPassword(text);
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
                    marginBottom: 8
                }}>Enter the code we sent to your phone</Text>

                <TextInput
                    keyboardType='numeric'
                    placeholder="XXXXX"
                    onChangeText={handleOtpInput}
                    value={otp}
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
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>New Password</Text>

                <TextInput
                    secureTextEntry={true}
                    placeholder="Type a new password"
                    onChangeText={handleNewPasswordInput}
                    value={newPassword}
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
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>Repeat New Password</Text>

                <TextInput
                    secureTextEntry={true}
                    placeholder="Type your new password again"
                    onChangeText={handleConfirmPasswordInput}
                    value={confirmPassword}
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
            <Pressable onPress={() => router.push("/business/login")} style={({ pressed }) => [
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
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Reset & Sign In</Text>
            </Pressable>
        </View>
    )
}