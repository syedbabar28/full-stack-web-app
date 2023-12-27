import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { registerUser } from "../../api/ApiService";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const navigation = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
        } else if (values.password.length < 10) {
            errors.password = "Password length should be 10 digit"
        } else if (values.phoneNumber === "") {
            errors.phoneNumber = "Please enter phone number"
        }
        return errors
    }

    const register = (values) => {
        let params = {
            "userName": values.userName,
            "password": values.password,
            "phoneNumber": values.phoneNumber
        }

        registerUser(params).then((response) => {
            if (response.data.status) {
                navigation(-1)
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

            {errorMessage != "" ? <div className="alert alert-danger">
                <h6>{errorMessage}</h6>
            </div> : <div></div>
            }

            <h4>Registration</h4>

            <div>
                <Formik initialValues={{ userName, password, phoneNumber }}
                    enableReinitialize={true}
                    onSubmit={register}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}>
                    {
                        (props) => (
                            <Form className="container">

                                <ErrorMessage name="userName" component="div" className="alert alert-warning" />
                                <ErrorMessage name="password" component="div" className="alert alert-warning" />
                                <ErrorMessage name="phoneNumber" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>User name</label>
                                    <Field type="text" className="form-control" name="userName" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Phone number</label>
                                    <Field type="phone" className="form-control" name="phoneNumber" />
                                </fieldset>

                                <button className="btn btn-success mt-5 btn-lg " type="submit">Register</button>

                            </Form>
                        )
                    }
                </Formik>

            </div>

        </div>

    </>
}