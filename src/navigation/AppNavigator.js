import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryScreen from '../screens/EntryScreen'
import IngredientsScreen from '../screens/IngredientsScreen';
import { ApplicationProvider, useRecipeExplorerContext } from '../context/ApplicationContext';
import RecipDetailsScreen from '../screens/RecipDetailsScreen';

const Stack = createNativeStackNavigator();


function AppNavigator() {

    const {
        isLoading
    } = useRecipeExplorerContext()

    return (
        <NavigationContainer>
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator
                        size={'large'}
                        color={styles.loadingIndicator.color}
                    />
                </View>
            )}
            <Stack.Navigator initialRouteName='EntryScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="EntryScreen" component={EntryScreen} />
                <Stack.Screen name="IngredientsScreen" component={IngredientsScreen} />
                <Stack.Screen name="RecipeDetailsScreen" component={RecipDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 999,
    },
    loadingIndicator: {
        color: '#f96163',
    },
})

export default function NavigatorPage(props) {
    return (
        <ApplicationProvider>
            <AppNavigator {...props} />
        </ApplicationProvider>
    );
}
