import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


type TStoreIconCard = {
    imageUri: ImageSourcePropType,
    storeName: string,
    creditAmount: string;
    time: string;
}
export default function StoreIconCard({ imageUri, storeName, creditAmount, time }: TStoreIconCard) {
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
                    flexDirection: 'row',
                    // gap: 8,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: "#33cc33",
                        fontFamily: "Montserrat_700Bold",
                    }}>Earned </Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_700Bold",
                    }}>{creditAmount} </Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_700Bold",
                    }}>credit </Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_400Regular",
                    }}>{time} </Text>
                    <Text style={{
                        color: Colors.black,
                        fontFamily: "Montserrat_400Regular",
                    }}>ago</Text>
                </View>
            </View>
        </View>
    )
}