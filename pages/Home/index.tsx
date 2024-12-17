import React, { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import styles from '../../styles/styles'
import Input from '../../components/Input'
import * as Haptics from 'expo-haptics'

export default function Home() {
  const [complete, setComplete] = useState(0)
  const [incomplete, setIncomplete] = useState(0)

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
      <Input incomplete={incomplete} setIncomplete={setIncomplete} complete={complete} setComplete={setComplete}/>
    </SafeAreaView>
  )
}
