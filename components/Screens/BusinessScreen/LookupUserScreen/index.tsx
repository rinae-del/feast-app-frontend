import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PhoneInput from 'react-native-international-phone-number';

export default function LookupUserScreen() {

    const [searchUser, setSearchUser] = useState("")
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState("")
    const [selectedCountry, setSelectedCountry] = useState(null);

    function handleInputValue(phoneNumber: string | null | number | any) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: string | null | number | any) {
        setSelectedCountry(country);
    }
    const handleSearchUserInput = (text: string) => {
        setSearchUser(text);
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
                }}>User ID</Text>

                <TextInput
                    placeholder="XXXXXXXXX"
                    onChangeText={handleSearchUserInput}
                    value={searchUser}
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
                }}>Or, Phone Number</Text>
                {/* Adjusted the following to match the ui design */}
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
            </View>
            <Pressable onPress={() => router.push("/business/user_search_result")} style={({ pressed }) => [
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
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Lookup</Text>
            </Pressable>
        </View>
    )
}