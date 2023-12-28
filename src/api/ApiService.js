import { ApiClient } from "./ApiClient";

export const testApi = () => {
    return ApiClient.get('/todos/getAllTodos')
}

export const getTodosByUser = (userId) => {
    return ApiClient.get(`/todos/getTodosByUser/${userId}`)
}

export const deleteTodo = (id) => {
    return ApiClient.get(`/todos/deleteTodo/${id}`)
}

export const addTodo = (userId,todo) => {
    return ApiClient.post(`/todos/addTodo/${userId}`, todo)
}

export const updateTodo = (id, userId, todo) => {
    return ApiClient.post(`/todos/updateTodo/${id}/${userId}`, todo)
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