import React from 'react'
import './Review.scss';

const Review = (props) => {


  console.log(props.review);

  return (
		<div className={"review " + props.review.positionModifier}>
			<div className="review__profile">
				{/* I set up a div here so we can use ::after on it for the image red effect , otherwhise ::after does NOT work on the img tag  */}
				<div className="img-container">
					<img
						src={props.review.avatar}
						alt="Reviewer image"
						className="review__profile-img"
					/>
				</div>
				<div className="review__profile-info">
					<h3>{props.review.name}</h3>
					<p className="review__profile-info-occupation">
						{props.review.occupation}
					</p>
				</div>
			</div>
			<p className="review__opinion">{props.review.opinion}</p>
			<p className="review__date">{props.review.dateOfReview}</p>
		</div>
	);
}

export default Review