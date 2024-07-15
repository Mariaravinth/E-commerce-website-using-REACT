import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const LoginRegisterPage = () => {
    const [formType, setFormType] = useState('login');

    const handleLoginClick = () => {
        setFormType('login');
    };

    const handleRegisterClick = () => {
        setFormType('register');
    };

    return (
        <>
            <Header />
            <div className="account-page">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src="images/image1.png" alt="" width="100%" />
                        </div>
                        <div className="col-2">
                            <div className="form-container">
                                <div className="form-btn">
                                    <span onClick={handleLoginClick}>Login</span>
                                    <span onClick={handleRegisterClick}>Register</span>
                                    <hr id="Indicator" className={ formType === 'login' ? 'login' : 'right'} />
                                </div>
                                {formType === 'login' && (
                                    <form id="LoginForm">
                                        <input type="text" placeholder="Username" />
                                        <input type="password" placeholder="Password" />
                                        <button type="submit" className="btn">Login</button>
                                        <Link to="">Forgot Password</Link>
                                    </form>
                                )}
                                {formType === 'register' && (
                                    <form id="RegForm" >
                                        <input type="text" placeholder="Username" />
                                        <input type="email" placeholder="Email" />
                                        <input type="password" placeholder="Password" />
                                        <button type="submit" className="btn">Register</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}

export default LoginRegisterPage