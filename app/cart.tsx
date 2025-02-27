import {useRoute, useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {clearOrders} from "./orderStore";
import {useRouter} from "expo-router";

export default function CartPage() {
    const route = useRoute();
    const router = useRouter(); //
    const navigation = useNavigation();

    const orders = (route.params as { orders?: any[] })?.orders || []; // Ensure orders always has a default value

    // Calculate total orders and total price
    const totalOrders = orders.length;
    const totalPrice = orders.reduce((sum, item) => {
        // Ensure item.price is a string before calling replace
        const priceString = typeof item.price === 'string' ? item.price : String(item.price);
        const price = parseFloat(priceString.replace('$', '').trim()); // Ensure valid price
        return sum + price * (item.qty || 1);
    }, 0);

    const handlePayment = () => {
        console.log("press")
        onPress: () => {
            clearOrders(); // Clear orders
            navigation.navigate('dashboard');
        }


    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart Summary</Text>

            {/* Order Summary */}
            <View style={styles.summaryCard}>
                <Text style={styles.summaryText}>Total Orders: {totalOrders}</Text>
                <Text style={styles.summaryText}>Total Price: ${totalPrice.toFixed(2)}</Text>
            </View>

            {/* Checkout Button */}
            <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
                <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    summaryCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    summaryText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        marginBottom: 5,
    },
    checkoutButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
