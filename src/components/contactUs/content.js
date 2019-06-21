import React from 'react'

const content = (props) => {
    let count= 0;
    const popularPostRender = props.popularPost.map(val => {
        return (
            <li className="flex-wr-sb-s p-b-30" key={count++}>
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src={val.imgURL} alt="IMG" />
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            {val.title}
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
                        <a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
                            {val.type}
                        </a>

                        <span className="f1-s-3 m-rl-3">
                            -
                        </span>

                        <span className="f1-s-3">
                            {val.date}
                        </span>
                    </span>
                </div>
            </li>
        )
    })
    return (
        <div>
            {/* <!-- Page heading --> */}
            <div className="container p-t-4 p-b-40">
                <h2 className="f1-l-1 cl2">
                    Contact Us
                </h2>
            </div>
            <section className="bg0 p-b-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-8 p-b-80">
                            <div className="p-r-10 p-r-0-sr991">
                                <form onSubmit={props.submitHandler}>
                                    <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20" 
                                        type="text" name="name" placeholder="Name*" value={props.data.name} onChange={props.changeHandler}/>

                                    <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20" 
                                        type="text" name="email" placeholder="Email*" value={props.data.email} onChange={props.changeHandler}/>

                                    <input className="bo-1-rad-3 bocl13 size-a-19 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                                        type="text" name="website" placeholder="Website" value={props.data.website} onChange={props.changeHandler}/>

                                    <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" 
                                        name="msg" placeholder="Your Message" value={props.data.msg} onChange={props.changeHandler}></textarea>

                                    <button className="size-a-20 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-20">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                        {/* <!-- Sidebar --> */}
                        <div className="col-md-5 col-lg-4 p-b-80">
                            <div className="p-l-10 p-rl-0-sr991">
                                {/* <!-- Popular Posts --> */}
                                <div>
                                    <div className="how2 how2-cl4 flex-s-c">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Popular Post
                                        </h3>
                                    </div>

                                    <ul className="p-t-35">
                                        {popularPostRender}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default content;