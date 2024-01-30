import {Schema, model} from "mongoose";

const TodoSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
  
      description: {
        type: String,
        required: true,
      },
  
      status: {
        type: Boolean,
        required: true,
      },
    },
    { timestamps: true }
  )

const Todo = model("Todo", TodoSchema);

export default Todo;