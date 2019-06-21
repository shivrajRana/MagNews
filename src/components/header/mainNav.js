import React from 'react';
import ItemPost from './itemPost';
import {Link} from 'react-router-dom';

const mainNav = (props) => {
	let count=0;
	// let NewsAll = null;
	let news = [];
	let entertainment = [];
	let	business = [];
	let travel = [];
	let lifestyle = [];
	let video = [];

	if(props.data.news){
		news[0] = props.data.news.newsAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		news[1] = props.data.news.newsEntertainment.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		news[2] = props.data.news.newsFashion.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		news[3] = props.data.news.newsTechnology.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		news[4] = props.data.news.newsLifeStyle.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		news[5] = props.data.news.newsTravel.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}

	if(props.data.entertainment){
		entertainment[0] = props.data.entertainment.EntertainmentAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		entertainment[1] = props.data.entertainment.EntertainmentGame.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		entertainment[2] = props.data.entertainment.EntertainmentCelebrity.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}

	if(props.data.business){
		business[0] = props.data.business.businessAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		business[1] = props.data.business.businessEconomy.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}
	if(props.data.travel){
		travel[0] = props.data.travel.travelAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
		travel[1] = props.data.travel.travelHotels.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}
	if(props.data.lifestyle){
		lifestyle[0] = props.data.lifestyle.lifestyleAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}
	if(props.data.video){
		video[0] = props.data.video.videoAll.map(val => {
			return(
				<ItemPost key={count} val={val}/>
			);
		})
	}
    return (
        <div>
            <div className="wrap-main-nav">
				<div className="main-nav">
					{/* <!-- Menu desktop --> */}
					<nav className="menu-desktop">
						<Link className="logo-stick" to="/">
							<img src="images/posts/post-01.jpg" alt="LOGO"/>
						</Link>

						<ul className="main-menu">

							<li className="mega-menu-item">
								<Link to="category">News</Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#news-0" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#news-1" role="tab">Entertaiment</a>
										<a className="nav-link" data-toggle="pill" href="#news-2" role="tab">Fashion</a>
										<a className="nav-link" data-toggle="pill" href="#news-3" role="tab">Life Style</a>
										<a className="nav-link" data-toggle="pill" href="#news-4" role="tab">Technology</a>
										<a className="nav-link" data-toggle="pill" href="#news-5" role="tab">Travel</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="news-0" role="tabpanel">
											<div className="row">
												{news[0]}
											</div>
										</div>

										<div className="tab-pane" id="news-1" role="tabpanel">
											<div className="row">
												{news[1]}
											</div>
										</div>

										<div className="tab-pane" id="news-2" role="tabpanel">
											<div className="row">
												{news[2]}
											</div>
										</div>

										<div className="tab-pane" id="news-3" role="tabpanel">
											<div className="row">
												{news[3]}
											</div>
										</div>

										<div className="tab-pane" id="news-4" role="tabpanel">
											<div className="row">
												{news[4]}
											</div>
										</div>

										<div className="tab-pane" id="news-5" role="tabpanel">
											<div className="row">
												{news[5]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="mega-menu-item">
								<Link to="category">Entertainment </Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#enter-1" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#enter-2" role="tab">Game</a>
										<a className="nav-link" data-toggle="pill" href="#enter-3" role="tab">Celebrity</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="enter-1" role="tabpanel">
											<div className="row">
												{entertainment[0]}
											</div>
										</div>

										<div className="tab-pane" id="enter-2" role="tabpanel">
											<div className="row">
												{entertainment[1]}
											</div>
										</div>

										<div className="tab-pane" id="enter-3" role="tabpanel">
											<div className="row">
												{entertainment[2]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="mega-menu-item">
								<Link to="category">Business</Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#business-1" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#business-2" role="tab">Economy</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="business-1" role="tabpanel">
											<div className="row">
												{business[0]}
											</div>
										</div>

										<div className="tab-pane" id="business-2" role="tabpanel">
											<div className="row">
												{business[1]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="mega-menu-item">
								<Link to="category">Travel</Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#travel-1" role="tab">All</a>
										<a className="nav-link" data-toggle="pill" href="#travel-2" role="tab">Hotels</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="travel-1" role="tabpanel">
											<div className="row">
												{travel[0]}
											</div>
										</div>

										<div className="tab-pane" id="travel-2" role="tabpanel">
											<div className="row">
												{travel[1]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="mega-menu-item">
								<Link to="category">Life Style</Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#life-1" role="tab">All</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="life-1" role="tabpanel">
											<div className="row">
												{lifestyle[0]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="mega-menu-item">
								<Link to="category">Video</Link>

								<div className="sub-mega-menu">
									<div className="nav flex-column nav-pills" role="tablist">
										<a className="nav-link active" data-toggle="pill" href="#video-1" role="tab">All</a>
									</div>

									<div className="tab-content">
										<div className="tab-pane show active" id="video-1" role="tabpanel">
											<div className="row">
												{video[0]}
											</div>
										</div>
									</div>
								</div>
							</li>

							<li>
								<a href="#">Features</a>
								<ul className="sub-menu">
									<li><Link to="category">Category</Link></li>
									<li><Link to="blog_list">Blog List</Link></li>
									<li><Link to="blog_detail">Blog Detail</Link></li>
									<li><Link to="about">About Us</Link></li>
									<li><Link to="contact">Contact Us</Link></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
        </div>
    )
}

export default mainNav;