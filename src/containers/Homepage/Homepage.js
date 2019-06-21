import React, { Component } from 'react';
import axios from 'axios';

import Topbar from '../../components/header/topbar';
import Headline from '../../components/headline/headline';
import FeaturePost from '../../Feature Post/featurePost';
import Post from '../../components/Post/post';
import LatestArticle from '../../components/LatestArticle/latestArticle';
import Footer from '../Footer/footer';

class Homepage extends Component {
    state = {
        news:null,
        entertainment: null,
        business: null,
        travel: null,
        lifestyle: null,
        video: null,
        featurePost: null,
        // post states
        postBusiness:null,
        postTravel:null,
        postEntertainment: null,
        latestArticle: null,
        featuredVideo: null
    }

    componentDidMount(){
        // const data = [
        //         {
        //         title:	"Donec metus orci, malesuada et lectus vitae",
        //         date: 'Feb 18',
        //         imgURL: "images/blog-list-06.jpg",
        //         author: "Thoams elbert eision",
        //         videoURL: 'images/latest-01.jpg'
        //         }
        //     ];
        axios.get("https://magnews-f993a.firebaseio.com/news.json").then(res => {
            // console.log(Object.values(res.data)[0].newsAll);
            this.setState({
                news: Object.values(res.data)[0], 
                entertainment: Object.values(res.data)[1],
                business: Object.values(res.data)[2],
                travel: Object.values(res.data)[3],
                lifestyle: Object.values(res.data)[4],
                video: Object.values(res.data)[5]
            })
        }).catch(err => console.log(err));

        // Feature Post logic

        axios.get("https://magnews-f993a.firebaseio.com/feature_post.json").then(res => {
            this.setState({ featurePost: Object.values(res.data)[0]})
            // console.log(Object.values(res.data)[0]);
        })

        // Post Logic 
        axios.get("https://magnews-f993a.firebaseio.com/post.json").then(res => {
            // console.log(Object.values(res.data)[0]);
            this.setState({
            postBusiness: Object.values(res.data)[0], 
            postEntertainment: Object.values(res.data)[1],
            postTravel: Object.values(res.data)[2],
            })
        }).catch(err => console.log(err));

        // Latest Article logic
        axios.get("https://magnews-f993a.firebaseio.com/latest.json").then(res=> {
            this.setState({latestArticle :Object.values(res.data)[0]});
        }).catch(err => console.log(err));

        // Features Video logic
        axios.get("https://magnews-f993a.firebaseio.com/latest.json").then(res => {
            this.setState({featuredVideo :Object.values(res.data)[1]});
        }).catch(err => console.log(err));
       
    }
        render(){
        return (
            <div className="App">
            <Topbar data={this.state} />
            <Headline/>
            {this.state.featurePost?<FeaturePost featurePost={this.state.featurePost}/>: null}
            {this.state.postBusiness && this.state.postEntertainment && this.state.postTravel ? <Post  travel={this.state.postTravel} business={this.state.postBusiness} entertainment={this.state.postEntertainment}/>: null}
            {this.state.latestArticle && this.state.featuredVideo ? <LatestArticle latestArticle={this.state.latestArticle} featuredVideo={this.state.featuredVideo[0]}/>: null}
            <Footer/>
            </div>
        );
    }
}

export default Homepage;