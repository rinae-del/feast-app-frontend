import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function MyAccountScreen() {
    return (
        <View style={{

            flex: 1,
            backgroundColor: Colors.black,
            padding: 20,

        }}>
            <Pressable style={({ pressed }) => [
                {
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.white,
                    fontSize: 14.4,
                    marginVertical: 20,
                    width: "100%",

                },
                {
                    backgroundColor: pressed ? Colors.black : Colors.lightGray,
                },
            ]}>
                <Text style={{ color: Colors.white, textAlign: 'center', fontSize: 15, fontFamily: 'Montserrat_800ExtraBold', }}>Sign Out</Text>
            </Pressable>
        </View>
    )
}