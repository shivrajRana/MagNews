import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/footer';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import Content from '../../components/contactUs/content';

class ContactUs extends Component {
    state = {
        type: "About",
        popularPost: null,
        // form states
        name: '',
        email: '',
        website: '',
        msg: '',
    }

    changeHandler = (event) =>{
        this.setState({[event.name]: event.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    componentDidMount(){
        axios.get("https://magnews-f993a.firebaseio.com/post.json").then(res => {
            this.setState({popularPost: Object.values(res.data)[1].entertainmentAll});
        });
    }
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb type="Contact Us"/>
                {this.state.popularPost? <Content data={this.state} submitHandler={this.submitHandler} changeHandler={this.changeHandler} popularPost={this.state.popularPost}/>: null}
                <Footer/>
            </div>
        )
    }
}

export default ContactUs;