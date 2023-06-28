import React from 'react'
import './Battle_Requirements.scss'

const Battle_Requirements = () => {
  return (
		<section className="battle-requirements" id="Battle Requirements">
			<div className="battle-requirements-headings">
				<h3>How to win a war</h3>
				<h1>Battle Requirements</h1>
			</div>
			<div className="battle-requirements-virtues">
				<div className="grid-item morale">
					<h3>Morale</h3>
					<p>To defeat your enemy, you must first bring his morale down.</p>
				</div>
				<div className="grid-item diversion">
					<h3>Diversion</h3>
					<p>
						Divert your enemy’s attention. Externally focus on activities that
						draw out your enemy
					</p>
				</div>
				<div className="grid-item focus">
					<h3>Focus</h3>
					<p>
						Focus on your strengths and concentrate on the weaknesses of your
						opponents.
					</p>
				</div>
				<div className="grid-item corners">
					<h3>Don't cut corners</h3>
					<p>
						Emphasize ethics and etiquette. Lead by example and achieve your
						success with integrity.
					</p>
				</div>
				<div className="grid-item attack">
					<h3>Attack from all sources</h3>
					<p>
						Systematically and strategically. Keep your strategies confidential.
						If required, adopt an autocratic leadership style to keep things
						confidential.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Battle_Requirements