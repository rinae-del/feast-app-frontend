import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import bg from "../../../../assets/woman-eating.jpg";
import PhoneInput from 'react-native-international-phone-number';


export default function LoginMainPage() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [inputValue, setInputValue] = useState('');

    function handleInputValue(phoneNumber: string | null | number | any) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: string | null | number | any) {
        setSelectedCountry(country);
    }


    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.image} blurRadius={1}>
            <View style={styles.overlay} />
            <View style={{
                flex: 1,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    position: 'absolute',
                    bottom: 200,
                    width: '100%'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.lightGray,
                        fontFamily: "Montserrat_900Black",
                        fontSize: 20
                    }}>Sign In With Your</Text>
                    <Text style={{
                        textAlign: 'center',
                        color: Colors.lightGray,
                        fontFamily: "Montserrat_900Black",
                        fontSize: 20
                    }}>
                        Mobile Number</Text>
                    <View style={{
                        marginVertical: 20
                    }}>
                        <Text style={{
                            color: Colors.lightGray,
                            textAlign: 'center',
                            fontFamily: "Montserrat_400Regular",
                        }}>We’ll check if you have an account, and</Text>
                        <Text style={{
                            color: Colors.lightGray,
                            textAlign: 'center',
                            fontFamily: "Montserrat_400Regular",


                        }}>help create one if you don’t.</Text>
                    </View>

                    {/* Adjusted the following to match the ui design */}
                    <PhoneInput
                        defaultCountry="ZA"
                        placeholder=""
                        phoneInputStyles={{
                            container: {
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: '#fff',
                            },
                            flagContainer: {
                                backgroundColor: '#fff',
                                paddingHorizontal: 10,
                                borderWidth: 0
                            },
                            flag: {
                                padding: 0,
                                borderWidth: 0
                            },
                            divider: {
                                backgroundColor: '#fff',
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
                    <Pressable style={({ pressed }) => [
                        {
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: Colors.lightGray,

                            fontSize: 14.4,
                            marginVertical: 20,
                            width: "100%",

                        },
                        {
                            backgroundColor: pressed ? Colors.lightGray : "transparent",
                        },
                    ]}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Continue</Text>
                    </Pressable>
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    countryCode: {
        fontSize: 18,
        marginRight: 10,
    },
    phoneInput: {
        borderBottomWidth: 1,
        flex: 1,
        fontSize: 18,
    },
});