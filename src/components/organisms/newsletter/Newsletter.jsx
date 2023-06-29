import React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
  return (
		<section className="newsletter">
			<div className="book-description">
				<h3>Ready to read the book?</h3>
				<h1>The art of war</h1>
				<p>
					This Collectable Hardbound Deluxe Edition is beautifully crafted and
					designed. Perfect for gifting as well as for keeps. A prized edition
					for any library. The art of war is of vital importance to the State.
					It is a matter of life and death, a road either to safety or to ruin.
					Hence it is a subject of inquiry which can on no account be neglected.
					The Art of War is an enduring classic that holds a special place in
					the culture and history of East Asia. An ancient Chinese text on the
					philosophy and politics of warfare and military strategy, the treatise
					was written in 6th century B.C. by a warrior-philosopher now famous
					all over the world as Sun Tzu. Sun Tzu s teachings remain as relevant
					to leaders and strategists today as they were to rulers and military
					generals in ancient times. Divided into thirteen chapters and written
					succinctly, The Art of War is a must read for anybody who works in an
					competitive environment or who is interested in warfare, strategy and
					Chinese history.
				</p>
				<button>
					<a target='_blank' href="https://www.amazon.com/Art-War-Sun-Tzu/dp/1599869772">
						Buy on Amazon $4.99
					</a>
				</button>
			</div>
		</section>
	);
}

export default Newsletter