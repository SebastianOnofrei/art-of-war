import React from 'react'
import './Footer.scss';


let year= new Date().getFullYear();

const Footer = () => {



  return (
		<footer>
			<hr />
			<div className="copyright">
				<p>© {year} General Sun TZU. All Rights Reserved</p>
			</div>
		</footer>
	);
}

export default Footer