import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <>
            <Header />
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-1.jpg" alt="" />
                                    <div>
                                        <p>Red Printed t-shirt</p>
                                        <small>Price:$50.00</small>
                                        <br />
                                        <Link to="">Remove</Link>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" placeholder="1" onChange={() => { }}/></td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-2.jpg" alt="" />
                                    <div>
                                        <p>Red Printed t-shirt</p>
                                        <small>Price:$75.00</small>
                                        <br />
                                        <Link to="">Remove</Link>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" placeholder="1" onChange={() => { }} /></td>
                            <td>$75.00</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src="images/buy-3.jpg" alt="" />
                                    <div>
                                        <p>Red Printed t-shirt</p>
                                        <small>Price:$75.00</small>
                                        <br />
                                        <Link to="">Remove</Link>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" placeholder="1" onChange={() => { }}/></td>
                            <td>$75.00</td>
                        </tr>
                    </tbody>

                </table>
                <div className="total-price">
                    <table>
                        <tfoot>
                            <tr>
                                <td>Subtotal</td>
                                <td>$200.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$30.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$230.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default CartPage