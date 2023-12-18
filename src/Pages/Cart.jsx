import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";

const Cart = () => {
    const [cartdata, setcartdata] = useState([])

    const handleremove = (i) => {
        let abc = [...cartdata];
        abc.splice(i, 1);

        setcartdata(abc)

        localStorage.setItem("CartData", JSON.stringify(abc))
    }

    useEffect(() => {
        let abc = JSON.parse(localStorage.getItem("CartData")) || []
        setcartdata(abc)
    }, [])
    return (
        <>
            <div className="products-section border p-2">
                <div className="allProducts d-flex flex-wrap p-2 justify-content-between">
                    {
                        cartdata.map((e, i) => {
                            return (
                                <div className="product shadow mb-5 rounded-4 ">
                                    <img src={e.img} alt="" />
                                    <div className="product-content px-2 py-4">
                                        <div className="d-flex justify-content-between ">
                                            <h4>{e.name}</h4>
                                            <h4 className='product-price'>${e.price}</h4>
                                        </div>
                                        <p>{e.shortdescription}</p>
                                        {/* <div className="d-flex justify-content-between px-3">
                                            <h5>{e.category}</h5>
                                            <h5>{e.brand}</h5>
                                        </div> */}
                                        <button className='btn btn-danger mt-3' onClick={() => handleremove(i)}>Remove <FiDelete /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart