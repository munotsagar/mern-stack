import {Schema, model} from "mongoose";

const TodoSchema = new Schema({
    title: String,
    completed: Boolean
})

const TodoModel = model("Todo", TodoSchema);

export default TodoModel;