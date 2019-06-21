import React from 'react'
import PostUI from './postUI';
import {Link} from 'react-router-dom'
import MostPopular from '../most_popular/mostPopular';

const post = (props) => {
    return (
        <div>
            <section className="bg0 p-t-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="p-b-20">
                                {/* <!-- Entertainment --> */}
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        {/* <!-- Brand tab --> */}
                                        <h3 className="f1-m-2 cl12 tab01-title">
                                            Entertainment
                                        </h3>

                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#tab1-1" role="tab">All</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab1-2" role="tab">Celebrity</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab1-3" role="tab">Movies</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab1-4" role="tab">Music</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab1-5" role="tab">Games</a>
                                            </li>

                                            <li className="nav-item-more dropdown dis-none">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </a>

                                                <ul className="dropdown-menu">
                                                    
                                                </ul>
                                            </li>
                                        </ul>

                                        {/* <!--  --> */}
                                        <Link to="category" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                            View all
                                            <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                        </Link>
                                    </div>
                                        

                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content p-t-35">
                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                                            <PostUI data={props.entertainment.entertainmentAll}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                                            <PostUI data={props.entertainment.entertainmentCelebrity}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                                            <PostUI data={props.entertainment.entertainmentMovies}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                                            <PostUI data={props.entertainment.entertainmentMusic}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                                            <PostUI data={props.entertainment.entertainmentGames}/>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Business --> */}
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl2 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        {/* <!-- Brand tab --> */}
                                        <h3 className="f1-m-2 cl13 tab01-title">
                                            Business
                                        </h3>

                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#tab2-1" role="tab">All</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab2-2" role="tab">Finance</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab2-3" role="tab">Money & Markets</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab2-4" role="tab">Small Business</a>
                                            </li>

                                            <li className="nav-item-more dropdown dis-none">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </a>

                                                <ul className="dropdown-menu">
                                                    
                                                </ul>
                                            </li>
                                        </ul>

                                        {/* <!--  --> */}
                                        <Link to="category" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                            View all
                                            <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                        </Link>
                                    </div>
                                        

                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content p-t-35">
                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade show active" id="tab2-1" role="tabpanel">
                                            <PostUI data={props.business.businessAll}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
                                            <PostUI data={props.business.businessFinance}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
                                            <PostUI data={props.business.businessMoneyAndMarkets}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab2-4" role="tabpanel">
                                            <PostUI data={props.business.businessSmallBusiness}/>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Travel --> */}
                                <div className="tab01 p-b-20">
                                    <div className="tab01-head how2 how2-cl3 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                                        {/* <!-- Brand tab --> */}
                                        <h3 className="f1-m-2 cl14 tab01-title">
                                            Travel
                                        </h3>

                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#tab3-1" role="tab">All</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab3-2" role="tab">Hotels</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab3-3" role="tab">Flight</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab3-4" role="tab">Beachs</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#tab3-5" role="tab">Culture</a>
                                            </li>

                                            <li className="nav-item-more dropdown dis-none">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                </a>

                                                <ul className="dropdown-menu">
                                                    
                                                </ul>
                                            </li>
                                        </ul>

                                        {/* <!--  --> */}
                                        <Link to="category" className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                                            View all
                                            <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                        </Link>
                                    </div>
                                        

                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content p-t-35">
                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade show active" id="tab3-1" role="tabpanel">
                                            <PostUI data={props.travel.travelAll}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab3-2" role="tabpanel">
                                            <PostUI data={props.travel.travelHotels}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab3-3" role="tabpanel">
                                            <PostUI data={props.travel.travelFlight}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab3-4" role="tabpanel">
                                            <PostUI data={props.travel.travelBeachs}/>
                                        </div>

                                        {/* <!-- - --> */}
                                        <div className="tab-pane fade" id="tab3-5" role="tabpanel">
                                            <PostUI data={props.travel.travelCulture}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10 col-lg-4">
                            <div className="p-l-10 p-rl-0-sr991 p-b-20">
                                {/* <!--  Most Popular  --> */}
                                <MostPopular/>

                                {/* <!--  --> */}
                                <div className="flex-c-s p-t-8">
                                    <a href="#">
                                        <img className="max-w-full" src="images/banner-02.jpg" alt="IMG"/>
                                    </a>
                                </div>
                                
                                {/* <!--  --> */}
                                <div className="p-t-50">
                                    <div className="how2 how2-cl4 flex-s-c">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Stay Connected
                                        </h3>
                                    </div>

                                    <ul className="p-t-35">
                                        <li className="flex-wr-sb-c p-b-20">
                                            <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
                                                <span className="fab fa-facebook-f"></span>
                                            </a>

                                            <div className="size-w-3 flex-wr-sb-c">
                                                <span className="f1-s-8 cl3 p-r-20">
                                                    6879 Fans
                                                </span>

                                                <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                    Like
                                                </a>
                                            </div>
                                        </li>

                                        <li className="flex-wr-sb-c p-b-20">
                                            <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
                                                <span className="fab fa-twitter"></span>
                                            </a>

                                            <div className="size-w-3 flex-wr-sb-c">
                                                <span className="f1-s-8 cl3 p-r-20">
                                                    568 Followers
                                                </span>

                                                <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                    Follow
                                                </a>
                                            </div>
                                        </li>

                                        <li className="flex-wr-sb-c p-b-20">
                                            <a href="#" className="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0">
                                                <span className="fab fa-youtube"></span>
                                            </a>

                                            <div className="size-w-3 flex-wr-sb-c">
                                                <span className="f1-s-8 cl3 p-r-20">
                                                    5039 Subscribers
                                                </span>

                                                <a href="#" className="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
                                                    Subscribe
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Banner --> */}
            <div className="container">
                <div className="flex-c-c">
                    <a href="#">
                        <img className="max-w-full" src="images/banner-01.jpg" alt="IMG"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default post;