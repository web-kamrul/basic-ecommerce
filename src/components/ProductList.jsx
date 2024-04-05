import React, {useEffect, useState} from 'react';
import axios from "axios";
import ValidationHelper from "../utility/ValidationHelper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";

const ProductList = () => {

    let [data,SetData]=useState(null)

    useEffect(() => {
        (async ()=>{
            await CallProductList()
        })()
    }, []);

    const CallProductList=async ()=>{
        let res= await axios.get(`${ValidationHelper.API_BASE_URL}/product-list`)
        let productList=res.data['data']
        SetData(productList);
    }

    return (
        <div>
            {data==null?(<FullScreenLoader/>):(
                <div className="container mt-3">
                    <div className="row">
                        {
                            data.map((item)=>{
                                return (
                                    <div className="col-md-3 p-1">

                                        <div className="card p-3">

                                            <img className="w-100" alt="" src={item['image']}/>

                                            <h5> PRICE: $
                                                {item['discount']===0?(<span>{item['price']}</span>):(
                                                    <span><strike>{<span>{item['price']}</span>}</strike> {<span>{item['discount_price']}</span>}
                                                </span>
                                                )}
                                            </h5>

                                            <p>{item['title']}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;