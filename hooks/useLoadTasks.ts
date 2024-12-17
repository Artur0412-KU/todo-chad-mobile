import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '../types/types';

export default function useLoadTasks(setComplete, setIncomplete) {
    const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          const parsedTasks = JSON.parse(storedTasks);
          setTasks(parsedTasks);

          const completedCount = parsedTasks.filter(task => task.completed).length;
          setComplete(completedCount);
          setIncomplete(parsedTasks.length - completedCount);
        }
      } catch (e) {
        console.error('Error loading tasks:', e);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (e) {
        console.error('Error saving tasks:', e);
      }
    };

    saveTasks();
  }, [tasks]);

  return [tasks, setTasks];
}

