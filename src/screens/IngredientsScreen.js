import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import IngredientCard from '../components/IngredientCard';
import SelectedIngredients from '../components/SelectedIngredients';
import {
    useRecipeExplorerContext,
} from '../context/ApplicationContext';
import Message from '../common/Message';
import RecipeCard from '../components/RecipeCard';

export default function IngredientsScreen() {
    const {
        isIngredientSelection,
        setIsIngredientSelection,
        setLoading,
        selectedCategory,
        setSelectedCategory,
        isFavoritesScreen
    } = useRecipeExplorerContext();

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setSearchTerm('');
    }, [selectedIngredients]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedIngredients([]);
    };

    const handleIngredientSelect = (ingredient) => {
        if (
            !selectedIngredients.find((selected) => selected.id === ingredient.id)
        ) {
            setSelectedIngredients((prevSelectedIngredients) => [
                ...prevSelectedIngredients,
                ingredient,
            ]);
        }
    };

    const handleIngredientRemove = (ingredientToRemove) => {
        setSelectedIngredients((prevSelectedIngredients) =>
            prevSelectedIngredients.filter(
                (ingredient) => ingredient.id !== ingredientToRemove.id
            )
        );
    };

    const handleClear = () => {
        setSelectedIngredients([]);
        setSearchTerm('');
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleRecipeSearch = () => {
        if (selectedIngredients.length < 3) {
            Message.info({
                title: 'Bilgilendirme Mesajı',
                text: 'Lütfen en az 3 malzeme seçiniz.'
            })
        } else {
            //todo kaldırılacak 
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            //todo kaldırılacak
            setIsIngredientSelection(false)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            {!isFavoritesScreen && selectedIngredients.length > 0 && (
                <SelectedIngredients
                    selectedValues={selectedIngredients}
                    onIngredientRemove={handleIngredientRemove}
                />
            )}
            {isIngredientSelection && (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Öğün Seçimi
                    </Text>
                    <CategoriesFilter onCategoryChange={handleCategoryChange} />
                </View>
            )}
            {isIngredientSelection && (
                <SearchFilter onSearch={handleSearch} />
            )}
            {isIngredientSelection && (
                <View style={{ marginTop: 10, flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 10 }}>
                        Malzeme Seçimi
                    </Text>
                    <IngredientCard
                        onSelect={handleIngredientSelect}
                        selectedIngredients={selectedIngredients}
                        searchTerm={searchTerm}
                        selectedCategory={selectedCategory}
                    />
                </View>
            )}
            {!isIngredientSelection && (
                <View style={{ marginTop: 22, flex: 1 }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold", paddingBottom: 10}}>{isFavoritesScreen ? 'Favori Yemek Tariflerim' : 'Yemek Tarifleri'}</Text>
                    <RecipeCard />
                </View>
            )}
            {isIngredientSelection && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                        <Image
                            source={require('../../assets/images/clean.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.clearButtonText}>Temizle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={handleRecipeSearch}
                    >
                        <Image
                            source={require('../../assets/images/cook.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.searchButtonText}>Yemek Ara</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 40,
    },
    clearButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#3498db',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    clearButtonText: {
        color: '#3498db',
        marginLeft: 5,
        marginRight: 20,
        fontSize: 15,
        fontWeight: 'bold',
    },
    searchButtonText: {
        color: 'white',
        marginLeft: 5,
        marginRight: 20,
        fontSize: 15,
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 2,
        marginLeft: 10,
    },
});


