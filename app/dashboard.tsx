import {View,Image, Text, TouchableOpacity,StyleSheet, FlatList} from "react-native";

const foodItems = [
    { id: '1', name: 'Burger', price: '$5.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '2', name: 'Pizza', price: '$8.99', qty: 1, image: require('../assets/freepik__upload__74787.png') },
    { id: '3', name: 'Pasta', price: '$7.49', qty: 1, image: require('../assets/freepik__upload__74787.png') },
];


export default function Dashboard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food Menu</Text>
            <FlatList
                data={foodItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.qty}>Qty: {item.qty}</Text>
                        </View>
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
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 3,
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 15,
        borderRadius: 35,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#666',
    },
    qty: {
        fontSize: 14,
        color: '#999',
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});