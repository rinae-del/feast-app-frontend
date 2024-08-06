import { View, Text, Pressable, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Container from '@/components/ui/Container'
import bg from "../../../assets/bg.jpg"
import { Colors } from '@/constants/Colors'

export default function Prompts() {
    return (

        // <Container>
        //     <Text>Log in as</Text>
        //     <Pressable><Text>Business</Text></Pressable>
        //     <Pressable><Text>Customer</Text></Pressable>
        // </Container>

        <ImageBackground source={bg} resizeMode="cover" style={styles.image} blurRadius={12}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
                borderWidth: 1,
                padding: 14,
                // position: 'absolute',
                // bottom: 200,
                width: '100%'
                // left: 20,
                // right: 20,
                // backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
                <Text style={{
                    marginBottom: 10,
                    color: "white",
                    fontSize: 40,
                    fontFamily: 'Montserrat_800ExtraBold',
                    textAlign: "center",
                    justifyContent: "space-around",
                    textShadowColor: '#888', // black shadow
                    textShadowOffset: { width: 2, height: 2 }, // shadow offset
                    textShadowRadius: 4, // shadow blur
                }}>Feast app</Text>
                <Text style={{
                    fontFamily: 'Montserrat_400Regular',
                    color: Colors.white,
                    textShadowColor: '#888', // black shadow
                    textShadowOffset: { width: 2, height: 2 }, // shadow offset
                    textShadowRadius: 4, // shadow blur
                }}>Log in as</Text>
                <Pressable style={({ pressed }) => [
                    {
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        borderRadius: 4,
                        borderWidth: 1.4,
                        borderColor: Colors.lightGray,
                        backgroundColor: "grey",
                        fontSize: 14.4,
                        marginVertical: 10,
                        width: "100%",
                    },
                    {
                        backgroundColor: pressed ? Colors.lightGray : "transparent",
                    },
                ]}><Text
                    style={{
                        color: Colors.white,
                        fontFamily: 'Montserrat_500Medium',
                        textAlign: "center",
                    }}>Business</Text></Pressable>
                <Pressable style={({ pressed }) => [
                    {
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        borderRadius: 4,
                        borderWidth: 1.4,
                        borderColor: Colors.black,
                        backgroundColor: "grey",
                        fontSize: 14.4,
                        marginVertical: 10,
                        width: "100%",
                    },
                    {
                        backgroundColor: pressed ? Colors.lightGray : Colors.black,
                        borderColor: pressed ? Colors.lightGray : Colors.black
                    },
                ]}><Text style={{
                    color: Colors.white,
                    fontFamily: 'Montserrat_500Medium',
                    textAlign: "center",
                }}>Customer</Text></Pressable>
                <Pressable style={{ marginTop: 10 }}><Text style={{
                    fontFamily: 'Montserrat_400Regular',
                    color: Colors.white,
                }}>Or sign up</Text></Pressable>
            </View>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,

        // justifyContent: 'center',
        // alignItems: 'center',
    },
});