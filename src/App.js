import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./App.css";

function App() {
	const header = useRef();
	const btnPlay = useRef();
	const btnPause = useRef();
	const btnResume = useRef();
	const btnReverse = useRef();
	const btnSpeedUp = useRef();
	const btnSlowDown = useRef();
	const btnSeek = useRef();
	const btnProgress = useRef();
	const btnRestart = useRef();

	const runStart = () => {
		console.log("Starting....");
	};

	const runUpdate = () => {
		console.log("Updating....");
	};

	const runComplete = () => {
		console.log("Complete!!!");
	};

	const timeline = gsap.timeline({
		duration: 1,
		paused: true,
		onStart: runStart,
		onUpdate: runUpdate,
		onComplete: runComplete,
	});

	useEffect(() => {
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
	}, [timeline]);

	const btnPlayHandler = () => {
		timeline.play();
	};

	const btnPauseHandler = () => {
		timeline.pause();
	};
	const btnResumeHandler = () => {
		timeline.resume();
	};
	const btnReverseHandler = () => {
		timeline.reverse();
	};
	const btnSpeedUpHandler = () => {
		timeline.timeScale(2);
	};
	const btnSlowDownHandler = () => {
		timeline.timeScale(0.5);
	};

	const btnSeekHandler = () => {
		timeline.seek(3);
	};
	const btnProgressHandler = () => {
		timeline.progress(0.5);
	};
	const btnRestartHandler = () => {
		timeline.restart();
	};

	return (
		<>
			<header ref={header}>
				<h1 id={"try"}>
					<span>GreenSock 101</span>
					<em></em>
				</h1>
				<p className="intro">
					Your first hour with GSAP, <br />
					<em>make sure it is a good one</em>.
				</p>
				{/* <img
				src={svgImage}
				alt="GreenSock 101 - Getting started with GreenSock in 60 minutes."
			/> */}

				<h2>Table Of Content</h2>
				<ul className="list">
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

			<div className="buttons">
				<button ref={btnPlay} onClick={btnPlayHandler}>
					play
				</button>
				<button ref={btnPause} onClick={btnPauseHandler}>
					pause
				</button>
				<button ref={btnResume} onClick={btnResumeHandler}>
					resume
				</button>
				<button ref={btnReverse} onClick={btnReverseHandler}>
					reverse
				</button>
				<button ref={btnSpeedUp} onClick={btnSpeedUpHandler}>
					speed up
				</button>
				<button ref={btnSlowDown} onClick={btnSlowDownHandler}>
					slow down
				</button>
				<button ref={btnSeek} onClick={btnSeekHandler}>
					seek 1 sec
				</button>
				<button ref={btnProgress} onClick={btnProgressHandler}>
					go to 50%
				</button>
				<button ref={btnRestart} onClick={btnRestartHandler}>
					restart
				</button>
			</div>
		</>
	);
}

export default App;
