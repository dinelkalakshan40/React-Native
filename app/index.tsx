import {StatusBar} from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Link, useRouter} from "expo-router";
import {useState} from "react";

export default function Index() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username === 'user' && password === '1234') {
            router.push('/dashboard');
        } else {
            Alert.alert('Invalid credentials', 'Please check your username and password');
        }
    };
    return (
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUserName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <StatusBar style="auto"/>
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#f0f0f0', // Light background color for the login screen
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        paddingLeft: 15,
        marginBottom: 15,
        color: '#333',
        fontSize: 17,
        backgroundColor: '#fff', // White background for inputs
    },
    button: {
        width: '60%',
        height: 40,
        backgroundColor: '#5077ba', // Green color for the button
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: "normal",
    },
});