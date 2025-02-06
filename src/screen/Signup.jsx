import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (name, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };


  const handleSubmit = async () => {
    if (!user.email || !user.username || !user.password) {
      Alert.alert('Please fill in all the fields');
      return;
    }

    if (!isValidEmail(user.email)) {
      Alert.alert('Invalid email format');
      return;
    }

    try {

      const response = await axios.get(`https://67a091375bcfff4fabdfc6c7.mockapi.io/moviehub/users`);

      const existingUser = response.data.find((u) => u.email === user.email);
      console.log(existingUser);

      if (existingUser) {
        Alert.alert('Email already exists');
      } else {
        await axios.post('https://67a091375bcfff4fabdfc6c7.mockapi.io/moviehub/users', user);

        setUser({
          email: "",
          username: "",
          password: ""
        });

        navigation.navigate('Login');
        Alert.alert('User Registered successfully');
      }
    } catch (error) {
      console.error('Error during email check or registration:', error);
      Alert.alert('An error occurred. Please try again later.');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Sign Up</Text>
        </View>

        <TextInput
          style={styles.inputStyle}
          name="email"
          placeholder='Email'
          placeholderTextColor='white'
          value={user.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={styles.inputStyle}
          name="username"
          placeholder='Username'
          placeholderTextColor='white'
          value={user.username}
          onChangeText={(text) => handleChange('username', text)}
        />

        <TextInput
          style={styles.inputStyle}
          name="password"
          placeholder='Password'
          placeholderTextColor='white'
          value={user.password}
          secureTextEntry={true}
          onChangeText={(text) => handleChange('password', text)}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonStyle}
          onPress={handleSubmit}
        >
          <Text style={styles.mainText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'white', marginTop: 10 }}>Already have an account? Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup;

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
    backgroundColor: '#5e5c5e',
    margin: 10,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    width: 300,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#6200EE',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: 300,
  }
});
