import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";


export default function RootLayout() {
    return (

            <Stack>
                {/* Define your screens */}
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="dashboard" options={{ headerShown: false }} />
            </Stack>

    );
}