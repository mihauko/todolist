import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Filter, Task } from '../../types/task.types'
import { TaskList } from '../TaskList/TaskList'
import { FilterButtons } from 'components/FilterButtons/FilterButtons'
import {
  loadTasks,
  saveTasks,
  addTask,
  toggleTask,
  removeTask,
  filterTasks
} from '../../utils/task.utils'
import { NewTaskInput } from 'components/NewTaskInput/NewTaskInput'

export const TaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const [filter, setFilter] = useState<Filter>(Filter.All)

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const handleAddTask = useCallback((text: string) => {
    setTasks((prevTasks) => addTask(prevTasks, text))
  }, [])

  const handleToggleTask = useCallback((id: number) => {
    setTasks((prevTasks) => toggleTask(prevTasks, id))
  }, [])

  const handleRemoveTask = useCallback((id: number) => {
    setTasks((prevTasks) => removeTask(prevTasks, id))
  }, [])

  const handleFilterChange = useCallback((newFilter: Filter) => {
    setFilter(newFilter)
  }, [])

  const filteredTasks = useMemo(
    () => filterTasks(tasks, filter),
    [tasks, filter]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      handleAddTask(newTask)
      setNewTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-[285px]">
      <NewTaskInput setNewTask={setNewTask} newTask={newTask} />
      <FilterButtons
        currentFilter={filter}
        onFilterChange={handleFilterChange}
      />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onRemoveTask={handleRemoveTask}
      />
    </form>
  )
}
