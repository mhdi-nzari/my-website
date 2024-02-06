import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">خانه</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">من کی هستم</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">پروژه هام</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">تجربه هام</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">ارتباط</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						 تمامی حقوق  میتونه محفوظ باشه |  1402©
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
