import React from 'react'
import RelatedProd from '../components/RelatedProd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    const handleImageClick = (index) => {
        const productImg = document.getElementById('ProductImg');
        const smallImgs = document.getElementsByClassName('small-img');
        if (productImg && smallImgs[index]) {
            productImg.src = smallImgs[index].src;
        }
    };
    return (
        <>
        <Header/>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src="images/gallery-1.jpg" width="100%" id="ProductImg" alt="" />

                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src="images/gallery-1.jpg" width="100%" className="small-img" alt="" onClick={() => handleImageClick(0)}/>
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-2.jpg" width="100%" className="small-img" alt="" onClick={() => handleImageClick(1)}/>
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-3.jpg" width="100%" className="small-img" alt="" onClick={() => handleImageClick(2)}/>
                            </div>
                            <div className="small-img-col">
                                <img src="images/gallery-4.jpg" width="100%" className="small-img" alt="" onClick={() => handleImageClick(3)}/>
                            </div>
                        </div>

                    </div>
                    <div className="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>Red Printed T-Shirt by HRX</h1>
                        <h4>$50.00</h4>
                        <select onChange={()=>{}}>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>Large</option>
                            <option>Medium</option>
                            <option>Small</option>
                        </select>
                        <input type="number" placeholder="1" onChange={()=>{}}/>
                        <Link to="/cart" className="btn">Add to Cart</Link>
                        <h3>Product Details<i className="fa fa-indent"></i></h3>
                        <br />
                        <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of
                            shorts for your morning workout or a denims for an evening out with the guys</p>
                    </div>
                </div>
            </div>
            <RelatedProd />
            <Footer />
        </>
    )
}

export default ProductDetails