import React from 'react'
import './Testimonials.scss';
import Review from '../../molecules/review/Review';
import avatar1 from '../../../assets/avatar1.jpg';
import avatar2 from "../../../assets/avatar2.jpg";
import avatar3 from "../../../assets/avatar3.jpg";

const Testimonials = () => {

  //  TODO : SET UP BACKEND ENDPOINT AND SEND THIS DATA AS JSON , RETRIEVE IT IN FE AND DISPLAY IT :) 
      let reviews = [
				{
					avatar: avatar1,
					name: "Bill Paxton",
					occupation: "Strategist",
					opinion: `What I really loved is the fact that much of the insights can be used in today's fiercely competitive corporate scenarios as well.`,
					dateOfReview: "Feb 17,2021",
					positionModifier: "review-1",
				},
				{
					avatar: avatar2,
					name: "Petra Thomas",
					occupation: "Politician",
					opinion: `Sun Tzu says that it is better not to fight than to be involved in a conflict, but if you are going to have to fight, then you have to do it to win`,
					dateOfReview: "Apr 25,2022",
					positionModifier: "review-2",
				},
				{
					avatar: avatar3,
					name: "Sporkurai Williams",
					occupation: "Columnist",
					opinion: `Strategy helps you win, retreating helps you not die`,
					dateOfReview: "Dec 24,2022",
					positionModifier: "review-3",
				},
			];


  return (
		<section className="testimonials" id="Opinions">
			<div className="testimonials-cta">
				<h3>What people think?</h3>
				<h1>Opinions</h1>
				<p>
					General Sun Tzu’s work has been consulted by military figures &
					business strategists ever since, & its lessons on how to achieve
					ones’s goals continue to be valued.
				</p>
        <button>Read more opinions</button>
			</div>
			<div className="testimonials-reviews">
				{reviews.map((review,index)=>{
          return(
            <Review review={review} key={index}/>
          )
        })}
			</div>
		</section>
	);
}

export default Testimonials