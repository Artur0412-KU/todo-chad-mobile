import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from '../styles/styles'

export default function ClearButton({clearTasks}) {
  return (
    <Pressable onPress={clearTasks} style = {styles.clearButton}>
        <Text style = {styles.clearButtonText}>Clear</Text>
    </Pressable>

  )
}
