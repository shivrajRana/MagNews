import React, { Component } from 'react';
import axios from 'axios';
import Topbar from '../../components/header/topbar';

class Header extends Component {
    state = {
        // header states
        news:null,
        entertainment: null,
        business: null,
        travel: null,
        lifestyle: null,
        video: null,
    }

    componentDidMount() {
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
    }
    render() {
        return (
            <div>
                <Topbar data={this.state} />
            </div>
        )
    }
}

export default Header;