import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecipeExplorerContext } from '../context/ApplicationContext';

const SelectedIngredients = ({ selectedValues, onIngredientRemove }) => {

  const {
    isIngredientSelection
  } = useRecipeExplorerContext()

  return (
    <View style={styles.selectedIngredientsContainer}>
      <Text style={styles.selectedIngredientsText}>Seçtikleriniz</Text>
      <FlatList
        data={selectedValues}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.selectedIngredientItem}
            onPress={() => onIngredientRemove(item)}
            disabled={!isIngredientSelection}
          >
            <Image source={item.image} style={styles.selectedIngredientImage} />
            <Text style={styles.selectedIngredientName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedIngredientsContainer: {
    marginTop: 20,
  },
  selectedIngredientsText: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  selectedIngredientItem: {
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedIngredientImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  selectedIngredientName: {
    marginTop: 5,
  },
});

export default SelectedIngredients;
