import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/footer';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import Content from '../../components/blogList/content';
import axios from 'axios';

class BlogList extends Component {

    state = {
        type: "Blog",   //breadcrumb state
        posts: null,   // content state
    }

    componentDidMount(){
        // const data = [
        //     {
        //         title: "Robot lorem ipsum dolor sit amet consectetur",
        //         date: "Feb 18 ",
        //         author: "John Alvarado",
        //         content: "Duis eu felis id tortor congue consequat. Sed vitae vestibulum enim, et pharetra magna...",
        //         imgURL: "images/posts/post-43.jpg"
        //     },
        // ]
        axios.get("https://magnews-f993a.firebaseio.com/blog-list.json").then(res => {
                this.setState({posts: Object.values(res.data)[0]});    
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb type={this.state.type}/>
                {this.state.posts? <Content posts={this.state.posts}/>: null}
                <Footer/>
            </div>
        )
    }
}

export default BlogList;