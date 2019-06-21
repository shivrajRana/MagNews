import React, { Component } from 'react';
import axios from 'axios';

import Broadcrumb from '../../components/breadcrumb/breadcrumb'; 
import Content from '../../components/BlogDetail_v2/content';
import Footer from '../Footer/footer';
import Header from '../Header/Header';

class BlogDetail extends Component {
    state = {
        breadcrumbTitle: "Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque",
        type: "Category",
        // content states
        articleData: null,
    }

    componentDidMount() {
        
        // Content logic
        // const data = {
        //     title: "Nulla non interdum metus non laoreet nisi tellus eget aliquam lorem pellentesque",
        //     author: "John Alvarado",
        //     type: "Technology",
        //     imgURL: "images/blog-list-01.jpg",
        //     content: [
        //         "Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero.",
        //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.",
        //         "Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate ",
        //     ],
        //     tages: ["Stylesheet", "Crafts", "Books"],     
        // }
        axios.get("https://magnews-f993a.firebaseio.com/article-content.json").then(res => {
            this.setState({articleData: Object.values(res.data)[0]});    
        });
        
    }

    render() {
        return (
            <div>
                <Header/>
                <Broadcrumb title={this.state.breadcrumbTitle} type={this.state.type}/>
                {this.state.articleData? <Content data={this.state.articleData}/>: null}
                <Footer/>
            </div>
        )
    }
}

export default BlogDetail;