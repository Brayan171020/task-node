import Task from "../models/task.model.js";

export const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id,
        }).populate('user');
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'});
    }
}

export const createTask = async (req,res) => {
    try {
        const { title, description, date} = req.body;
        const newTask = new Task({title: title, description: description, date: date, user: req.user.id});
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'});
    }

}

export const getTask = async (req,res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if (!task) return res.status(404).json({message: 'Task not Found'});
        res.json(task);
    } catch (error) {
        return res.status(404).json({message: 'Task not Found'});
    }
}

export const delteTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({message: "Task not Found"});
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({message: "Task not Found"});
    }
}

export const updateTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!task) return res.status(404).json({message: "Task not Found"});
        res.json(task);
    } catch (error) {
        return res.status(404).json({message: "Task not Found"});
    }

}



