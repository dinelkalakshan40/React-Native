import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getOrders } from "./orderStore";
import {useNavigation, useRoute} from '@react-navigation/native';

export default function OrderPage() {
    const orders = getOrders();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    // Ensure price and qty are numbers before calculating
                    const price = item.price && !isNaN(item.price) ? item.price : 0;
                    const qty = item.qty && !isNaN(item.qty) ? item.qty : 1; // Default to 1 if qty is missing

                    // Calculate total price
                    const totalPrice = price * qty;

                    return (
                        <View style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.qty}>Qty: {qty}</Text>
                            <Text style={styles.price}>Price: ${totalPrice.toFixed(2)}</Text> {/* Fix price formatting */}
                        </View>
                    );
                }}
            />
            <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => navigation.navigate('CartPage', { orders })}
            >
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
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
    card: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
    },
    qty: {
        fontSize: 16,
        color: '#888',
    },
    removeButton: {
        color: '#f00',
    },
    checkoutButton: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: "green",
    },
});