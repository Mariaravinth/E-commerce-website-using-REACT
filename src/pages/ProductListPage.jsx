import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ProductListPage = () => {
    return (
        <>
            <Header />
            <div className="small-container">
                <div className="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default Shorting</option>
                        <option>Short by price</option>
                        <option>Short by popularity</option>
                        <option>Short by rating</option>
                        <option>Short by sale</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Link to="/product-details">
                            <img src="images/product-1.jpg" alt=''/>
                        </Link>
                        <Link to="/product-details"><h4>Red Printed
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
                        <img src="images/product-2.jpg" alt="" />
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
                        <img src="images/product-3.jpg" alt="" />
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
                        <img src="images/product-4.jpg" alt="" />
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
                        <img src="images/product-5.jpg" alt="" />
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
                        <img src="images/product-6.jpg" alt="" />
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
                        <img src="images/product-7.jpg" alt="" />
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
                        <img src="images/product-8.jpg" alt="" />
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
                        <img src="images/product-9.jpg" alt="" />
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
                        <img src="images/product-10.jpg" alt="" />
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
                        <img src="images/product-11.jpg" alt="" />
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
                        <img src="images/product-12.jpg" alt="" />
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
                <div className="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594</span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListPage