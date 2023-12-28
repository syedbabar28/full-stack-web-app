import React from "react";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

export const Header = () => {

    const auth = useAuth()

    const logout = () => {
        auth.logout()
    }

    return <>
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand fs-6 fw-bold text-black" href="https://www.in28minutes.com">Todo App</a>
                        {
                            (auth.isLoggedIn) ? <div className="my-2 my-lg-0"> <Link className="navbar-brand fs-6 fw-bold text-black" to={"/"} onClick={() => { logout() }}>Logout</Link></div> : <div></div>
                        }

                    </nav >
                </div>
            </div>
        </header>
    </>
}