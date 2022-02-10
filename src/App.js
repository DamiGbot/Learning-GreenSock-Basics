import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./App.css";

function App() {
	const header = useRef();

	useEffect(() => {
		const timeline = gsap.timeline({
			duration: 1,
		});

		timeline
			.from("body", { backgroundColor: "#fff" })
			.fromTo(
				["#try", ".intro"],
				{ y: -20, opacity: 0 },
				{ y: 0, opacity: 1, ease: "power1.out", stagger: 0.2 }
			)
			.from("h2", {
				opacity: 0,
				ease: "none",
			})
			.fromTo(
				"ul li",
				{ opacity: 0, y: -20 },
				{
					opacity: 1,
					y: 0,
					stagger: 0.2,
					ease: "power1.out",
				}
			);
	}, []);

	return (
		<header id="header" ref={header}>
			<h1 id={"try"}>
				<span>GreenSock 101</span>
				<em></em>
			</h1>
			<p class="intro">
				Your first hour with GSAP, <br />
				<em>make sure it is a good one</em>.
			</p>
			{/* <img
				src={svgImage}
				alt="GreenSock 101 - Getting started with GreenSock in 60 minutes."
			/> */}

			<h2>Table Of Content</h2>
			<ul class="list">
				<li>
					<a href="#">
						<span>
							<strong>Lesson 1</strong> - Getting started
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<strong>Lesson 2</strong> - Tweens
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<strong>Lesson 3</strong> - Timelines
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<strong>Lesson 4</strong> - Callbacks
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>
							<strong>Lesson 5</strong> - Timeline controls
						</span>
					</a>
				</li>
			</ul>
		</header>
	);
}

export default App;
