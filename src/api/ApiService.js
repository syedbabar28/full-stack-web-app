import { ApiClient } from "./ApiClient";

export const testApi = () => {
    return ApiClient.get('/todos/getAllTodos')
}

export const getAllTodos = () => {
    return ApiClient.get('/todos/getAllTodos')
}

export const deleteTodo = (id) => {
    return ApiClient.get(`/todos/deleteTodo/${id}`)
}

export const addTodo = (todo) => {
    return ApiClient.post('/todos/addTodo', todo)
}

export const updateTodo = (id, todo) => {
    return ApiClient.post(`/todos/updateTodo/${id}`, todo)
}

export const getTodoById = (id) => {
    return ApiClient.get(`/todos/getTodo/${id}`)
}