import React from 'react'
import { Link } from 'react-router-dom'

const FeatProd = () => {
  return (
    <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                <div className="col-4">
                    <Link to="/product-details"><img src="images/product-1.jpg" alt=''/>
                    </Link>
                    <Link to="/product-details">
                        <h4>Red Printed
                            T-Shirt</h4>
                    </Link>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-2.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-3.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-4.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
            <h2 className="title">Latest Products</h2>
            <div className="row">
                <div className="col-4">
                    <img src="images/product-5.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-6.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-7.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-8.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src="images/product-9.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-10.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-11.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-stroke"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div className="col-4">
                    <img src="images/product-12.jpg" alt=""/>
                    <h4>Red Printed T-Shirt</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <p>$50.00</p>
                </div>
            </div>
        </div>
  )
}

export default FeatProd