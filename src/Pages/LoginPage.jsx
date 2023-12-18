import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [sinupAllData, setsinupAllData] = useState([]);
    const [logindata, setlogindata] = useState({
        email: "",
        password: ""
    });

    const [error, seterror] = useState({})
    const [passwordmode, setpasswordmode] = useState("password")
    const navigate = useNavigate();

    const handleValue = (e) => {
        setlogindata({ ...logindata, [e.target.name]: e.target.value })
    }

    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const passwordRegex = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/


    const handleSubmit = () => {
        if (varify()) {
            let abc = sinupAllData.find((e) => {
                return e.email === logindata.email && e.password === logindata.password;
            })

            if (abc) {
                localStorage.setItem("LoginData", JSON.stringify(logindata))
                navigate("/home")
            }
        }
    }

    const varify = () => {
        let valid = true;
        let localError = {};

        if (logindata.email.length === 0) {
            localError.email = "Email is Required !";
            valid = false;
        } else if (!emailRegex.test(logindata.email)) {
            localError.email = "Not valid Email";
            valid = false;
        }

        if (logindata.password.length === 0) {
            localError.password = "Password Required !"
            valid = false
        } else if (!passwordRegex.test(logindata.password)) {
            localError.password = "Use valid password"
            valid = false
        }
        seterror(localError);
        return valid;
    }

    const handleMode = () => {
        if (passwordmode === "password") {
            setpasswordmode("text")
        }
        else {
            setpasswordmode("password")
        }
    }

    useEffect(() => {
        let abc = JSON.parse(localStorage.getItem("SinupData"))
        setsinupAllData(abc)
    }, [])


    return (
        <>
            <div className="form-body shadow w-50 m-auto p-4 my-5 rounded-4">
                <h1 className="my-3">Login Form</h1>

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">EMail :
                    <div className="w-75 d-flex justify-content-right " style={{ position: "relative" }}>
                        <input className="form-control mt-4 mb-3 mx-2" type="email" name="email" onChange={handleValue} />
                    </div>
                </label>
                {error.email && <p className="text-danger">{error.email}</p>}

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">Password :
                    <div className="w-75 d-flex justify-content-right " style={{ position: "relative" }}>
                        <input className="form-control w-100 mt-4 mb-3 mx-2 " type={passwordmode} name="password" onChange={handleValue} />
                        <div onClick={handleMode} style={{ position: "absolute", right: "20px", top: "30px" }}>{(passwordmode === "password" ? <FaRegEyeSlash /> : <FaRegEye />)}</div>
                    </div>
                </label>
                {error.password && <p className="text-danger">{error.password}</p>}

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">
                    <button className="btn btn-success py-2 px-5 my-3 m-auto" onClick={handleSubmit}> LogIn</button>
                </label>
                <Link class="" to={"/sinup"}><p>Create a new account</p></Link>
            </div >

            {/* <div className="datashow">
                <h1>{logindata.email}</h1>
                <h1>{logindata.password}</h1>
            </div> */}
        </>
    )
}

export default LoginPage
