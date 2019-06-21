import React, { Component } from 'react';
import Axios from 'axios';

import Header from '../Header/Header';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import FeaturePost from '../../components/category/featurePost';
import Post from '../../components/category/post';
import Footer from '../Footer/footer';



class CategoryPage extends Component {
    state = {
        breadcrumbTitle: "Sports",
        type: "Category",
        // feature post
        featurePost: null,
        posts: null
    }

    componentDidMount() {
        // Feature post logic
        // const data = {
        //     heading: "Sports",
        //     posts: [
        //         {
                    // title:	"Donec metus orci, malesuada et lectus vitae",
                    // date: 'Feb 18',
                    // imgURL: "images/entertaiment-04.jpg",
                    // author: "Thoams elbert eision",
                    // type: 'Game'
        //         }
        //     ]
        // };
        Axios.get("https://magnews-f993a.firebaseio.com/category.json").then(res => {
            // console.log(Object.values(res.data)[0]);
            this.setState({featurePost: Object.values(res.data)[0]});
        }).catch(err => console.log(err));

        // Post logic
        // const data = [
        //     {
        //         title:	"Donec metus orci, malesuada et lectus vitae",
        //         imgURL: "images/entertaiment-04.jpg",
        //         author: "Thoams elbert eision",
        //         date: 'Feb 18',
        //         type: 'Game'
        //     },
        // ];

        Axios.get("https://magnews-f993a.firebaseio.com/category.json").then(res=> {
            this.setState({posts: Object.values(res.data)[1].slice(0,12)});
        });

    }
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb title={this.state.breadcrumbTitle} type={this.state.type}/>
                {this.state.featurePost? <FeaturePost data={this.state.featurePost}/>: null}
                {this.state.posts? <Post posts = {this.state.posts}/> : null}
                <Footer/>
            </div>
        )
    }
}

export default CategoryPage;