import React from 'react'

const breadcrumb = (props) => {
    return (
        <div class="container">
            <div class="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div class="f2-s-1 p-r-30 m-tb-6">
                    <a href="index.html" class="breadcrumb-item f1-s-3 cl9">
                        Home 
                    </a>

                    <a href="blog-list-01.html" class="breadcrumb-item f1-s-3 cl9">
                        {props.type? props.type:null}
                    </a>

                    <span class="breadcrumb-item f1-s-3 cl9">
                        {props.title? props.title: null}
                    </span>
                </div>

                <div class="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                    <input class="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search" placeholder="Search" />
                    <button class="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                        <i class="zmdi zmdi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default breadcrumb;