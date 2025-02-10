import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const WatchLaterScreen = () => {

    const watchLaterMovies = useSelector((state) => state.watchLater);

    return (
        <View style={styles.container}>
            {watchLaterMovies.length === 0 ? (
                <Text style={styles.noMoviesMessage}>No movies added</Text>
            ) : (
                <FlatList
                    data={watchLaterMovies}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}>
                            <View style={styles.card}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: item.poster_path,
                                    }}
                                />

                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.overview}>{item.overview}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(movie) => movie.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16,
    },
    noMoviesMessage: {
        color: '#ccc',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
    },
    card: {
        backgroundColor: '#333',
        marginBottom: 16,
        padding: 8,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 8,
    },
    overview: {
        color: '#ccc',
        fontSize: 14,

    },
});

export default WatchLaterScreen;
