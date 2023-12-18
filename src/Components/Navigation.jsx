import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";

const Navigation = () => {
    const [logindata, setlogindata] = useState({})
    let logourll = "/home";
    let homeurll = "/home";
    let carturll = "/cart"
    let logout = "hidden";
    let cartItemCount = 0;
    let navigate = useNavigate();

    if (Object.entries(logindata).length === 0) {
        homeurll = "/";
        carturll = "/";
        logourll = "/";

    } else {
        logourll = "/home";
        homeurll = "/home";
        carturll = "/cart"
        logout = "visible"
        // navigate("/home")
    }

    let abc = JSON.parse(localStorage.getItem("CartData")) || []
    cartItemCount = abc.length;

    const hanlelogout = () => {
        localStorage.setItem("LoginData", JSON.stringify({}))
    }
    useEffect(() => {
        let logdata = JSON.parse(localStorage.getItem("LoginData")) || {}
        setlogindata(logdata);
    }, [])
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: "0", zIndex: "99" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" style={{ fontSize: "25px" }} to={logourll}>E-Shop</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item  d-flex align-items-center" style={{ fontSize: "18px" }} >
                                <Link class="nav-link active" aria-current="page" to={homeurll}>Home</Link>
                            </li>

                            <li class="nav-item d-flex align-items-center " >
                                <Link class="nav-link active nav-cart" style={{ fontSize: "20px", position: "relative" }} aria-current="page" to={carturll}><BsCart3 /><span className='rounded-circle' style={{ fontSize: "11px", position: "absolute", backgroundColor: "#f0f0f0", padding: "0px 5px ", color: "red" }}>{cartItemCount}</span></Link>
                            </li>
                            <li class="nav-item d-flex align-items-center mx-3" style={{ fontSize: "18px" }} >
                                <Link class="nav-link active" aria-current="page" style={{ visibility: `${logout}` }} to={"/"} onClick={hanlelogout}>LogOut</Link>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
