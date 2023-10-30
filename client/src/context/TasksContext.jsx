/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
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
    const [errors, setErrors] = useState([]);
    const [isTitle, setTitle] = useState(false);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async (task) => {
        try {
            const res = await createTasksRequest(task);
            console.log(res);
            setTitle(true);
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    const logouTask = () => {
        setTitle(false);
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id);
            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        } catch (error) {
            console.log(error)
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    };

    const updateTask = async (id, task) => {
        try {
            const res = await updateTasksRequest(id, task);
            setTitle(true);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <TasksContext.Provider value={{
            tasks, errors, createTask, logouTask,
            getTasks, deleteTask, getTask, updateTask, isTitle
        }}>
            {children}
        </TasksContext.Provider>
    )
}