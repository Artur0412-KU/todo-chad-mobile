import React, { useState } from 'react'
import useFontsLoad from '../../hooks/useFontsLoad';
import { ActivityIndicator, TextInput, Button, StatusBar, Text, View, Pressable, Alert } from 'react-native';
import styles from '../../styles/styles';
import { firebase_auth } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn({navigation}: any) {
    const fontsLoad = useFontsLoad()
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = firebase_auth;

    const signIn = async () => {
      setLoading(true)
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        console.error(error)
        Alert.alert('Error', 'Incorrect password or email')
      } finally {
        setLoading(false)
      }
      
    }

    if(!fontsLoad) {
      return <View>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    } else {
      return (
        <View style={styles.container}>
          <Text style = {styles.title}>Sign In</Text>
          <TextInput placeholder='Email' placeholderTextColor='#fff' value={email} style = {styles.input} onChangeText={(text) => onChangeEmail(text.toLowerCase())} keyboardType='email-address'/>
          <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor='#fff'
          secureTextEntry = {true}
          />

          {loading ? (<ActivityIndicator size='large' color='#fff'/>) : (
            <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={signIn}>
             <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            <View style = {styles.buttonContainerText}>
              <Text style = {styles.buttonTextButtom}>Don’t have an account?</Text>
              <Text style = {styles.buttonTextButtomBold} onPress={() => navigation.navigate('signup')}>Sign Up</Text>
            </View>
            
          </View>
          )}

          
          
        </View>
      );
    }
}

