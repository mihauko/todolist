import { TaskForm } from './TaskForm/TaskForm'

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 font-['Inter']">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.08),0px_1px_2px_0px_rgba(0,0,0,0.10)]">
        <TaskForm />
      </div>
    </div>
  )
}
