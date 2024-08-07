import { Colors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Modal, ImageSourcePropType, ImageBackground, Dimensions, Pressable } from 'react-native';
type TModal = {
    modalVisible: boolean;
    onDismiss: () => void;
    children: React.ReactNode;

}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const PADDING = 20;

export default function ImageViewer({ modalVisible, onDismiss, children }: TModal) {

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={onDismiss}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'black',
                    paddingVertical: 30,
                    paddingHorizontal: 20,
                }}>


                    {/* Header */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        paddingVertical: 15,
                    }}>
                        <TouchableOpacity style={{
                            padding: 10,
                            borderWidth: 1,
                            zIndex: 1
                        }} onPress={onDismiss}>
                            <Feather name="chevron-left" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'Montserrat_800ExtraBold',
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            textAlign: 'center',
                            color: Colors.white,
                        }}>Scan My Code</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        marginVertical: 20
                        // justifyContent: 'center',
                        // alignItems: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 14,
                            color: 'white',
                            marginBottom: 20

                        }}>Scan my Feastalot QR Code or lookup

                            user ID 98009902</Text>
                        {children}

                        <Pressable style={({ pressed }) => [
                            {
                                paddingVertical: 12,
                                paddingHorizontal: 20,
                                borderRadius: 100,
                                borderWidth: 2,
                                borderColor: Colors.lightGray,
                                fontSize: 14.4,
                                marginTop: 30,
                                width: "100%",

                            },
                            {
                                backgroundColor: pressed ? Colors.lightGray : 'black',
                            },
                        ]}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Exit</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: 'cover',

    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: PADDING,

    },
    fullScreenImage: {
        width: screenWidth - 2 * PADDING,
        height: 400,
        resizeMode: 'contain',

    },
    backButton: {
        // position: 'absolute',
        // top: 40,
        // left: 20,
        zIndex: 1,
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 5,
    },
});