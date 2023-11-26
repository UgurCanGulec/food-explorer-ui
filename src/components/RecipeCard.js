import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { recipeList, colors } from '../Constants';
import { renderStars } from '../util/RecipeUtil'
import { useRecipeExplorerContext } from '../context/ApplicationContext';

export default function RecipeCard() {

    const navigation = useNavigation();

    const {
        favorites,
        setFavorites,
        setLoading,
        isFavoritesScreen
    } = useRecipeExplorerContext();

    const getFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            if (storedFavorites !== null) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error('Error getting favorites:', error);
        }
    };

    useEffect(() => {
        getFavorites();
    }, []);

    const addToFavorites = async (recipe) => {
        try {
            const newFavorites = [...favorites, recipe];
            setFavorites(newFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        } catch (error) {
            console.error('Error saving to favorites:', error);
        }
    };

    const removeFromFavorites = async (recipe) => {
        try {
            const newFavorites = favorites.filter((fav) => fav.id !== recipe.id);
            setFavorites(newFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    };

    const isFavorite = (recipe) => {
        return favorites.some((fav) => fav.id === recipe.id);
    };

    const handleRecipeOnPress = (item) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        navigation.navigate('RecipeDetailsScreen', { item: item })
    }

    return (
        <View>
            <FlatList
                data={isFavoritesScreen ? favorites : recipeList}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => handleRecipeOnPress(item)}
                        style={styles.cardContainer}
                    >
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.recipeName}>{item.name}</Text>
                        <View style={styles.infoContainer}>
                            <View style={styles.iconTextContainer}>
                                <FontAwesome name="clock-o" size={16} color="#f96163" style={styles.icon} />
                                <Text style={[styles.infoText, { color: '#f96163' }]}>{item.time}</Text>
                            </View>
                            <View style={styles.iconTextContainer}>
                                {renderStars(item.difficulty)}
                                <Text style={styles.infoText}>{item.difficulty}</Text>
                            </View>
                        </View>
                        <Pressable
                            onPress={() => {
                                isFavorite(item) ? removeFromFavorites(item) : addToFavorites(item);
                            }}
                            style={styles.favoriteContainer}
                        >
                            <FontAwesome
                                name="heart"
                                size={16}
                                color={isFavorite(item) ? 'red' : 'gray'}
                                style={styles.favoriteIcon}
                            />
                            <Text
                                style={[
                                    styles.favoriteText,
                                    { color: isFavorite(item) ? 'red' : 'gray', fontWeight: 'bold' },
                                ]}
                            >
                                {isFavorite(item) ? 'Favorilerden Kaldır' : 'Favorilere Ekle'}
                            </Text>
                        </Pressable>
                    </Pressable>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: 'center',
        paddingHorizontal: 8,
        alignSelf: 'center',
        paddingVertical: 26,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'center',
        marginBottom: 10,
    },
    recipeName: {
        fontWeight: 'bold',
    },
    infoContainer: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
    },
    iconTextContainer: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: 'center',
    },
    icon: {
        marginRight: 4,
    },
    infoText: {
        color: colors.COLOR_DARK,
    },
    favoriteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    favoriteIcon: {
        marginRight: 4,
    },
    favoriteText: {
        color: 'gray',
    },
});
