import { createContext, useState, useContext, useEffect } from "react";
import {
    createTasksRequest, 
    getTaskRequest, 
    getTasksRequest,
    updateTasksRequest, 
    deleteTasksRequest
} from "../api/tasks";

export const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useAuth must be used whit an AuthProvider");
    }
    return context;
}

export function TasksProvider({ children }) {
    
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const  res = await getTasksRequest();
            setTasks(res.data); 
        } catch (error) {
            console.log(error);            
        }              
    }

    const createTask = async (task) => {
        console.log('task!');
        const res = await createTasksRequest(task);
        console.log(res)
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask, getTasks }}>
            {children}
        </TasksContext.Provider>
    )
}