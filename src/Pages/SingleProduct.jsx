import React, { useEffect, useState } from 'react'
import { BsAlignStart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const [logindata, setlogindata] = useState({})
    const [product, setproduct] = useState({})
    const [cartdata, setcartdata] = useState([]);

    let navigate = useNavigate()

    const handleAddToCart = (product) => {
        let abc = [...cartdata];
        let def = abc.concat(product);
        setcartdata(def)
        localStorage.setItem("CartData", JSON.stringify(def))
        navigate("/cart")

        // setsinglepro(e)
        // localStorage.setItem("SingleProduct", JSON.stringify(e))
        // navigate("/singleproduct")
    }

    useEffect(() => {
        let logdata = JSON.parse(localStorage.getItem("LoginData")) || {}
        setlogindata(logdata);

        let productdata = JSON.parse(localStorage.getItem("SingleProduct")) || {}
        setproduct(productdata);

        let cdata = JSON.parse(localStorage.getItem("CartData")) || []
        setcartdata(cdata)
    }, [])
    return (
        <>
            <div className="main-section">
                <div className="content-section border p-2 d-flex">
                    <div className="filters border p-2 w-25">
                        <h2>Sidebar</h2><hr />
                        {/* <div className="filter-check d-flex justify-content-between">
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
                        </div><hr /> */}
                    </div>
                    <div className="products-section border p-4 w-75">
                        <div className="single_product shadow mb-5 py-4 px-5 rounded-4 w-100 d-flex " style={{
                            position: "relative"
                        }}>
                            <div className="image-section w-50 " style={{ textAlign: "left" }}>
                                <img src={product.img} alt="No image found !" />
                            </div>
                            <div className="product-content px-2 py-4 w-50">
                                <h1 style={{ marginBottom: "20px" }}>Product Details</h1>
                                <hr /><div className="d-flex justify-content-between align-items-center ">
                                    <h5> Name : </h5>
                                    <h6 className='text-secondary'>{product.name}</h6>
                                </div><hr />
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h5> Price : </h5>
                                    <h6 className='text-primary'>{product.price}</h6>
                                </div><hr />
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h5> Brand : </h5>
                                    <h6 className='text-secondary'>{product.brand}</h6>
                                </div><hr />
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h5> Category : </h5>
                                    <h6 className='text-secondary'>{product.category}</h6>
                                </div><hr />
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h5>Description: </h5><p className='m-0 text-secondary'>{product.shortdescription}</p>
                                </div><hr />
                                <button style={{ position: "absolute", bottom: "30px", right: "55px" }} className=' btn btn-primary mt-2' onClick={() => handleAddToCart(product)}>Add to cart</button>
                            </div>
                        </div>
                        {/* <h1 > {SearchDataEmpty} </h1> */}
                    </div>
                </div>
            </div >
        </>
    )
}

export default SingleProduct
