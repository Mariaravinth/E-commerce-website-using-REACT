import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProdCat from '../components/ProdCat'
import Offer from '../components/Offer'
import Testimonial from '../components/Testimonial'
import Brands from '../components/Brands'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div className="header">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h1>Give Your Workout <br />A new style</h1>
                            <p>Success isn't always about greatness.It's about
                                consistency.Consistent<br />hard work gains
                                success.Greatness will come</p>
                            <Link to="" className="btn">Explore Now <i className="fa fa-arrow-right"></i></Link>
                        </div>
                        <div className="col-2">
                            <img src="images/image1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <ProdCat />
            <Offer />
            <Testimonial />
            <Brands />
            <Footer />
        </>
    )
}

export default HomePage