import React, { useState } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import styles from '../../styles/styles'
import { firebase_auth } from '../../FirebaseConfig'

export default function Home() {
  const [complete, setComplete] = useState(0)
  const [incomplete, setIncomplete] = useState(1)
  
  const currentDate = () => {
    let date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
    return date.toLocaleString('en-GB', options)
  }

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.todoHeader}>
        <Text style = {styles.todoHeaderTitle}>{currentDate()}</Text>
        <Text style = {styles.todoHeaderSubtile}>{incomplete} incomplete, {complete} complete</Text>
      </View>
      
    </SafeAreaView>
  )
}
