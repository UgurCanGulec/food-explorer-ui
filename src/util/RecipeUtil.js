import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';


export const renderStars = (difficulty) => {
    switch (difficulty) {
        case 'Kolay':
            return <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />;
        case 'Orta':
            return (
                <>
                    <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />
                    <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />
                </>
            );
        case 'Zor':
            return (
                <>
                    <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />
                    <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />
                    <FontAwesome name="star" size={16} color="#f9c542" style={styles.icon} />
                </>
            );
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    icon: {
        marginRight: 4,
    }
});