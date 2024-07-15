import React from 'react'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone</p>
                    <div className="app-logo">
                        <img src="images/play-store.png"/>
                        <img src="images/app-store.png"/>
                    </div>
                </div>
                <div className="footer-col-2">
                    <img src="images/logo-white.png"/>
                    <p>Our Purpose is to Sustainability Make the Pleasure
                        and Benefits of Sports Accessible to the
                        Many.
                    </p>
                </div>
                <div className="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affilate</li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3>Fllow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="copyright">Copyright 2024-Easy Tutorials</p>
        </div>
    </div>
  )
}

export default Footer