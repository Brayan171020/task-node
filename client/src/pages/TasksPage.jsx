/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import  TasksCard  from "../components/TasksCard";

function TasksPage() {

  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, [])

  if (tasks.length === 0) return (<h1>No tasks</h1>);

  return (
    <div className="grid grid-cols-3 gap-2">
      {
        tasks.map(task => (
          <TasksCard task = {task} key = {task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage