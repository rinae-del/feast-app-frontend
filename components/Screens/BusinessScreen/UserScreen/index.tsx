import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router'
import { useNavigation } from '@react-navigation/native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function UserScreen() {
    const navigation = useNavigation()
    const router = useRouter()
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => <Pressable onPress={() => router.push("/business/account")}><FontAwesome6 name="circle-user" size={24} color="white" /></Pressable>
        });
    }, [navigation]);
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

        console.log(result);

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

            </View>
        </View>
    )
}