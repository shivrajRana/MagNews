import React from 'react';

import MobileMenu from './mobileMenu';
import MainNav from './mainNav';



const Topbar = props => {
    return (
        <div className="animsition">
            <header>
                <div className="container-menu-desktop">
                    <div className="topbar">
                        <div className="content-topbar container h-100">
                            <div className="left-topbar">
                                <span className="left-topbar-item flex-wr-s-c">
                                    <span>
                                        New York, NY
                                    </span>
                                    <img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG"/>
                                    <span>
                                        HI 58° LO 56°
                                    </span>
                                </span>
                                <a href="#" className="left-topbar-item">
                                    About
                                </a>

                                <a href="#" className="left-topbar-item">
                                    Contact
                                </a>

                                <a href="#" className="left-topbar-item">
                                    Sing up
                                </a>

                                <a href="#" className="left-topbar-item">
                                    Log in
                                </a>
                            </div>

                            <div className="right-topbar">
                                <a href="#">
                                    <span className="fab fa-facebook-f"></span>
                                </a>

                                <a href="#">
                                    <span className="fab fa-twitter"></span>
                                </a>

                                <a href="#">
                                    <span className="fab fa-pinterest-p"></span>
                                </a>

                                <a href="#">
                                    <span className="fab fa-vimeo-v"></span>
                                </a>

                                <a href="#">
                                    <span className="fab fa-youtube"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Header Mobile --> */}
                    <div className="wrap-header-mobile">
                        {/* <!-- Logo moblie --> */}
                        <div className="logo-mobile">
                            <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                        </div>

                        {/* <!-- Button show menu --> */}
                        <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <MobileMenu/>
                <MainNav data={props.data}/>
            </header>
        </div>
    )
}

export default Topbar;