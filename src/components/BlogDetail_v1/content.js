import React from 'react'

const content = (props) => {
	const showContent = props.updatedBlogDetails.content.map(val => {
		return (
			<p class="f1-s-11 cl6 p-b-25">
				{val}
			</p>
		)
	});
	const showTags = props.updatedBlogDetails.tages.map(val => {
		return (
			<a href="#" class="f1-s-12 cl8 hov-link1 m-r-15">
				{val}
			</a>
		)
	})
    return (
        <div class="col-md-10 col-lg-8 p-b-30">
					<div class="p-r-10 p-r-0-sr991">
						{/* <!-- Blog Detail --> */}
						<div class="p-b-70">
							<a href="#" class="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
								{props.updatedBlogDetails.type}
							</a>

							<h3 class="f1-l-3 cl2 p-b-16 p-t-33 respon2">
								{props.updatedBlogDetails.title}
							</h3>
							
							<div class="flex-wr-s-s p-b-40">
								<span class="f1-s-3 cl8 m-r-15">
									<a href="#" class="f1-s-4 cl8 hov-cl10 trans-03">
										{props.updatedBlogDetails.author}
									</a>

									<span class="m-rl-3">-</span>

									<span>
										{props.updatedBlogDetails.date}
									</span>
								</span>

								<span class="f1-s-3 cl8 m-r-15">
									5239 Views
								</span>

								<a href="#" class="f1-s-3 cl8 hov-cl10 trans-03 m-r-15">
									0 Comment
								</a>
							</div>

							<div class="wrap-pic-max-w p-b-30">
								<img src={props.updatedBlogDetails.imgURL} alt="IMG" />
							</div>
							{/* content */}
							{showContent}

							{/* <!-- Tag --> */}
							<div class="flex-s-s p-t-12 p-b-15">
								<span class="f1-s-12 cl5 m-r-8">
									Tags:
								</span>
								
								<div class="flex-wr-s-s size-w-0">
									{showTags}
								</div>
							</div>

							{/* <!-- Share --> */}
							<div class="flex-s-s">
								<span class="f1-s-12 cl5 p-t-1 m-r-15">
									Share:
								</span>
								
								<div class="flex-wr-s-s size-w-0">
									<a href="#" class="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
										<i class="fab fa-facebook-f m-r-7"></i>
										Facebook
									</a>

									<a href="#" class="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
										<i class="fab fa-twitter m-r-7"></i>
										Twitter
									</a>

									<a href="#" class="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
										<i class="fab fa-google-plus-g m-r-7"></i>
										Google+
									</a>

									<a href="#" class="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
										<i class="fab fa-pinterest-p m-r-7"></i>
										Pinterest
									</a>
								</div>
							</div>
						</div>

						{/* <!-- Leave a comment --> */}
						<div>
							<h4 class="f1-l-4 cl3 p-b-12">
								Leave a Comment
							</h4>

							<p class="f1-s-13 cl8 p-b-40">
								Your email address will not be published. Required fields are marked *
							</p>

							<form onSubmit={props.submitHandler}>
								<textarea class="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" 
									value={props.commentState.comment} onChange={props.changeHandler} name="comment" 
									placeholder="Comment..."></textarea>

								<input class="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" 
									type="text" value={props.commentState.name} onChange={props.changeHandler} name="name" 
									placeholder="Name*" />

								<input class="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" 
									value={props.commentState.email} onChange={props.changeHandler} name="email" 
									placeholder="Email*"/>

								<input class="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" 
									value={props.commentState.website} onChange={props.changeHandler} name="website" 
									placeholder="Website" />

								<button class="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
									Post Comment
								</button>
							</form>
						</div>
					</div>
				</div>
    )
}

export default content;