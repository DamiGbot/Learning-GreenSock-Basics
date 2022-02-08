import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// import svgImage from "./img/petr-tichy-ihatetomatoes-blog.svg";
import "./App.css";

function App() {
	const header = useRef();

	useEffect(() => {
		gsap.to("body", { backgroundColor: "#76c897", duration: 2 });

		gsap.fromTo(
			"#try",
			{ y: -20, opacity: 0 },
			{ y: 0, delay: 1.5, opacity: 1, ease: "power1.out" }
		);

		gsap.fromTo("P", { y: -5, opacity: 0 }, { y: 0, delay: 2, opacity: 1 });

		gsap.fromTo(
			"h2",
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1.5,
				delay: 2.5,
				ease: "power1.inOut",
			}
		);

		gsap.fromTo(
			"ul li",
			{ opacity: 0 },
			{ opacity: 1, delay: 3.5, stagger: 0.2, ease: "power1.in", duration: 0.7 }
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
