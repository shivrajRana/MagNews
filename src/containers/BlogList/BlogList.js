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
            // this.setState({posts: Object.values(res.data)[0]});
            console.log(Object.values(res.data)[0]);    
        });

        axios.get("http://192.168.1.8/drupal8/hikers/popular-posts").then(res => {
            console.log(res.data);
            const resData = [];
            res.data.forEach(element => {
                let obj = {
                    author: element.field_author_name[0].value,
                    content: [element.body[0].value],
                    tages: ['books'],
                    date: element.field_news_date[0].value,
                    imgURL: element.field_news_image[0].url,
                    title: element.title[0].value,
                    type: element.type[0].target_id
                };
                resData.push(obj);

            });
            console.log(resData);
            this.setState({ posts: resData});
        }).catch(err => console.log(err));
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