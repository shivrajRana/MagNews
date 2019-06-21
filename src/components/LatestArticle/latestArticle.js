import React from 'react';
import ArticleItem from './articleItem';

const latestArticle = (props) => {
    let count = 0;
    const renderArticles = props.latestArticle.map(article => {
        return(
            <ArticleItem key={count++} data={article}/>
        )
    })

    return (
        <div>
            <section className="bg0 p-t-60 p-b-35">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 p-b-20">
                            <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                                <h3 className="f1-m-2 cl3 tab01-title">
                                    Latest Articles
                                </h3>
                            </div>

                            <div className="row p-t-35">
                                {renderArticles}
                            </div>
                        </div>

                        <div className="col-md-10 col-lg-4">
                            <div className="p-l-10 p-rl-0-sr991 p-b-20">
                                {/* <!-- Video --> */}
                                <div className="p-b-55">
                                    <div className="how2 how2-cl4 flex-s-c m-b-35">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Featured Video
                                        </h3>
                                    </div>

                                    <div>
                                        <div className="wrap-pic-w pos-relative">
                                            <img src={props.featuredVideo.imgURL} alt="IMG"/>

                                            <button className="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-01">
                                                <span className="fab fa-youtube"></span>
                                            </button>
                                        </div>

                                        <div className="p-tb-16 p-rl-25 bg3">
                                            <h5 className="p-b-5">
                                                <a href={props.featuredVideo.videoURL} className="f1-m-3 cl0 hov-cl10 trans-03">
                                                    {props.featuredVideo.title}
                                                </a>
                                            </h5>

                                            <span className="cl15">
                                                <a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
                                                {props.featuredVideo.author}
                                                </a>

                                                <span className="f1-s-3 m-rl-3">
                                                    -
                                                </span>

                                                <span className="f1-s-3">
                                                    {props.featuredVideo.date}
                                                </span>
                                            </span>
                                        </div>
                                    </div>	
                                </div>
                                    
                                {/* <!-- Subscribe --> */}
                                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
                                    <h5 className="f1-m-5 cl0 p-b-10">
                                        Subscribe
                                    </h5>

                                    <p className="f1-s-1 cl0 p-b-25">
                                        Get all latest content delivered to your email a few times a month.
                                    </p>

                                    <form className="size-a-9 pos-relative">
                                        <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email"/>

                                        <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>
                                
                                {/* <!-- Tag --> */}
                                <div className="p-b-55">
                                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                                        <h3 className="f1-m-2 cl3 tab01-title">
                                            Tags
                                        </h3>
                                    </div>

                                    <div className="flex-wr-s-s m-rl--5">
                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Fashion
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Lifestyle
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Denim
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Streetstyle
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Crafts
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Magazine
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            News
                                        </a>

                                        <a href="#" className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                                            Blogs
                                        </a>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default latestArticle;