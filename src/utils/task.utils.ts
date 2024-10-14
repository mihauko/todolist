import { Filter, Task } from '../types/task.types'

export const loadTasks = (): Task[] => {
  const savedTasks = localStorage.getItem('tasks')
  return savedTasks
    ? JSON.parse(savedTasks)
    : [
        { id: 1, text: 'Prepare dinner', completed: true },
        { id: 2, text: 'Buy bread', completed: false },
        { id: 3, text: 'Watch "The Lion King"', completed: false },
        { id: 4, text: 'Gym', completed: false }
      ]
}

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const addTask = (tasks: Task[], newTask: string): Task[] => {
  if (newTask.trim()) {
    return [
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false }
    ]
  }
  return tasks
}

export const toggleTask = (tasks: Task[], id: number): Task[] => {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )
}

export const removeTask = (tasks: Task[], id: number): Task[] => {
  return tasks.filter((task) => task.id !== id)
}

export const filterTasks = (tasks: Task[], filter: Filter): Task[] => {
  return filter === Filter.All ? tasks : tasks.filter((task) => !task.completed)
}
