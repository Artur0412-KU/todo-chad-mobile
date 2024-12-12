import React, { useState } from 'react'
import useFontsLoad from '../../hooks/useFontsLoad';
import { ActivityIndicator, TextInput, Button, StatusBar, Text, View, Pressable } from 'react-native';
import styles from '../../styles/styles';
import { firebase_auth } from '../../FirebaseConfig';

export default function SignIn({navigation}: any) {
    const fontsLoad = useFontsLoad()
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = firebase_auth;

    if(!fontsLoad) {
      return <View>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    } else {
      return (
        <View style={styles.container}>
          <Text style = {styles.title}>Sign In</Text>
          <TextInput placeholder='Email' placeholderTextColor='#fff' value={email} style = {styles.input} onChangeText={onChangeEmail}/>
          <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          placeholderTextColor='#fff'
          keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
             <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            <View style = {styles.buttonContainerText}>
              <Text style = {styles.buttonTextButtom}>Don’t have an account?</Text>
              <Text style = {styles.buttonTextButtomBold} onPress={() => navigation.navigate('signup')}>Sign Up</Text>
            </View>
            
          </View>
          
        </View>
      );
    }
}

