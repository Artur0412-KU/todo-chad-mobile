import React, { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import styles from '../styles/styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as Haptics from 'expo-haptics'
import ClearButton from './ClearButton';
import TaskInput from './TaskInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLoadTasks from '../hooks/useLoadTasks';
import { addTaskHelper, removeTaskHelper, toggleTaskHelper } from '../utils/taskUtils';

export default function Input({incomplete, setIncomplete, complete, setComplete}) {
    const [tasks, setTasks] = useLoadTasks(setComplete, setIncomplete)
    const [text, setText] = useState('')

    const addTask = () => {
       addTaskHelper(tasks, setTasks, text)
       setText('')
       Haptics.selectionAsync()

       setIncomplete(incomplete+1)
    }

    const removeTask = (id: number) => {
        removeTaskHelper(tasks, setTasks, id)
        setIncomplete(Math.max(incomplete - 1, 0))
        setComplete(Math.max(complete - 1, 0));
        Haptics.impactAsync()

    }

    const toogleCompleted = (id: number) => {
        toggleTaskHelper(tasks, setTasks, id)
        setIncomplete(Math.max(incomplete - 1, 0))
        setComplete(complete + 1)
        Haptics.selectionAsync()

    }

    const clearTasks = () => {
        setTasks([])
        setIncomplete(0)
        setComplete(0)
        Haptics.impactAsync()
    }
  return (
    <View style = {styles.todoListContainer}>
        <View>
           {tasks.map((task) => {
            return (
                <TaskInput task={task} toogleCompleted={toogleCompleted} removeTask={removeTask}/>
            )
           })}
        
            <View style = {styles.inputPrintContainer}>
                <Pressable style = {styles.inputPrintButton} onPress={addTask}>
                  <FontAwesome5 name="plus" size={16} color="white" />
                </Pressable>
                <TextInput placeholder='Add a new task' style = {styles.inputPrint} value={text} onChangeText={setText}/>
            </View> 
        </View>
         

        <ClearButton clearTasks={clearTasks}/>
    </View>
  )
}
