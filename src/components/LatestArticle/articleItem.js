import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class articleItem extends Component{
    render(){
        return (
            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                {/* <!-- Item latest -->	 */}
                <div className="m-b-45">
                    <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data)} className="wrap-pic-w hov1 trans-03">
                        <img src={this.props.data.imgURL} alt="IMG"/>
                    </Link>

                    <div className="p-t-16">
                        <h5 className="p-b-5">
                            <Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.data)} className="f1-m-3 cl2 hov-cl10 trans-03">
                                {this.props.data.title} 
                            </Link>
                        </h5>

                        <span className="cl8">
                            <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                {this.props.data.author}
                            </a>

                            <span className="f1-s-3 m-rl-3">
                                -
                            </span>

                            <span className="f1-s-3">
                                {this.props.data.date}
                            </span>
                        </span>
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

export default connect(null,mapDispatchToProps)(articleItem);