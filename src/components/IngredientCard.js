import { FlatList, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React, { useMemo } from 'react'
import { ingredients, colors } from '../Constants'

export default function IngredientCard({ onSelect, selectedIngredients, searchTerm, selectedCategory }) {

    const filteredIngredients = useMemo(() => {
        return searchTerm
            ? ingredients.filter(
                (ingredient) =>
                    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    ingredient.category.includes(selectedCategory.category)
            )
            : ingredients.filter((ingredient) => ingredient.category.includes(selectedCategory.category));
    }, [searchTerm, selectedCategory]);

    const handleIngredientSelect = (ingredient) => {
        if (!selectedIngredients.find((selected) => selected.id === ingredient.id) && onSelect) {
            onSelect(ingredient);
        }
    };

    return (
        <View>
            <FlatList
                data={filteredIngredients}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleIngredientSelect(item)}
                        style={styles.recipeCardContainer}
                    >
                        <Image
                            source={item.image}
                            style={styles.image}
                        />
                        <Text style={styles.recipeName}>{item.name}</Text>
                        <View style={styles.ratingContainer}>
                            <View style={styles.ratingInnerContainer}>
                                <Text style={styles.ratingText}>{item.rating}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    recipeCardContainer: {
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 10,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    image: {
        width: 95,
        height: 95,
        resizeMode: "center",
    },
    recipeName: {
        fontSize: 16,
        fontFamily: "Arial",
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: "row",
        marginTop: 4,
    },
    ratingInnerContainer: {
        flexDirection: "row",
    },
    ratingText: {
        marginRight: 4,
    },
});

