import FeaturedStoresCard from '@/components/ui/FeaturedStoresCard';
import ImageViewer from '@/components/ui/Modal';
import { Colors } from '@/constants/Colors';
import { featured_cards } from '@/utils/store_icon_cards_data';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlashList } from '@shopify/flash-list';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { Video } from 'expo-av';
const videoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const { width: screenWidth } = Dimensions.get('window');

export default function DashboardScreen() {

    const [profileFromStorage, setProfileFromStorage] = useState("")
    const [image, setImage] = useState<string | null | any>("");
    const [modalVisible, setModalVisible] = useState(false);
    const video = React.useRef(null);
    const secondVideo = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
    const [videoWatched, setVideoWatched] = useState(false);

    const handlePlaybackStatusUpdate = async (status: any) => {
        setStatus(() => status);

        // Check if video has finished playing
        if (status.didJustFinish && !status.isLooping) {
            try {
                await AsyncStorage.setItem('@videoWatched', 'true');
                setVideoWatched(true);
            } catch (e) {
                console.log('Failed to save video watched status.', e);
            }
        }
    };
    useEffect(() => {
        checkIfVideoWatched();
    }, []);

    const checkIfVideoWatched = async () => {
        try {
            const value = await AsyncStorage.getItem('@videoWatched');
            if (value !== null) {
                setVideoWatched(true);
            }
        } catch (e) {
            console.log('Failed to load video watched status.', e);
        }
    };

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
            storeData(result.assets[0].uri)
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
                        // marginHorizontal: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 20
                    }}>

                        {profileFromStorage !== null || profileFromStorage !== "" ?
                            <Image source={{ uri: profileFromStorage !== "" ? profileFromStorage : undefined }} style={{
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
            <View style={{
                backgroundColor: Colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 14,
                borderColor: Colors.white,
                paddingVertical: 8,
                paddingHorizontal: 16,
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_400Regular",
                    fontSize: 14
                }}>Store Credit</Text>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 20
                }}>$0.00</Text>
                <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Text>At</Text>
                    <Text onPress={() => router.push("/customer/store_credit")} style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_700Bold",
                        fontSize: 14,
                        textDecorationLine: 'underline'
                    }}>0 Places</Text>
                </View>
            </View>
            <View style={{
                marginVertical: 10
            }}>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_700Bold",
                    textAlign: 'center',
                    fontSize: 14,
                    marginVertical: 10
                }}>How It Works</Text>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_400Regular",
                    textAlign: 'center'
                }}>Watch the video below to learn how to
                    use this app to earn & redeem store credit
                    at your favorite eateries.
                </Text>
            </View>
            <View>
                {/* Video player will be here */}
            </View>


            <Text style={{
                color: Colors.black,
                fontFamily: "Montserrat_700Bold",
                textAlign: 'center',
                fontSize: 14,
                marginVertical: 10
            }}>Featured Stores</Text>

            <View style={{
                flex: 1
            }}>
                {videoWatched === true ? "" : <Video
                    ref={video}
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        borderRadius: 8,
                        marginVertical: 10
                    }}
                    source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
                    useNativeControls
                    resizeMode='cover'
                    isLooping
                    onPlaybackStatusUpdate={setStatus}
                />}

                <FlashList
                    renderItem={({ item }) => {
                        return <FeaturedStoresCard imageUri={item.icon} storeName={item.title} tagline={item.tagline} />
                    }}
                    estimatedItemSize={10}
                    data={featured_cards}
                />
            </View>
            <View>
                <ImageViewer modalVisible={modalVisible} onDismiss={() => setModalVisible(!modalVisible)} >
                    <ImageBackground source={require("../../../../assets/qr.png")} style={{
                        width: screenWidth - 2 * 20,
                        height: 400,
                    }} /></ImageViewer>
            </View>



        </View>
    )
}