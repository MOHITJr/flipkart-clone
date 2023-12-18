import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SinuPage = () => {
    const [sinupAllData, setsinupAllData] = useState([]);
    const [sinupdata, setsinupdata] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, seterror] = useState({})
    const [emailexists, setemailexists] = useState("")
    const [passwordmode, setpasswordmode] = useState("password")

    let navigate = useNavigate();

    const handleValue = (e) => {
        setsinupdata({ ...sinupdata, [e.target.name]: e.target.value })
    }

    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const passwordRegex = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/


    const handleSubmit = () => {
        if (varify()) {

            let abc = sinupAllData.find((e) => {
                return e.email === sinupdata.email;
            })
            setemailexists(abc?.email)
            if (!abc) {
                let a = [...sinupAllData]
                let b = a.concat(sinupdata)
                setsinupAllData(b)
                localStorage.setItem("SinupData", JSON.stringify(b))

                setemailexists("")
                setsinupdata({ name: "", email: "", password: "" })

                navigate("/")
            }


        }
    }

    const varify = () => {
        let valid = true;
        let localError = {};

        if (sinupdata.name.length === 0) {
            localError.name = "Name is Required !";
            valid = false;
        } else if (sinupdata.name.length < 5) {
            localError.name = "Name must be 5 characters";
            valid = false;
        }

        if (sinupdata.email.length === 0) {
            localError.email = "Email is Required !";
            valid = false;
        } else if (!emailRegex.test(sinupdata.email)) {
            localError.email = "Not valid Email";
            valid = false;
        } else if (emailexists) {
            localError.email = "Email is already exists"
            valid = false;
        }

        if (sinupdata.password.length === 0) {
            localError.password = "Password Required !"
        } else if (!passwordRegex.test(sinupdata.password)) {
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
        let allsinupdata = JSON.parse(localStorage.getItem("SinupData")) || []
        setsinupAllData(allsinupdata);
    }, [])

    return (
        <>
            <div className="form-body shadow w-50 m-auto p-4 my-5 rounded-4">
                <h1 className="my-3">SignUp Form</h1>
                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">Name :
                    <div className="w-75 d-flex justify-content-right " style={{ position: "relative" }}>
                        <input className="form-control mt-4 mb-3 mx-2" type="text" name="name" onChange={handleValue} value={sinupdata.name} />
                    </div>
                </label>
                {error.name && <p className="text-danger">{error.name}</p>}

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">EMail :
                    <div className="w-75 d-flex justify-content-right " style={{ position: "relative" }}>
                        <input className="form-control mt-4 mb-3 mx-2" type="email" name="email" onChange={handleValue} value={sinupdata.email} />
                    </div>
                </label>
                {error.email && <p className="text-danger">{error.email}</p>}

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">Password :
                    <div className="w-75 d-flex justify-content-right " style={{ position: "relative" }}>
                        <input className="form-control w-100 mt-4 mb-3 mx-2 " type={passwordmode} name="password" onChange={handleValue} value={sinupdata.password} />
                        <div onClick={handleMode} style={{ position: "absolute", right: "20px", top: "30px" }}>{(passwordmode === "password" ? <FaRegEyeSlash /> : <FaRegEye />)}</div>
                    </div>
                </label>
                {error.password && <p className="text-danger">{error.password}</p>}

                <label htmlFor="" className="w-100 d-flex align-items-center justify-content-between">
                    <button className="btn btn-success py-2 px-5 my-3 m-auto" onClick={handleSubmit}> SinUp</button>
                </label>
                <p>if you have a account than <Link class="" to={"/"}>LogIn</Link></p>

            </div>

            <div className="datashow">
                {/* <h1>{sinupdata.name}</h1>
                <h1>{sinupdata.email}</h1>
                <h1>{sinupdata.password}</h1> */}
            </div>
        </>
    )
}

export default SinuPage