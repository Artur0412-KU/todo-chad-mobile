import React from 'react'
import { Text } from 'react-native'
import styles from '../../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Menu() {
  return (
    <SafeAreaView style = {styles.container}>
        <Text>Menu</Text>
    </SafeAreaView>
  )
}
