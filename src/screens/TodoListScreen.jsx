import { useEffect, useState } from "react"
import { getAllTodos, deleteTodo } from "../api/ApiService"
import { useNavigate } from 'react-router-dom'

export const TodoListScreen = () => {
    const navigate = useNavigate();

    const navigateToAddTodos = () => {
        navigate("/AddTodo/0")
    }

    const [todos, setTodos] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const getTodos = () => {
        getAllTodos().then((response) => {
            if (response.data.status) {
                setTodos(response.data.data);
            } else {
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