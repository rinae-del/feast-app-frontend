import ImageViewer from '@/components/ui/Modal';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, Text, View } from 'react-native';



const { width: screenWidth} = Dimensions.get('window');

export default function DashboardScreen() {

    const [profileFromStorage, setProfileFromStorage] = useState("")
    const [image, setImage] = useState<string | null | any>(null);
    const [modalVisible, setModalVisible] = useState(false);
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
                        // marginHorizontal: 'auto',
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
                                    // overflow: 'hidden',
                                    // marginHorizontal: 'auto',
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
                        }}>Amanda</Text>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: "Montserrat_400Regular",
                            fontSize: 14
                        }}>ID 98009902</Text>
                        <Text style={{
                            color: Colors.black,
                            fontFamily: "Montserrat_400Regular",
                            fontSize: 14
                        }}>New York, NY</Text>
                    </View>

                </View>
                {/* qr code */}
                <View>
                    <View style={{
                        width: 60,
                        height: 60,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <ImageBackground source={require('../../../../assets/qr.png')} style={{
                            width: 80,
                            height: 80,
                        }}>
                            <Pressable
                                onPress={() => setModalVisible(true)}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: Colors.black,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,

                                }}
                            ><MaterialIcons name="zoom-out-map" size={24} color={`${Colors.white}`} /></Pressable>
                        </ImageBackground>
                    </View>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_400Regular",
                        fontSize: 11,
                        textAlign: 'center'
                    }}>23 Scans</Text>
                </View>
            </View>
            <ImageViewer modalVisible={modalVisible} onDismiss={() => setModalVisible(!modalVisible)} >
                <ImageBackground source={require("../../../../assets/qr.png")} style={{
                    width: screenWidth - 2 * 20,
                    height: 400,
                }} /></ImageViewer>
        </View>
    )
}