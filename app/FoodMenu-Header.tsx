import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FoodHeaderProps {
    title: string;
    searchText: string;
    onSearch: (text: string) => void;
}


export const FoodMenuHeader: React.FC<FoodHeaderProps> = ({ title, searchText, onSearch }) =>  {


    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search food..."
                    value={searchText}
                    onChangeText={onSearch} // Just store input for now
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Ionicons name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    searchInput: {
        padding: 8,
        width: 150,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    searchButton: {
        backgroundColor: '#ff5733',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
