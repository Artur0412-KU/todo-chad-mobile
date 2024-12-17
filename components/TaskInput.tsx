import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from '../styles/styles'
import Entypo from '@expo/vector-icons/Entypo';
import RemoveIcon from '../icons/Remove';
import DoneIcon from '../icons/Done';

export default function TaskInput({task, toogleCompleted, removeTask}) {
  return (
    <View key={task.id} style = {styles.taskInputContainer}>
        <Pressable onPress={() => toogleCompleted(task.id)}>
          {task.completed ? (<DoneIcon /> ): (<Entypo name="circle" size={24} color="#CBCBCB" />)}
        </Pressable>
        <Text style = {styles.taskInputContainerText}>{task.text}</Text>
        <Pressable onPress={() =>removeTask(task.id)}>
          <RemoveIcon />
        </Pressable>
    </View>
  )
}
