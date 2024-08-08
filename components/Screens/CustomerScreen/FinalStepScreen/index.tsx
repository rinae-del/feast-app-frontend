import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function FinalStepScreen() {
    const router = useRouter()

    const [image, setImage] = useState<string | null | any>(null);

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
                }}>Profile Picture</Text>
                {
                    image ? <>
                        <View style={{
                            width: 200,
                            height: 200,
                            borderRadius: 100,
                            overflow: 'hidden',
                            marginHorizontal: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 20
                        }}>
                            <Image source={{ uri: image }} style={{
                                width: 200,
                                height: 200,
                            }} />
                        </View>
                        <Pressable onPress={() => router.push("/customer/dashboard")} style={({ pressed }) => [
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
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Finish</Text>
                        </Pressable>
                    </>
                        :
                        <Pressable onPress={pickImage} style={({ pressed }) => [
                            {
                                width: 150,
                                height: 150,
                                borderRadius: 76, // Half of the width and height to make it a circle
                                marginHorizontal: 'auto',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 20
                            },
                            {
                                backgroundColor: pressed ? Colors.lightGray : Colors.white,
                            },
                        ]}>
                            <Ionicons name="cloud-upload-outline" size={60} color="black" />
                        </Pressable>

                }
            </View>
        </View>
    )
}