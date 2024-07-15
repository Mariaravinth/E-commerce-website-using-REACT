import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src="images/exclusive.png" alt=""/>
                    </div>
                    <div className="col-2">
                        <p>Exclusive available on SMA-cart</p>
                        <h1>Smart Band 4</h1>
                        <small>The Mi Smart Band 4 features a 39.9% larger(than
                            Mi Band 3)AMOLED color full-touch
                            display with adjustable brightness, so everything is
                            clear as can be.
                        </small>
                        <br />
                        <Link to="" className="btn">Buy Now <i className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer