import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class featurePost extends Component {
    render(){
        return (
            <div>
                <section className="bg0">
                    <div className="container">
                        <div className="row m-rl--1">   
                            <div className="col-md-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-3 how1 pos-relative" style={{backgroundImage: 'url('+ this.props.featurePost[0].imgURL +')'}}>
                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[0])} className="dis-block how1-child1 trans-03"></Link>

                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            {this.props.featurePost[0].type}
                                        </a>

                                        <h3 className="how1-child2 m-t-14 m-b-10">
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[0])} className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                                {this.props.featurePost[0].title}
                                            </Link>
                                        </h3>

                                        <span className="how1-child2">
                                            <span className="f1-s-4 cl11">
                                                {this.props.featurePost[0].author}
                                            </span>

                                            <span className="f1-s-3 cl11 m-rl-3">
                                                -
                                            </span>

                                            <span className="f1-s-3 cl11">
                                                {this.props.featurePost[0].date}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 p-rl-1">
                                <div className="row m-rl--1">
                                    <div className="col-12 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-4 how1 pos-relative" style={{backgroundImage: 'url('+ this.props.featurePost[1].imgURL +')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[1])} className="dis-block how1-child1 trans-03"></Link>

                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-24">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                    {this.props.featurePost[1].type}
                                                </a>

                                                <h3 className="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[1])} className="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
                                                        {this.props.featurePost[1].title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-5 how1 pos-relative" style={{backgroundImage: 'url('+ this.props.featurePost[2].imgURL +')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[2])} className="dis-block how1-child1 trans-03"></Link>

                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                {this.props.featurePost[2].type}
                                                </a>

                                                <h3 className="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[2])} className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.featurePost[2].title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-rl-1 p-b-2">
                                        <div className="bg-img1 size-a-5 how1 pos-relative" style={{backgroundImage: 'url('+ this.props.featurePost[3].imgURL +')'}}>
                                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[3])} className="dis-block how1-child1 trans-03"></Link>

                                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                                <a href="#" className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                                {this.props.featurePost[3].type}
                                                </a>

                                                <h3 className="how1-child2 m-t-14">
                                                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.featurePost[3])} className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                        {this.props.featurePost[3].title}
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