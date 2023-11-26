import React from "react";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { categories, colors } from "../Constants";
import { useRecipeExplorerContext } from "../context/ApplicationContext";

const CategoriesFilter = ({ onCategoryChange }) => {


    const {
        selectedCategory,
    } = useRecipeExplorerContext()

    const handleCategoryPress = (category) => {
        onCategoryChange(category)
    };

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                    const buttonBackground =
                        selectedCategory && category.id === selectedCategory.id
                            ? colors.COLOR_PRIMARY
                            : colors.COLOR_LIGHT;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleCategoryPress(category)}
                            style={{
                                flexDirection: "row",
                                backgroundColor: buttonBackground,
                                marginRight: 20,
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 10,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 16,
                            }}
                        >
                            <Image
                                source={category.icon}
                                style={{ width: 24, height: 24, marginRight: 8 }}
                            />
                            <Text
                                style={{
                                    color:
                                        selectedCategory && category.id === selectedCategory.id
                                            ? colors.COLOR_LIGHT
                                            : colors.COLOR_DARK,
                                    fontSize: 18,
                                }}
                            >
                                {category.category}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default CategoriesFilter;

