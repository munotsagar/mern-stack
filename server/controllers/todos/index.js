import express from "express";
import TodoModel from "../../models/Todo.js"

const getTodos = async (request, response) => {
  try {
    const todos = await Todo.find()
    response.status(200).json({ todos })
    console.log(todos)
  } catch (error) {
    throw error
  }
}

const addTodo = async (request, response)=> {
  try {
    const body = req.body;

    const todo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    const newTodo = await todo.save()
    const allTodos = await Todo.find()

    response
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos })
  } catch (error) {
    throw error
  }
}

const updateTodo = async (request, response) => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allTodos = await Todo.find()
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

const deleteTodo = async (request, response) => {
  try {
    const deletedTodo = await Todo.findByIdAndRemove(
      req.params.id
    )
    const allTodos = await Todo.find()
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    })
  } catch (error) {
    throw error
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
