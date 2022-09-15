import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    date : Date,
    email: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }
})

const Message = mongoose.model('messages', messagesSchema)

export default Message