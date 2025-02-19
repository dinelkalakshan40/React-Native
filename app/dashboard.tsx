import {View, Image, Text, TouchableOpacity, StyleSheet, FlatList, TextInput} from "react-native";
import {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {FoodMenuHeader} from "./FoodMenu-Header";

export const foodItems = [
    { id: '1', name: 'Burger', price: '$5.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '2', name: 'Pizza', price: '$8.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '3', name: 'Pasta', price: '$7.49', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '4', name: 'Noolldes', price: '$12.49', qty: 1, image: require('../assets/freepik__upload__74787.png') },
];
interface DashboardProps {
    filteredItems: { id: string; name: string; price: string; qty: number; image: any }[];
}


export default function Dashboard({ filteredItems }: DashboardProps) {


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
                        <Text style={styles.qty}>Qty: {item.qty}</Text>
                        <TouchableOpacity style={styles.button}>
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
    qty: {
        fontSize: 14,
        color: '#555',
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
});
