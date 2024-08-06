import { View, Text, Pressable } from 'react-native'
import React from 'react'

type TPressable ={}



export default function Button() {
    return (
        <Pressable
            onPress={storeData}
            style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 4,
                    elevation: 2,
                    backgroundColor: "grey",
                    fontSize: 14.4,
                    fontFamily: 'Inter_400Regular',
                    marginVertical: 10,
                    // backgroundColor: "#262626",
                    width: "100%",
                },
                {
                    backgroundColor: pressed ? "rgb(210, 230, 255)" : colors.accentColor,
                },
            ]}
        >
            <Text style={{
                color: "white",
                fontSize: 15,
                fontFamily: 'Inter_500Medium',
                textAlign: "center",
                justifyContent: "space-around",
            }}>Get courses I may qualify for</Text>
        </Pressable>
    )
}