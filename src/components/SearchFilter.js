// SearchFilter.js

import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchFilter({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChangeText = (text) => {
        setSearchTerm(text);
        onSearch(text);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('')
    };

    return (
        <View style={styles.container}>
            <FontAwesome name={'search'} size={20} color="#f96163" />
            <TextInput
                placeholder={'Malzeme adı girin'}
                style={styles.textInput}
                value={searchTerm}
                onChangeText={handleChangeText}
            />
            {searchTerm.length > 0 && (
                <FontAwesome name={'times-circle'} size={20} color="#f96163" onPress={handleClear} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    },
    textInput: {
        flex: 1,
        paddingLeft: 8,
        fontSize: 16,
        color: "#808080",
    },
});
