import express from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos/index.js"

const route = express.Router();

route.get("/todos", getTodos)

route.post("/add-todo", addTodo)

route.put("/edit-todo/:id", updateTodo)

route.delete("/delete-todo/:id", deleteTodo)

route.get("/", (request, response) => {
  response.json("Here is response")
});

export default route; 
