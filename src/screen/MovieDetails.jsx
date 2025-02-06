// MovieDetails.js
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWatchLater, removeFromWatchLater } from './redux/action';
import { watchLaterReducer } from './redux/reducer';
import { useSelector } from 'react-redux';

const MovieDetails = ({ route }) => {
  const {
    id,
    original_title,
    original_language,
    poster_path,
    vote_average,
    release_date,
    overview
  } = route.params;

  const [isWatchLater, setIsWatchLater] = useState(false);

  const dispatch = useDispatch();

  const watchLaterMovies = useSelector((state) => state.watchLaterReducer)

  useEffect(() => {
    const isMovieInWatchLater = watchLaterMovies.some((movie) => movie.id === route.params.id);
    setIsWatchLater(isMovieInWatchLater);
  }, [watchLaterMovies]);

  const handleWatchLater = () => {
    if (isWatchLater) {
      dispatch(removeFromWatchLater(route.params));
    } else {
      dispatch(addToWatchLater(route.params));
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: poster_path }}
        style={styles.posterImage}
        resizeMode="cover"
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>Title: {original_title}</Text>
        <Text style={styles.text}>Release Date: {release_date}</Text>
        <Text style={styles.text}>Language: {original_language}</Text>
        <Text style={styles.text}>Rating: {vote_average}</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.watchNowButton}>
          <Text style={styles.buttonText}>Watch Now</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.downloadButton} >
          <Text style={styles.buttonText} >Download</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.watchLaterContainer}>
          <Text style={styles.watchLaterButton} onPress={() => handleWatchLater()}>
            {isWatchLater ? "Remove from Watch Later" : "Watch Later"}
          </Text>
          <Text style={styles.watchLateDescription}>{ } Save the movie to watch later whenever you want</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 14
  },
  posterImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  overviewText: {
    color: '#afb0b1',
    fontSize: 12,
    marginTop: 10
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  watchNowButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    width: '90%',
    borderRadius: 5,

  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: 'white'
  },
  watchLateDescription: {
    color: 'yellow',
    marginHorizontal: 20,
    fontSize: 12,
    marginTop: 5
  },
  watchLaterContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 90
  },
  watchLaterButton: {
    backgroundColor: '#5c5d5e',
    color: 'white',
    padding: 10,
    borderRadius: 5
  }
});

export default MovieDetails;
