import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Broadcrumb from '../../components/breadcrumb/breadcrumb';
import Container from '../../components/BlogDetail_v1/container';
import Header from '../Header/Header';
import Footer from '../Footer/footer';

class BlogDetail extends Component {
    state = {
        featurePost: null,
        breadcrumbTitle: "Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque",
        type: "Blog",
        // content states
        sidebarData: null,
        // comment states
        comment: '',
        name: '',
        email: '',
        website: ''
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    componentDidMount() {
        // sidebar logic
        axios.get("https://magnews-f993a.firebaseio.com/post.json").then(res => {
            this.setState({sidebarData:{popularPost: Object.values(res.data)[1].entertainmentAll}});
            console.log(this.state.sidebarData);
        });
    }

    render() {
        return (
            <div style={{margin:'0px', padding:'0px'}}>
                <Header/>
                <Broadcrumb title={this.state.breadcrumbTitle} type={this.state.type}/>
                {this.state.sidebarData? 
                    <Container updatedBlogDetails={this.props.updatedBlogDetails} 
                        changeHandler={this.changeHandler} submitHandler={this.submitHandler} 
                        sidebarData={this.state.sidebarData} 
                        commentState={this.state}/>
                    : null
                }
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        updatedBlogDetails: state.postDetails
    }
}

export default connect(mapStateToProps)(BlogDetail);