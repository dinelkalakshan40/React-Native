import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from './cart';

export default function PlaceOrder() {
    const { cart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAmount = cart.reduce((acc: number, item: any) => acc + (item.price * item.qty), 0);
        setTotal(totalAmount);
    }, [cart]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Summary</Text>
            <Text style={styles.total}>Total: ${total}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    total: {
        fontSize: 20,
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
