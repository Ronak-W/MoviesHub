import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SubscriptionScreen = () => {

    const subscriptionPlans = [
        {
            name: 'Basic Plan',
            price: '$9.99/month',
            features: ['1 Screen', 'Standard Definition'],
        },
        {
            name: 'Standard Plan',
            price: '$14.99/month',
            features: ['2 Screens', 'High Definition'],
        },
        {
            name: 'Premium Plan',
            price: '$19.99/month',
            features: ['4 Screens', 'Ultra HD', 'HDR'],
        },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Choose Your Plan</Text>

                {subscriptionPlans.map((plan, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{plan.name}</Text>
                        <Text style={styles.cardPrice}>{plan.price}</Text>
                        <Text style={styles.cardFeature}>Features:</Text>
                        {plan.features.map((feature, featureIndex) => (
                            <Text key={featureIndex} style={styles.cardFeatureDetail}>
                                {feature}
                            </Text>
                        ))}
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Select Plan</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#333',
        marginBottom: 20,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardPrice: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 8,
    },
    cardFeature: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    cardFeatureDetail: {
        color: '#ccc',
        fontSize: 14,
        marginBottom: 4,
    },
    button: {
        backgroundColor: '#FF6347',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SubscriptionScreen;
