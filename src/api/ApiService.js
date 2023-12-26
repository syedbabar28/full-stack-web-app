import { ApiClient } from "./ApiClient";

export const testApi = () => {
    return ApiClient.get('/getAllTodos')
}

export const getAllTodos = () => {
    return ApiClient.get('/getAllTodos')
}

export const deleteTodo = (id) => {
    return ApiClient.get('/deleteTodo/'+id)
}

export const addTodo = (todo) => {
    return ApiClient.post('/addTodo',todo)
}