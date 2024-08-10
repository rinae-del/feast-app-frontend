import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type TStoreIconCard = {
    imageUri: ImageSourcePropType,
    storeName: string,
    tagline: string;
}


export default function CreditStoreCard({ imageUri, storeName, tagline }: TStoreIconCard) {
    return (
        <View style={{
            backgroundColor: Colors.white,
            paddingVertical: 10,
            paddingHorizontal: 20,
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 14,
            borderColor: Colors.white,
            marginVertical: 6

        }}>
            <Image style={{
                borderWidth: 1,
                width: 60,
                height: 60,
                borderRadius: 30,
                overflow: 'hidden'
            }} source={imageUri} />
            <View>
                <Text style={{
                    color: Colors.black,
                    fontFamily: "Montserrat_700Bold",
                    fontSize: 14
                }}>{storeName}</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_400Regular",
                    }}>You have </Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_600SemiBold",
                    }}>{tagline}</Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_400Regular",
                    }}> store credit</Text>
                </View>
            </View>
        </View>
    )
}