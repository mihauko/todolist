import React from 'react'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'

interface NewTaskInputProps {
  newTask: string
  setNewTask: (text: string) => void
}

export const NewTaskInput: React.FC<NewTaskInputProps> = ({
  newTask,
  setNewTask
}) => {
  return (
    <div className="mb-6 flex">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task input"
        className="grow rounded-l-lg border border-r-0 border-gray-300 bg-white p-6 py-4 text-[#54595E] transition-colors focus:border focus:border-[#17A2B8] focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-lg border border-l-0 border-gray-300 bg-white px-6 text-gray-400 transition-colors hover:bg-gray-100"
      >
        <ArrowRightIcon />
      </button>
    </div>
  )
}
