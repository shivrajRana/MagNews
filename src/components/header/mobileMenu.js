import React from 'react';
import {Link} from 'react-router-dom'; 

const mobileMenu = () => {
    return (
        <div>
			<div className="menu-mobile">
				<ul className="topbar-mobile">
					<li className="left-topbar">
						<span className="left-topbar-item flex-wr-s-c">
							<span>
								New York, NY
							</span>

							<img className="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG" />

							<span>
								HI 58° LO 56°
							</span>
						</span>
					</li>

					<li className="left-topbar">
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
					</li>

					<li className="right-topbar">
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
					</li>
				</ul>

				<ul className="main-menu-m">
					<li>
						<a href="index.html">Home</a>
						<ul className="sub-menu-m">
							<li><a href="index.html">Homepage v1</a></li>
							<li><a href="home-02.html">Homepage v2</a></li>
							<li><a href="home-03.html">Homepage v3</a></li>
						</ul>

						<span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
					</li>

					<li>
						<Link to="category_page">News</Link>
					</li>

					<li>
						<Link to="category_page">Entertainment </Link>
					</li>

					<li>
						<Link to="category_page">Business</Link>
					</li>

					<li>
						<Link to="category_page">Travel</Link>
					</li>

					<li>
						<Link to="category_page">Life Style</Link>
					</li>

					<li>
						<Link to="category_page">Video</Link>
					</li>

					<li>
						<a href="#">Features</a>
						<ul className="sub-menu-m">
							<li><Link to="category_page">Category</Link></li>
							<li><Link to="blog_list.html">Blog List</Link></li>
							<li><Link to="blog_detail">Blog Detail</Link></li>
							<li><Link to="about">About Us</Link></li>
							<li><Link to="contact">Contact Us</Link></li>
						</ul>

						<span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
					</li>
				</ul>
			</div>
			
			
			<div className="wrap-logo container">
				{/* Logo desktop*/}
				<div className="logo">
					<Link to="/"><img src="images/icons/logo-01.png" alt="LOGO" /></Link>
				</div>	

				{/* Banner */}
				<div className="banner-header">
					<a href="#"><img src="images/banner-01.jpg" alt="IMG" /></a>
				</div>
            </div> 
        </div>
    )
}

export default mobileMenu;