import React from 'react'
import { Trash2 } from 'lucide-react'
import { TickIcon } from '../icons/TickIcon'
import { Task } from '../../types/task.types'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: number) => void
  onRemoveTask: (id: number) => void
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onRemoveTask
}) => {
  return (
    <ul className="space-y-4 rounded-lg bg-white p-6 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.10)]">
      {tasks.map((task) => (
        <li key={task.id} className="group flex items-center">
          <button
            onClick={() => onToggleTask(task.id)}
            className={`mr-2 flex size-6 items-center justify-center rounded-lg transition-colors ${
              task.completed
                ? 'bg-[#17A2B8] hover:bg-[#148a9c]'
                : 'border-2 border-gray-300 hover:border-gray-400'
            }`}
          >
            {task.completed && <TickIcon />}
          </button>
          <span
            onClick={() => onToggleTask(task.id)}
            className={`grow cursor-pointer transition-colors ${
              task.completed
                ? 'text-[#17A2B8] hover:text-[#148a9c]'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onRemoveTask(task.id)}
            className="text-gray-400 opacity-0 transition-opacity hover:text-red-500 focus:opacity-100 group-hover:opacity-100"
          >
            <Trash2 size={20} />
          </button>
        </li>
      ))}
    </ul>
  )
}
