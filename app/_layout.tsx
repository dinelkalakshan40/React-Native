
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { View,StyleSheet } from 'react-native';

import Dashboard from "./dashboard";
import Orders from "./orders";
import {Cart} from "./cart";
import PlaceOrder from "./PlaceOrder";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./index";
import { FoodMenuHeader } from "./FoodMenu-Header";
import {useState} from "react";
import {foodItems} from "./dashboard";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Tabs Layout
function TabLayout() {

    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState(foodItems);

    const handleSearch = (text: string) => {
        setSearchText(text);
        if (text === '') {
            setFilteredItems(foodItems);
        } else {
            const filtered = foodItems.filter(item =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    // Ensures valid icon names for each route
                    const iconNames: Record<string, keyof typeof Ionicons.glyphMap> = {
                        Dashboard: 'home',
                        Orders: 'receipt',
                        Cart: 'cart',
                        PlaceOrder: 'checkmark-circle-outline',
                    };

                    return <Ionicons name={iconNames[route.name]} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF5733',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 8,
                    fontWeight: "normal",
                    paddingBottom: 5, // Spacing below the label
                },
                tabBarStyle: { // Tab bar background color
                    borderTopWidth: 0, // Remove the border on top of the tab bar
                    paddingBottom: 5,  // Add padding to the bottom of the tab bar
                }
            })}
        >
            <Tab.Screen
                name="Dashboard"
                options={{
                    headerTitle: () => <FoodMenuHeader title="Food Menu" searchText={searchText} onSearch={handleSearch} />,
                    headerStyle: { backgroundColor: '#ff5733' },
                }}
            >
                {() => <Dashboard filteredItems={filteredItems} />}
            </Tab.Screen>
            <Tab.Screen name="Orders" component={Orders} options={{ title: 'Orders' }} />
            <Tab.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
            <Tab.Screen name="PlaceOrder" component={PlaceOrder} options={{ title: 'Place order' }} />
        </Tab.Navigator>
    );
}

//Root Stack Layout
export default function RootLayout() {
    return (
        <View style={styles.rootContainer}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="dashboard" component={TabLayout} />
            </Stack.Navigator>
        </View>

    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',  // Light background color

    },
});