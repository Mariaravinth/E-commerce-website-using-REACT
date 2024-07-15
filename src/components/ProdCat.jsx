import React from 'react'
import FeatProd from './FeatProd'

const ProdCat = () => {
    return (
        <div className="categories">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <img src="images/category-1.jpg" />
                    </div>
                    <div className="col-3">
                        <img src="images/category-2.jpg" />
                    </div>
                    <div className="col-3">
                        <img src="images/category-3.jpg" />
                    </div>
                </div>
            </div>
            <FeatProd />
        </div>
    )
}

export default ProdCat