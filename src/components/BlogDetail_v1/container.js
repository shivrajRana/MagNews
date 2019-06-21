import React from 'react';
import Content from './content';
import Sidebar from './sidebar';

const container = (props) => {
    return (
        <div>
            <section class="bg0 p-b-140 p-t-10">
                <div class="container">
                    <div class="row justify-content-center">
                        <Content updatedBlogDetails={props.updatedBlogDetails} changeHandler={props.changeHandler} submitHandler={props.submitHandler} commentState={props.commentState}/>
                        <Sidebar data = {props.sidebarData}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default container;
