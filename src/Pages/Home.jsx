import React, { useEffect, useState } from 'react'
import Products from "../Components/Products"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [SearchData, setSearchData] = useState([]);
    const [SearchDataEmpty, setSearchDataEmpty] = useState("");
    const [search, setsearch] = useState("");
    const [range, setrange] = useState("75000");
    const [logindata, setlogindata] = useState({})
    const [singlepro, setsinglepro] = useState({})

    let navigate = useNavigate()

    // let searchdatalenght = SearchData.length;
    // if (searchdatalenght <= 0) {
    //     setSearchDataEmpty("Not Data Found !")
    // }
    const handlesearch = (e) => {
        setsearch(e.target.value)
    }
    const handleclicksearch = () => {
        let abc = Products.filter((e) => {
            return e.name.includes(search.toLowerCase()) || e.brand.includes(search.toLowerCase()) || e.category.includes(search.toLowerCase()) || e.shortdescription.includes(search.toLowerCase())
        })
        setSearchData(abc)
    }
    const handlechecked = (e) => {
        let checked = (e.target.checked);
        if (checked && e.target.name === "10000") {
            let checkedproduct = Products.filter(e => e.price <= 10000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "25000") {
            let checkedproduct = Products.filter(e => e.price <= 25000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "50000") {
            let checkedproduct = Products.filter(e => e.price <= 50000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "100000") {
            let checkedproduct = Products.filter(e => e.price <= 100000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "g10000") {
            let checkedproduct = Products.filter(e => e.price >= 10000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "g25000") {
            let checkedproduct = Products.filter(e => e.price >= 25000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "g50000") {
            let checkedproduct = Products.filter(e => e.price >= 50000)
            setSearchData(checkedproduct)
        } else if (checked && e.target.name === "g100000") {
            let checkedproduct = Products.filter(e => e.price >= 100000)
            setSearchData(checkedproduct)
        }
        else {
            setSearchData(Products)
        }
    }

    const handlerange = (e) => {
        let range = (e.target.value);
        setrange(range)

        let rangeproducts = Products.filter(e => e.price <= range);
        setSearchData(rangeproducts)
    }
    const handleAddToCart = (e) => {
        // let abc = [...cartdata];
        // let def = abc.concat(e);
        // setcartdata(def)
        // localStorage.setItem("CartData", JSON.stringify(def))
        // navigate("/cart")

        setsinglepro(e)
        localStorage.setItem("SingleProduct", JSON.stringify(e))
        navigate("/singleproduct")
    }

    useEffect(() => {
        setSearchData(Products)

        let logdata = JSON.parse(localStorage.getItem("LoginData")) || {}
        setlogindata(logdata);

    }, [])

    return (
        <>
            {logindata && <div className="main-section">
                <div className="heading-section border p-2 d-flex justify-content-center ">
                    <input className='form-control w-50' type="text" placeholder='Search here...' onChange={handlesearch} />
                    <button className='btn btn-success' onClick={handleclicksearch}>Search</button>
                </div>
                <div className="content-section border p-2 d-flex">
                    <div className="filters border p-2 w-25">
                        <h2>Filter Items</h2><hr />
                        <div className="filter-check d-flex justify-content-between">
                            <div className='d-flex align-items-center'><input type="checkbox" name='10000' value={10000} onChange={handlechecked} />&lt;10,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='25000' value={25000} onChange={handlechecked} />&lt;25,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='50000' value={50000} onChange={handlechecked} />&lt;50,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='100000' value={100000} onChange={handlechecked} />&lt;1,00,000</div>
                        </div>
                        <div className="filter-check d-flex justify-content-between mt-2">
                            <div className='d-flex align-items-center'><input type="checkbox" name='g10000' value={10000} onChange={handlechecked} />&gt;10,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='g25000' value={25000} onChange={handlechecked} />&gt;25,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='g50000' value={50000} onChange={handlechecked} />&gt;50,000</div>
                            <div className='d-flex align-items-center'><input type="checkbox" name='g100000' value={100000} onChange={handlechecked} />&gt;1,00,000</div>
                        </div><hr />
                        <div className="filter-check d-flex align-items-center mt-2">
                            <div className='d-flex align-items-center justify-content-between w-100 '>
                                <h5> Price:</h5>
                                <input type="range" className='w-50' min={5000} max={100000} defaultValue={75000} onChange={handlerange} />
                                <h5>{range}</h5>
                            </div>
                        </div><hr />
                    </div>
                    <div className="products-section border p-2 w-75">
                        <div className="allProducts d-flex flex-wrap p-2 justify-content-between">
                            {
                                SearchData.map((e) => {
                                    return (
                                        <div className="product shadow mb-5 rounded-4 ">
                                            <img src={e.img} alt="" />
                                            <div className="product-content px-2 py-4">
                                                <div className="d-flex justify-content-between ">
                                                    <h4>{e.name}</h4>
                                                    <h4 className='product-price'>${e.price}</h4>
                                                </div>
                                                <p>{e.shortdescription}</p>
                                                <button className='btn btn-primary mt-2' onClick={() => handleAddToCart(e)}>View Product</button>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        {/* <h1 > {SearchDataEmpty} </h1> */}
                    </div>
                </div>
            </div >}
        </>
    )
}

export default Home
