import React, { useState } from 'react'
import { ActivityIndicator, Button, Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import styles from '../../styles/styles'
import { firebase_auth } from '../../FirebaseConfig'
import useFontsLoad from '../../hooks/useFontsLoad'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignUp({navigation}: any) {
  const fontsLoad = useFontsLoad()
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = firebase_auth;

    const signUp = async () => {
      setLoading(true)
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.error(error)
        Alert.alert('Error', 'This email has already been')
      }
      setLoading(false)
      
    }

    if(!fontsLoad) {
      return <View>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    } else {
      return (
        <View style={styles.container}>
          <Text style = {styles.title}>Sign Up</Text>
          <TextInput placeholder='Email' placeholderTextColor='#fff' value={email} style = {styles.input} onChangeText={(text) => onChangeEmail(text.toLowerCase())}/>
          <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor='#fff'
          keyboardType="numeric"
          secureTextEntry = {true}
          />

          {loading ? (<ActivityIndicator size='large' color='#fff'/>) : (
            <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={signUp}>
             <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style = {styles.buttonContainerText}>
              <Text style = {styles.buttonTextButtom}>Have an account?</Text>
              <Text style = {styles.buttonTextButtomBold} onPress={() => navigation.navigate('signin')}>Sign In</Text>
            </View>
            
          </View>
          )}
          
          
        </View>
      );
    }
}
