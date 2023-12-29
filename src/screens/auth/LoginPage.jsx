import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../../api/ApiService";
import { useAuth } from "../../data/AuthContext";


export const LoginPage = () => {

    const navigation = useNavigate()
    const auth = useAuth();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const validate = (values) => {
        let errors = {}
        console.log(values)
        if (values.userName === "") {
            errors.userName = "Please enter user name"
        } else if (values.userName.length < 5) {
            errors.userName = "Enter atleast 5 characters"
        } else if (values.password === "") {
            errors.password = "Please enter password"
        } else if (values.password.length < 9) {
            errors.password = "Password length should be 9 digit"
        }
        return errors
    }

    const signIn = (values) => {

        login(values.userName, values.password).then((response) => {
            if (response.data.status) {
                auth.setUserDetailsInCache(response.data.data)
                navigation("/")
            } else {
                setErrorMessage(response.data.responseMessage)
            }

            console.log(response)
        }).catch((error) => {
            setErrorMessage(error)
            console.log(error)
        })
    }

    return <>
        <div className="container p-5">

            <h4>Login</h4>

            <div>

                {errorMessage !== "" ? <div className="alert alert-danger">
                    <h6>{errorMessage}</h6>
                </div> : <div></div>
                }

                <Formik initialValues={{ userName, password }}
                    enableReinitialize={true}
                    onSubmit={signIn}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}>
                    {
                        (props) => (
                            <Form className="container">
                                <ErrorMessage name="userName" component="div" className="alert alert-warning" />
                                <ErrorMessage name="password" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>User name</label>
                                    <Field type="text" className="form-control" name="userName" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                </fieldset>

                                <button className="btn btn-success mt-5 btn-lg " type="submit">Login</button>

                            </Form>
                        )
                    }

                </Formik>
            </div>

            <div style={{ display: "flex", flexDirection: "row", marginTop: "20px", justifyItems: "center" }}>
                <h5>Dont have account? Click here to</h5>
                <h5><a className="text-success" style={{ marginLeft: "5px" }} href="/register">Register here</a></h5>
            </div>

        </div>
    </>
}