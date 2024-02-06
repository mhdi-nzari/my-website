import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="کارنامه من"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">فیسبوک</div>
							<div className="work-subtitle">
								بازاریاب و Sales Marketing
							</div>
							<div className="work-duration">از - 1402</div>

						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">توییتر</div>
							<div className="work-subtitle">
								توسعه دهنده میدلول
							</div>
							<div className="work-duration">از - 1402</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
