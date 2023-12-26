import { ErrorMessage, Formik, Form, Field } from "formik"
import { useEffect, useState } from "react"
import { addTodo } from "../api/ApiService"
import { useNavigate } from "react-router-dom"

export const AddTodoScreen = () => {

    const navigation = useNavigate();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const saveTodo = (values) => {
        let todo = { title: values.title, description: values.description }

        addTodo(todo)
            .then((response) => {
                if (response.data.status) {
                    navigation(-1)
                }

                console.log(response.data.status)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const validate = (values) => {
        let errors = {}

        console.log(values)

        if (values.title === "") {
            errors.title = "Please enter title"
        } else if (values.title.length < 5) {
            errors.title = "Enter atleast 5 characters"
        } else if (values.description === "") {
            errors.description = "Please enter description"
        } else if (values.description.length < 5) {
            errors.description = "Enter atleast 5 characters"
        }

        return errors
    }

    return <>
        <div className="container">

            <h4>Enter Todo Details</h4>

            <div>
                <Formik initialValues={{ title, description }}
                    enableReinitialize={true}
                    onSubmit={saveTodo}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                >

                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="title" component="div" className="alert alert-warning" />
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>Title</label>
                                    <Field type="text" className="form-control" name="title" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>

                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>

                            </Form>


                        )
                    }

                </Formik>
            </div>



        </div>
    </>
}