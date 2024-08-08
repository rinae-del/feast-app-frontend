import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';


export default function DashboardScreen() {

    const [profileFromStorage, setProfileFromStorage] = useState("")
    const [image, setImage] = useState<string | null | any>(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            storeData(result.assets[0].uri)
        }
    };
    // This is temporary until we connect to the backend
    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem('displayPicture', value);
        } catch (e) {
            // saving error
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
            }
        };
        getData()
    }, [])
    const router = useRouter()
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,

        }}>
            {/* Card */}
            <View style={{
                backgroundColor: Colors.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 14,
                borderColor: Colors.white,
                paddingVertical: 8,
                paddingHorizontal: 16,
                marginVertical: 10,
                // marginBottom: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <View style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 20
                    }}>



                        {profileFromStorage ?
                            <Image source={{ uri: profileFromStorage }} style={{
                                width: 60,
                                height: 60,
                            }} /> :
                            <Pressable onPress={pickImage} style={({ pressed }) => [
                                {
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginVertical: 20
                                },
                                {
                                    backgroundColor: pressed ? Colors.lightGray : Colors.white,
                                },
                            ]}>
                                <AntDesign name="user" size={24} color="black" />
                            </Pressable>
                        }
                    </View>
                    <View>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: "Montserrat_700Bold",
                            fontSize: 14
                        }}>Buster’s Pizza</Text>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: "Montserrat_400Regular",
                            fontSize: 14
                        }}>1930 Garent Street</Text>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: "Montserrat_400Regular",
                            fontSize: 14
                        }}>New York, NY</Text>
                    </View>

                </View>

            </View>
            <Pressable style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.black,
                    fontSize: 14.4,
                    marginTop: 20,
                    width: "100%",
                },
                {
                    backgroundColor: pressed ? Colors.lightGray : Colors.black,
                },
            ]}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Scan Code</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/business/lookup_user")} style={({ pressed }) => [
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
                    backgroundColor: pressed ? Colors.black : Colors.lightGray,
                },
            ]}>
                <Text style={{ color: Colors.black, textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Lookup User</Text>
            </Pressable>
        </View>
    )
}