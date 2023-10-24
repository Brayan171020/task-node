import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://bjgamboa19:XlHzYCwQJOj9cUBG@cluster0.qpiexda.mongodb.net/?retryWrites=true&w=majority')
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
    
}