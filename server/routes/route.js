import express from "express";

import Todo from "../models/Todo.js";

const route = express.Router();

route.get("/todos", (request, response) => {
  console.log(request.body.data)
  Todo.find().then((data) => {
    console.log(data)
    });
});

route.get("/", (request, response) => {
    console.log(request.body.data)
  });

export default route;
