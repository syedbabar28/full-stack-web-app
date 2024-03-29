import { useEffect, useState } from "react"
import { getTodosByUser, deleteTodo } from "../api/ApiService"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../data/AuthContext";

export const TodoListScreen = () => {
    const navigate = useNavigate()

    const auth = useAuth()
    let userDetails = auth.getUserDetailsFromCache()

    const [todos, setTodos] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const navigateToAddTodos = () => {
        navigate("/AddTodo/0")
    }

    // console.log(`user data: ${auth.userDetails.userName}`)

    const getTodos = () => {
        getTodosByUser(userDetails.id).then((response) => {
            if (response.data.status) {
                setTodos(response.data.data)
            } else {
                setTodos(response.data.data)
                setErrorMessage(response.data.responseMessage)
            }
            console.log(response)
        }).catch((error) => {
            setErrorMessage(error.message)
            console.log(error)
        })
    }

    const deleteTodoById = (id) => {
        deleteTodo(id).then((response) => {
            if (response.data.status) {
                getTodos()
            } else {
                setErrorMessage(response.data.responseMessage)
            }
        }).catch((error) => {
            setErrorMessage(error.message)
            console.log(error)
        })
    }

    const editTodo = (id) => {
        navigate(`/addTodo/${id}`)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return <>
        <div className="container">

            {errorMessage != "" ? <div className="alert alert-danger">
                <h6>{errorMessage}</h6>
            </div> : <div></div>
            }

            <div className="row p-2 align-middle">
                <h5 className="col-sm-11 text-primary text-left">Want to maintain your daily task, reminder etc</h5>
                <button className="col-sm-1 btn-sm btn btn-success" onClick={() => { navigateToAddTodos() }}>Add Todo</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        todos.length > 0 ? todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm" onClick={() => { editTodo(todo.id) }}>Edit Todo</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => { deleteTodoById(todo.id) }}>Delete Todo</button>
                                </td>

                            </tr>
                        )) : <tr>
                            <td></td>
                            <td>No todos found</td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </table>

        </div>
    </>

}