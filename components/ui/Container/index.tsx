import { View, Text, StyleSheet, StatusBar, Platform, SafeAreaView } from "react-native";
import React from "react";

interface IContainer {
    children: React.ReactNode;
}
export default function Container(props: IContainer) {
    const { children } = props;
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 14,
    },
});