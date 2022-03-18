import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";

const TestingScreen = () => {
    return <SafeAreaProvider>
        <Header />
        <View>
            <Text>
                Hello World
            </Text>
        </View>
    </SafeAreaProvider>
}

export default TestingScreen;