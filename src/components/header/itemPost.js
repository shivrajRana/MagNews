import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class itemPost extends Component {
	render(){
		return (
			<div className="col-3">
				{/* <!-- Item post -->	 */}
				<div>
					<Link onClick={() => this.props.setBlogDetails(this.props.val)} to="blog_detail" className="wrap-pic-w hov1 trans-03">
						<img src={this.props.val.imgURL} alt="IMG-Test"/>
					</Link>

					<div className="p-t-10">
						<h5 className="p-b-5">
							<Link to="blog_detail" onClick={() => this.props.setBlogDetails(this.props.val)} className="f1-s-5 cl3 hov-cl10 trans-03">
								{this.props.val.title}
							</Link>
						</h5>

						<span className="cl8">
							<Link to="#" className="f1-s-6 cl8 hov-cl10 trans-03">
								{this.props.val.type}
							</Link>

							<span className="f1-s-3 m-rl-3">
								-
							</span>

							<span className="f1-s-3">
								Feb 18
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

export default connect(null, mapDispatchToProps)(itemPost);