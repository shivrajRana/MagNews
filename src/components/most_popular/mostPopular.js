import React, { Component } from 'react';
import axios from 'axios';

class mostPopular extends Component {
    state = {
        mostPopular: null
    }

    componentWillMount(){
        axios.get("https://magnews-f993a.firebaseio.com/most-popular.json").then(res => {
            this.setState({mostPopular: Object.values(res.data)[0]});
        });
    }

    render() {
        let count = 1;
        let renderList = null;
        if(this.state.mostPopular){
            renderList = this.state.mostPopular.map(val => {
                return (
                    <li className="flex-wr-sb-s p-b-22" key={count}>
                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                            {count++}
                        </div>

                        <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                            {val}
                        </a>
                    </li>
                )
            })
        }else{
            renderList = null;
        }
        return (
            <div>
                <div className="how2 how2-cl4 flex-s-c">
                    <h3 className="f1-m-2 cl3 tab01-title">
                        Most Popular
                    </h3>
                </div>

                <ul className="p-t-35">
                    {renderList}
                </ul>
            </div>
        )
    }
}

export default mostPopular;