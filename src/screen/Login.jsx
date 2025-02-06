import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Signup from './Signup'
import BottomTab from './BottomTab'
import { addUser } from './redux/action'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
    console.log(user);
  }

  const handleSubmit = async () => {
    try {
      // Fetch the users based on email
      const response = await axios.get(`https://67a091375bcfff4fabdfc6c7.mockapi.io/moviehub/users?email=${user.email}`);

      console.log("RESPOMNSE", response);

      if (response.data.length > 0) {
        const userFromAPI = response.data[0];

        // Now check the password
        if (userFromAPI.password === user.password) {
          Alert.alert('You are logged in successfully');
          dispatch(addUser(response.data[0]))


          setUser({ email: '', password: '' }); // Clear input fields

          //to dispatch the user details to reducer
          navigation.navigate('BottomTab');
        } else {
          Alert.alert("Incorrect password");
        }
      } else {
        Alert.alert("User does not exist");
      }
    } catch (error) {
      Alert.alert('Something went wrong', error.message || error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Login</Text>
        </View>

        <TextInput style={styles.inputStyle} name="email" placeholder='Email' placeholderTextColor='white'
          value={user.email}
          onChangeText={(text) => handleChange('email', text)} />

        <TextInput style={styles.inputStyle} name="email" secureTextEntry={true} placeholder='Passoword' placeholderTextColor='white' value={user.password}
          onChangeText={(text) => handleChange('password', text)}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonStyle}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.mainText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'white', marginTop: 10 }}>Don't have an account? Signup </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    display: 'flex',
    fontSize: 28,
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
  inputStyle: {
    display: 'flex',
    backgroundColor: '#5e5c5e',
    margin: 10,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    width: 300,
    color: 'white'
  },
  buttonStyle: {
    display: 'flex',
    backgroundColor: '#6200EE',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: 300,
  }
})