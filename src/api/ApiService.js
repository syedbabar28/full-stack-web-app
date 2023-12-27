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

export const registerUser = (params) => {
    return ApiClient.post("/auth/register", params)
}

export const login = (userName, password) => {
    let formData = new FormData()
    formData.append("userName", userName)
    formData.append("password", password)

    return ApiClient.post("/auth/login", formData)
}