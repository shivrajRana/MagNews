import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';
import BlogDetail_V1 from './containers/blog_detail_v1/BlogDetail-V1';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import BlogList from './containers/BlogList/BlogList';
import AboutUs from './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';

class App extends Component {

  componentDidMount(){
    // const entertainment = [
    //   {
    //     title: "This is the default title",
    //     Type: "Music",
    //     catagory:"Entertainment",
    //     content: [
    //         "Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero.",
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.",
    //     ],
    //     imgURL: "images/blog-list-01.jpg",
    //     tages: ["Books", "Testing", "Technology"],
    //     author: "Shivraj Rana",
    //     date: '20/07/1997'
    //   }
    // ]
    // axios.post("https://magnews-f993a.firebaseio.com/all_posts.json").then(res => {

    // })
  }

  render(){
    return(
      <div>
        <Route path="/" exact component={Homepage}/>
        <Route path="/blog_detail" exact component={BlogDetail_V1}/>
        <Route path="/category" exact component={CategoryPage}/>
        <Route path="/blog_list" exact component={BlogList}/>
        <Route path="/about" exact component={AboutUs}/>
        <Route path="/contact" exact component={ContactUs}/>
      </div>
    )
  }
}

export default App;
