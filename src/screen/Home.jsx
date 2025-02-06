import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';


const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [serchText, setSearchText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const isFocused = useIsFocused();

  const fetchMovies = async () => {
    try {
      const movieData = await axios.get('https://jsonfakery.com/movies/simple-paginate');
      setMovies(movieData.data.data);
    } catch (error) {
      console.log('Could not fetch the data', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    // const unSubscribe = fetchMovies();
    // return unSubscribe;
  }, []);

  const breakText = (text) => {
    let result = '';
    let tempText = text;

    while (tempText.length > 20 && tempText.length < 30) {
      result += tempText.slice(0, 20) + '\n';
      tempText = tempText.slice(20);
    }

    if (tempText.length > 30) {
      result += tempText.slice(0, 20) + '...';
      return result;
    }

    result += tempText;
    return result;
  };

  const handleSearch = (text) => {
    setSearchText(text);

    const filtered = movies.filter((movie) => {
      const titleMatch = movie.original_title.toLowerCase().includes(text.toLowerCase());
      const yearMatch = movie.release_date.includes(text);
      return titleMatch || yearMatch;
    });

    setFilteredMovies(filtered);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movies Hub</Text>
      <Text style={styles.mainText}>Discover your favorite movies</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder='Movies/date'
          placeholderTextColor='white'
          value={serchText}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>

      <FlatList
        data={filteredMovies.length > 0 ? filteredMovies : movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MovieDetails', { ...item })}
          >
            <View>
              <Image
                source={{ uri: item.poster_path }}
                style={styles.imageSize}
                resizeMode='contain'
              />
              <View style={styles.cardTitle}>
                <Text style={styles.cardText}>{breakText(item.original_title)}</Text>
                <View style={styles.voteContainer}>
                  <Text style={styles.voteStyle}>{item.vote_average}</Text>
                </View>
              </View>
              <Text style={styles.dateStyle}>{item.release_date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: 'white',
    margin: 15,
  },
  mainText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 12,
  },
  cardContainer: {
    justifyContent: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fbfaef',
    height: 300,
    width: '43%',
    margin: 10,
    paddingBottom: 10,
  },
  cardText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 12,
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  imageSize: {
    height: '80%',
    margin: 7,
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  voteStyle: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  voteContainer: {
    backgroundColor: 'yellow',
    padding: 5,
    height: 20,
  },
  dateStyle: {
    color: 'black',
    fontSize: 12,
    marginHorizontal: 18,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  inputStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    width: '95%',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    color: 'white',
  },
});