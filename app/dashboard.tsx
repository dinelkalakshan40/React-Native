import {View, Image, Text, TouchableOpacity, StyleSheet, FlatList, TextInput} from "react-native";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {FoodMenuHeader} from "./FoodMenu-Header";
import { useCart } from './cart';
import {addToOrder} from "./orderStore";

export const foodItems = [
    { id: '1', name: 'Burger', price: '$5.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '2', name: 'Pizza', price: '$8.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '3', name: 'Pasta', price: '$7.49', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '4', name: 'Noolldes', price: '$12.49', qty: 1, image: require('../assets/freepik__upload__74787.png') },
];
interface DashboardProps {
    filteredItems: { id: string; name: string; price: string; qty: number; image: any }[];
}
interface Item {
    id: string;
    name: string;
    price: number;
    image: any;
    qty: number;
}


export default function Dashboard({ filteredItems }: DashboardProps) {


    const [quantities, setQuantities] = useState<{ [key: string]: number }>(
        Object.fromEntries(filteredItems.map(item => [item.id, item.qty]))
    );
   // const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    const increaseQty = (id: string) => {
        setQuantities(prevQty => ({
            ...prevQty,
            [id]: Math.min(prevQty[id] + 1, 20), // Max 20
        }));
    };

    const decreaseQty = (id: string) => {
        setQuantities(prevQty => ({
            ...prevQty,
            [id]: Math.max(prevQty[id] - 1, 1), // Min 1
        }));
    };
    // const handleAddToCart = (item: Item) => {
    //     addOrder({ ...item, qty: quantities[item.id] });
    // };
    const updateQty = (id: string, newQty: number) => {
        setQuantities(prevQty => ({ ...prevQty, [id]: newQty }));
    };

    // const handleAddToCart = (item: Item) => {
    //     const qty = quantities[item.id] || 1; // Default qty = 1
    //     addToOrder({ ...item, qty }); // Add to orderStore
    //     alert(`${item.name} (${qty}) added to cart!`);
    // };
    const handleAddToCart = (item) => {
        // Parse price to a valid number by removing '$' and converting it to float
        const price = parseFloat(item.price.replace('$', '').trim()); // Remove '$' and parse as float

        // Validate price
        if (isNaN(price) || price <= 0) {
            console.error('Invalid price', item);
            return;
        }

        const qty = quantities[item.id] || 1; // Default to 1 if qty is undefined
        const orderItem = { ...item, price, qty }; // Ensure qty is added

        // Add to order
        addToOrder(orderItem);
    };


    return (
        <View style={styles.container}>

            {/*<FoodMenuHeader title="Food Menu" searchText={searchText} onSearch={handleSearch} />*/}


            {/* Food Items List */}
            <FlatList
                data={filteredItems}
                keyExtractor={(item) => item.id}
                numColumns={2} // Display items in a grid with 2 columns
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}</Text>

                        <View style={styles.qtyContainer}>
                            <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, Math.max((quantities[item.id] || 1) - 1, 1))}>
                                <Text style={styles.qtyButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.qty}>{quantities[item.id] || 1}</Text>
                            <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, Math.min((quantities[item.id] || 1) + 1, 20))}>
                                <Text style={styles.qtyButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6a8dba',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    searchInput: {
        padding: 8,
        width: 150,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#ff5733',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#ff5733',
    },
    button: {
        backgroundColor: '#ff5733',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    qty: { fontSize: 16, marginHorizontal: 10 },
    qtyContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
    qtyButton: { backgroundColor: '#cdc3c3', padding: 5,paddingVertical: 1,paddingHorizontal: 4,   borderRadius: 5 },
    qtyButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
});
