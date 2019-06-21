import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class featurePost extends Component {
    render(){
        return (
            <div>
                {/* <!-- Page heading --> */}
                <div class="container p-t-4 p-b-40">
                    <h2 class="f1-l-1 cl2">
                        {this.props.data.heading}
                    </h2>
                </div>
                    
                {/* <!-- Feature post --> */}
                <section class="bg0">
                    <div class="container">
                        <div class="row m-rl--1">
                            <div class="col-md-6 p-rl-1 p-b-2">
                                <div class="bg-img1 size-a-3 how1 pos-relative" style={{backgroundImage: 'Url('+this.props.data.posts[0].imgURL+')'}}>
                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[0])} class="dis-block how1-child1 trans-03"></Link>

                                    <div class="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            {this.props.data.posts[0].type}
                                        </a>

                                        <h3 class="how1-child2 m-t-14 m-b-10">
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[0])} class="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                                {this.props.data.posts[0].title}
                                            </Link>
                                        </h3>

                                        <span class="how1-child2">
                                            <span class="f1-s-4 cl11">
                                                {this.props.data.posts[0].author}
                                            </span>

                                            <span class="f1-s-3 cl11 m-rl-3">
                                                -
                                            </span>

                                            <span class="f1-s-3 cl11">
                                                {this.props.data.posts[0].date}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 p-rl-1">
                                <div class="row m-rl--1">
                                    <div class="col-sm-6 p-rl-1 p-b-2">
                                        <div class="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: 'Url('+this.props.data.posts[1].imgURL+')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[1])} class="dis-block how1-child1 trans-03"></Link>

                                            <div class="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                {this.props.data.posts[1].type}
                                                </a>

                                                <h3 class="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[1])} class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.data.posts[1].title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 p-rl-1 p-b-2">
                                        <div class="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: 'Url('+this.props.data.posts[2].imgURL+')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[2])} class="dis-block how1-child1 trans-03"></Link>

                                            <div class="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                {this.props.data.posts[2].type}
                                                </a>

                                                <h3 class="how1-child2 m-t-14">
                                                    <Link Link="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[2])} class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.data.posts[2].title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 p-rl-1 p-b-2">
                                        <div class="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: 'Url('+this.props.data.posts[3].imgURL+')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[3])} class="dis-block how1-child1 trans-03"></Link>

                                            <div class="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    {this.props.data.posts[3].type}
                                                </a>

                                                <h3 class="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[3])} class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.data.posts[3].title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 p-rl-1 p-b-2">
                                        <div class="bg-img1 size-a-14 how1 pos-relative" style={{backgroundImage: 'Url('+this.props.data.posts[4].imgURL+')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[4])} class="dis-block how1-child1 trans-03"></Link>

                                            <div class="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    {this.props.data.posts[4].type}
                                                </a>

                                                <h3 class="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data.posts[4 ])} class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.data.posts[4].title}
                                                    </Link>
                                                </h3>
                                            </div>
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

export default connect(null, mapDispatchToProps)(featurePost);