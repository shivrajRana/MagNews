import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class postUI extends Component {
    render(){
    return (
        <div>
            <div className="row">
                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* <!-- Item post -->	 */}
                    <div className="m-b-30">
                        <Link to="blog_detail" className="wrap-pic-w hov1 trans-03" onClick={() => this.props.setBlogDetails(this.props.data[0])}>
                            <img src={this.props.data[0].imgURL} alt="IMG"/>
                        </Link>

                        <div className="p-t-20">
                            <h5 className="p-b-5">
                                <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[0])} className="f1-m-3 cl2 hov-cl10 trans-03">
                                    {this.props.data[0].title} 
                                </Link>
                            </h5>

                            <span className="cl8">
                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                    {this.props.data[0].type}
                                </a>

                                <span className="f1-s-3 m-rl-3">
                                    -
                                </span>

                                <span className="f1-s-3">
                                    {this.props.data[0].date}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 p-r-25 p-r-15-sr991">
                    {/* <!-- Item post -->	 */}
                    <div className="flex-wr-sb-s m-b-30">
                        <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[1])} className="size-w-1 wrap-pic-w hov1 trans-03">
                            <img src={this.props.data[1].imgURL} alt="IMG"/>
                        </Link>

                        <div className="size-w-2">
                            <h5 className="p-b-5">
                                <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[1])} className="f1-s-5 cl3 hov-cl10 trans-03">
                                    {this.props.data[1].title}
                                </Link>
                            </h5>

                            <span className="cl8">
                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                    {this.props.data[1].type}
                                </a>

                                <span className="f1-s-3 m-rl-3">
                                    -
                                </span>

                                <span className="f1-s-3">
                                    {this.props.data[1].date}
                                </span>
                            </span>
                        </div>
                    </div>
                    
                    {/* <!-- Item post --> */}
                    <div className="flex-wr-sb-s m-b-30">
                        <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[2])} className="size-w-1 wrap-pic-w hov1 trans-03">
                            <img src={this.props.data[2].imgURL} alt="IMG"/>
                        </Link>

                        <div className="size-w-2">
                            <h5 className="p-b-5">
                                <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[2])} className="f1-s-5 cl3 hov-cl10 trans-03">
                                    {this.props.data[2].title}
                                </Link>
                            </h5>

                            <span className="cl8">
                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                    {this.props.data[2].type}
                                </a>

                                <span className="f1-s-3 m-rl-3">
                                    -
                                </span>

                                <span className="f1-s-3">
                                    {this.props.data[2].date}
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* <!-- Item post --> */}
                    <div className="flex-wr-sb-s m-b-30">
                        <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[3])} className="size-w-1 wrap-pic-w hov1 trans-03">
                            <img src={this.props.data[3].imgURL} alt="IMG"/>
                        </Link>

                        <div className="size-w-2">
                            <h5 className="p-b-5">
                                <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data[3])} className="f1-s-5 cl3 hov-cl10 trans-03">
                                    {this.props.data[3].title}
                                </Link>
                            </h5>

                            <span className="cl8">
                                <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                                    {this.props.data[3].type}
                                </a>

                                <span className="f1-s-3 m-rl-3">
                                    -
                                </span>

                                <span className="f1-s-3">
                                    {this.props.data[3].date}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		setBlogDetails: (data) => dispatch({type: "UPDATE_POST_DETAILS", payload: data})
	}
}

export default connect(null, mapDispatchToProps)(postUI);