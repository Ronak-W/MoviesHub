import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style = {styles.container}>
      <Text>Search</Text>
      <View style = {styles.inputContainer}>
      <TextInput style = {styles.inputStyle}
        placeholder='Enter the title'
      />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#000000',
      },
      inputContainer : {
          display : 'flex',
          alignItems : 'center'
      },
      inputStyle:{
        display : 'flex',
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor : 'white',
        height : 50,
        width : '90%',
        borderRadius : 10,
        paddingLeft : 10
      }
})