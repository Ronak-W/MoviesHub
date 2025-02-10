import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
import WatchLaterScreen from './WatchLaterScreen'


const Profile = ({ navigation }) => {
  const [userName, setUserName] = useState("")
  const [movieCount, setMovieCount] = useState("")

  const user = useSelector((state) => state.user.user)
  const watchLaterMovie = useSelector((state) => state.watchLater)

  useEffect(() => {
    setUserName(user.username)
  }, [user])

  useEffect(() => {
    if (watchLaterMovie.length > 0) {
      setMovieCount(Number(watchLaterMovie.length))
    } else {
      setMovieCount(" ")
    }
  }, [watchLaterMovie])

  const handleWatchLater = () => {
    navigation.navigate('WatchLaterScreen');
  }

  const handleLogout = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Profile</Text>
      <View style={styles.header}>
        <Image
          source={require('../assets/user.png')}
          style={styles.profileIcon}
        />
        <Text style={styles.username}>{userName}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={() => handleWatchLater()}>
        <View style={styles.watchLaterContainer}>
          <Text style={styles.watchLaterText}>Watch Later</Text>
          <Text style={styles.movieCount}>{movieCount}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLogout()} style={styles.logoutContainer}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: 'white',
    margin: 10,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'white'
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },
  watchLaterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  watchLaterText: {
    color: 'white',
    fontSize: 16,
  },
  movieCount: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutContainer: {
    marginTop: 30,
    paddingVertical: 12,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
