import React, {Component} from 'react';
import MostPopular from '../most_popular/mostPopular';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class content extends Component {
    render(){
        const renderPost = this.props.posts.map(val => {
            let showContent = val.content.slice(0,5);
            console.log(showContent);
            return (
                <div class="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(val)} class="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25">
                        <img src={val.imgURL} alt="IMG"/>
                    </Link>

                    <div class="size-w-9 w-full-sr575 m-b-25">
                        <h5 class="p-b-12">
                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(val)} class="f1-l-1 cl2 hov-cl10 trans-03 respon2">
                                {val.title} 
                            </Link>
                        </h5>

                        <div class="cl8 p-b-18">
                            <a href="#" class="f1-s-4 cl8 hov-cl10 trans-03">
                                by {val.author}
                            </a>

                            <span class="f1-s-3 m-rl-3">
                                -
                            </span>

                            <span class="f1-s-3">
                                {val.date}
                            </span>
                        </div>

                        <p class="f1-s-1 cl6 p-b-24">
                            {showContent}
                        </p>

                        <Link to="blog_detail" class="f1-s-1 cl9 hov-cl10 trans-03">
                            Read More
                            <i class="m-l-2 fa fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {/* <!-- Page heading --> */}
                <div class="container p-t-4 p-b-40">
                    <h2 class="f1-l-1 cl2">
                        Blog List
                    </h2>
                </div>

                {/* <!-- Post --> */}
                <section class="bg0 p-b-55">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-8 p-b-80">
                                <div class="p-r-10 p-r-0-sr991">
                                    <div class="m-t--40 p-b-40">
                                        {renderPost}
                                    </div>

                                    <a href="#" class="flex-c-c size-a-13 bo-all-1 bocl11 f1-m-6 cl6 hov-btn1 trans-03">
                                        Load More
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-10 col-lg-4 p-b-80">
                                <div class="p-l-10 p-rl-0-sr991">							
                                    {/* <!-- Subscribe --> */}
                                    <div class="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                                        <h5 class="f1-m-5 cl0 p-b-10">
                                            Subscribe
                                        </h5>

                                        <p class="f1-s-1 cl0 p-b-25">
                                            Get all latest content delivered to your email a few times a month.
                                        </p>

                                        <form class="size-a-9 pos-relative">
                                            <input class="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email"/>

                                            <button class="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                                <i class="fa fa-arrow-right"></i>
                                            </button>
                                        </form>
                                    </div>

                                    {/* <!-- Most Popular --> */}
                                    <MostPopular/>

                                    {/* <!--  --> */}
                                    <div class="flex-c-s p-b-50">
                                        <a href="#">
                                            <img class="max-w-full" src="images/banner-02.jpg" alt="IMG" />
                                        </a>
                                    </div>
                                    
                                    {/* <!-- Tag --> */}
                                    <div>
                                        <div class="how2 how2-cl4 flex-s-c m-b-30">
                                            <h3 class="f1-m-2 cl3 tab01-title">
                                                Tags
                                            </h3>
                                        </div>

                                        <div class="flex-wr-s-s m-rl--5">
                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Fashion
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Lifestyle
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Denim
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Streetstyle
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Crafts
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Magazine
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                News
                                            </a>

                                            <a href="#" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                                Blogs
                                            </a>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		setBlogDetails: (data) => dispatch({type: "UPDATE_POST_DETAILS", payload: data})
	}
}

export default connect(null, mapDispatchToProps)(content);