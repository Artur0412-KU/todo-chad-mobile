export const addTaskHelper = (tasks, setTasks, text) => {
    const newTask = { id: `${Date.now()}-${Math.random()}`, text, completed: false };
    setTasks([...tasks, newTask]);
};
  
export const removeTaskHelper = (tasks, setTasks, id) => {
    return setTasks(tasks.filter(task => task.id !== id));
};
  
export const toggleTaskHelper = (tasks, setTasks, id) => {
    return setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
};
  