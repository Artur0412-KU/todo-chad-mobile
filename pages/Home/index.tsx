import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import styles from '../../styles/styles'
import { firebase_auth } from '../../FirebaseConfig'

export default function Layout() {
  return (
    <SafeAreaView style = {styles.container}>
      <Button onPress={() => firebase_auth.signOut()} title='Sign Out'/>
    </SafeAreaView>
  )
}
