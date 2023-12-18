import React, { useEffect, useState } from "react"
import SinuPage from "../Pages/SinuPage"
import LoginPage from "../Pages/LoginPage"
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import '../Components/Style.css'
import SingleProduct from "../Pages/SingleProduct"

const MainPages = () => {
    const [logindata, setlogindata] = useState({})
    let Homepage = true;

    let navigate = useNavigate()

    if (Object.entries(logindata).length === 0) {
        Homepage = false;
        // navigate("/")
    }

    useEffect(() => {
        let logdata = JSON.parse(localStorage.getItem("LoginData")) || {}
        setlogindata(logdata);
    }, [])
    return (
        <>
            <Routes>
                <Route path="/sinup" element={<SinuPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/singleproduct" element={<SingleProduct />} />
            </Routes>

            {/* <SinuPage /> */}
            {/* <LoginPage /> */}
        </>
    )
}

export default MainPages