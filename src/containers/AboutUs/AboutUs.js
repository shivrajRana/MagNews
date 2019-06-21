import React, { Component } from 'react';
import axios from 'axios';

import Content from '../../components/aboutUs/content';
import Header from '../Header/Header';
import Footer from '../Footer/footer';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

class AboutUs extends Component {

    state = {
        type: "About",
        popularPost: null
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
                <Breadcrumb type={this.state.type}/>
                {this.state.popularPost? <Content popularPost={this.state.popularPost}/>: null}
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;