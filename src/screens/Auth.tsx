import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Auth: React.FC = () => {
    return (
        <View style={s.container}>
            <Text>Auth</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Auth;