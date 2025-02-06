import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
// import { watchLaterReducer } from './redux/reducer'


const Profile = () => {

  const [userName, setUserName] = useState("")
  const [movieCount, setMovieCount] = useState(0);

  const user = useSelector((state) => state.reducer.user)
  const watchLaterMovie = useSelector((state) => state.watchLaterReducer)

  useEffect(() => {
    console.log('USER', user);
    setUserName(user.username)
  }, [user])

  useEffect(() => {
    setMovieCount(watchLaterMovie.length)
    console.log("Movie couunt", watchLaterMovie.length);
    console.log(watchLaterMovie[0].original_title);

  }, [watchLaterMovie])


  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>{userName}</Text>
      <Text style={{ color: 'white' }}>{movieCount}</Text>
      {/* <Text style={{ color: 'white' }}>{watchLaterMovie[0].original_title}</Text> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
})