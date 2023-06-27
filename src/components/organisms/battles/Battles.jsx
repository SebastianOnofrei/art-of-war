import React from 'react'
import './Battles.scss'
const Battles = () => {
  return (
		<section className="battles" id="Battles">
			<div className="battles-text">
				<h3>THE GENERAL WHO NEVER LOST A</h3>
				<h1>BATTLE</h1>
				{/* maybe implement here an atom */}
				<ul className="battle-features">
					<li className="battle-features__boju">
						<h2>Battle of Boju</h2>
						<p>
							The Battle of Boju and the Wu-Chu War the first large-scale war of
							the Eastern Zhou Dynasty.
						</p>
					</li>
					<li className="battle-features__eight-princes">
						<h2>War of the Eight Princes</h2>
						<p>
							Power struggle among sons of Emperor Wu in ancient China's Jin
							Dynasty, leading to instability and downfall.
						</p>
					</li>
					<li className="battle-features__red-cliffs">
						<h2>Battle of Red Cliffs</h2>
						<p>
							Epic naval battle in ancient China, where allied forces defeated
							Cao Cao's army, shaping history.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Battles