import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import PhoneInput from 'react-native-international-phone-number';

export default function EditProfile() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const [profileFromStorage, setProfileFromStorage] = useState("")
    const [image, setImage] = useState<string | null | any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const handlefirstNameInput = (text: string) => {
        setFirstName(text);
    };
    const handlelastNameInput = (text: string) => {
        setLastName(text);
    };
    function handleInputValue(phoneNumber: string | null | number | any) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: string | null | number | any) {
        setSelectedCountry(country);
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });


        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // This is temporary until we connect to the backend
    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem('displayPicture', value);
        } catch (e) {
            // saving error
            console.log("async error", e)
        }
    };
    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('displayPicture');
                if (value !== null) {
                    // value previously stored
                    setProfileFromStorage(value)
                }
            } catch (e) {
                // error reading value
                console.log("async error", e)
            }
        };
        getData()
    }, [])

    // console.log(profileFromStorage)
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,
        }}>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{
                    flex: 3, // Takes 30% of space
                }}>
                    <Text style={{
                        marginBottom: 10,
                        color: Colors.black,
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 14
                    }}>Profile Pic</Text>
                    <Pressable onPress={pickImage} style={({ pressed }) => [
                        {
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            overflow: 'hidden',
                            // marginHorizontal: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginVertical: 20
                        },
                        {
                            backgroundColor: pressed ? Colors.lightGray : Colors.white,
                        },
                    ]}>
                        {profileFromStorage !== null || profileFromStorage !== "" ? <Image
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            source={{
                                uri: profileFromStorage,
                            }}
                        /> :
                            <AntDesign name="user" size={24} color="black" />}

                    </Pressable>
                </View>
                <View style={{
                    flex: 6, // Takes 60% of space
                }}>
                    <Text style={{
                        marginBottom: 10,
                        color: Colors.black,
                        fontFamily: "Montserrat_500Medium",
                        fontSize: 14
                    }}>Full Name</Text>
                    <View style={{
                        gap: 10
                    }}>

                        <TextInput
                            placeholder="Amanda"
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
                                color: "#212529"
                            }}
                        />
                        <TextInput
                            placeholder="Wilkie"
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
                                color: "#212529"
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>Email Address</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 10,
                    width: '100%',
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    backgroundColor: Colors.white,
                    borderColor: Colors.white,
                }}>
                    <TextInput
                        placeholder="Amanda.wilkie98@gmail.com"
                        editable={false}
                        style={{
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            fontFamily: "Montserrat_500Medium",
                            color: Colors.black,
                            flex: 7
                        }}
                    />
                    <EvilIcons name="lock" size={26} color="black" />
                </View>
            </View>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_500Medium",
                    fontSize: 16,
                    marginBottom: 8
                }}>Mobile Phone #</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // gap: 10,
                }}>

                    <PhoneInput
                        defaultCountry="CA"
                        placeholder="+13065014513"
                        phoneInputStyles={{
                            container: {
                                backgroundColor: Colors.white,
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: Colors.white,
                                flex: 7,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0

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
                        disabled={true}
                    />

                    <View style={{
                        backgroundColor: Colors.white,
                        height: '100%',
                        padding: 10,
                        borderBottomRightRadius: 8,
                        borderTopRightRadius: 8,
                    }}>
                        <EvilIcons name="lock" size={26} color="black" />
                    </View>

                </View>
            </View>
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
                    placeholder="***************"
                    editable={false}
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
                    borderColor: pressed ? Colors.lightGray : Colors.black,
                },
            ]}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Update</Text>
            </Pressable>
        </View>
    )
}