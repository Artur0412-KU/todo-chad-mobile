import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import styles from '../../styles/styles'

export default function SignUp({navigation}: any) {
  return (
    <View style={styles.container}>
        <Text>Sign Up</Text>
        <Button title='Back' onPress={() => navigation.navigate('signin')}/>
    </View>
  )
}
