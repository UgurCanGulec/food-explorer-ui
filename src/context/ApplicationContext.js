import React, { createContext, useContext, useReducer } from "react"

const ApplicationContext = createContext()

const actions = {
    SET_LOADING: "SET_LOADING",
    SET_IS_FAVORITES_SCREEN: "SET_IS_FAVORITES_SCREEN",
    SET_RECIPE_DATA_LIST: "SET_RECIPE_DATA_LIST",
    SET_IS_INGREDIENT_SELECTION: "SET_IS_INGREDIENT_SELECTION",
    SET_FAVORITES: 'SET_FAVORITES',
    SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY'
}

const initialState = {
    recipeDataList: [],
    selectedCategory: {
        id: "01",
        category: "Kahvaltı",
    },
    favorites: [],
    isLoading: false,
    isFavoritesScreen: false,
    isIngredientSelection: true
}

const ApplicationProvider = (props) => {
    const [state, dispatch] = useReducer(ApplicationReducer, {
        ...initialState
    })
    return <ApplicationContext.Provider
        value={{ state, dispatch }}
        {...props}
    />
}

const useRecipeExplorerContext = () => {
    const context = useContext(ApplicationContext)
    if (!context) {
        throw new Error(
            "useRecipeExplorerContext, ApplicationProvider altında kullanılmalıdır."
        )
    }

    const { state, dispatch } = context

    const setRecipeDataList = (data) => {
        dispatch({
            type: actions.SET_RECIPE_DATA_LIST,
            payload: data
        })
    }

    const setIsIngredientSelection = (data) => {
        dispatch({
            type: actions.SET_IS_INGREDIENT_SELECTION,
            payload: data
        })
    }

    const setLoading = (data) => {
        dispatch({
            type: actions.SET_LOADING,
            payload: data
        })
    }

    const setFavorites = (data) => {
        dispatch({
            type: actions.SET_FAVORITES,
            payload: data
        })
    }

    const setSelectedCategory = (data) => {
        dispatch({
            type: actions.SET_SELECTED_CATEGORY,
            payload: data
        })
    }

    const setIsFavoritesScreen = (data) => {
        dispatch({
            type: actions.SET_IS_FAVORITES_SCREEN,
            payload: data
        })
    }

    return {
        setRecipeDataList,
        recipeDataList: state.recipeDataList,
        setIsIngredientSelection,
        isIngredientSelection: state.isIngredientSelection,
        setLoading,
        isLoading: state.isLoading,
        setFavorites,
        favorites: state.favorites,
        setSelectedCategory,
        selectedCategory: state.selectedCategory,
        setIsFavoritesScreen,
        isFavoritesScreen: state.isFavoritesScreen
    }
}

const ApplicationReducer = (state, action) => {
    switch (action.type) {
        case actions.SET_RECIPE_DATA_LIST: {
            return {
                ...state,
                recipeDataList: action.payload
            }
        }
        case actions.SET_IS_INGREDIENT_SELECTION: {
            return {
                ...state,
                isIngredientSelection: action.payload
            }
        }
        case actions.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case actions.SET_FAVORITES: {
            return {
                ...state,
                favorites: action.payload
            }
        }
        case actions.SET_SELECTED_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        case actions.SET_IS_FAVORITES_SCREEN: {
            return {
                ...state,
                isFavoritesScreen: action.payload
            }
        }
        default:
            throw new Error("Action bulunamadı.")
    }
}

export { ApplicationProvider, useRecipeExplorerContext }