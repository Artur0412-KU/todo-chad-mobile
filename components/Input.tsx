import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import styles from '../styles/styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as Haptics from 'expo-haptics'
import ClearButton from './ClearButton';
import TaskInput from './TaskInput';

export default function Input({incomplete, setIncomplete, complete, setComplete}) {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')

    const addTask = () => {
       const newTask = {id: `${Date.now()}-${Math.random()}`, text, completed: false}
       setTasks([...tasks, newTask])
       setText('')
       Haptics.selectionAsync()

       setIncomplete(incomplete+1)
    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
        setIncomplete(Math.max(incomplete - 1, 0))
        setComplete(Math.max(complete - 1, 0));
        Haptics.impactAsync()

    }

    const toogleCompleted = (id: number) => {
        setTasks(tasks.map(task => (task.id === id ? {...task, completed: !task.completed} : task)))
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
        {tasks.map((task) => {
            return (
                <TaskInput task={task} toogleCompleted={toogleCompleted} removeTask={removeTask}/>
            )
        })}
        <View style = {styles.inputPrintContainer}>
            <Pressable style = {styles.inputPrintButton} onPress={addTask}>
              <FontAwesome5 name="plus" size={18} color="white" />
            </Pressable>
            <TextInput placeholder='Add a new task' style = {styles.inputPrint} value={text} onChangeText={setText}/>
        </View>

        <ClearButton clearTasks={clearTasks}/>
    </View>
  )
}
