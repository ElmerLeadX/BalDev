/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import Audio from "../Audio/Audio";
import "./Video.css";
const Video = ({ src, footer, btn }) => {
	const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleclick = () => {
		const video = videoRef.current;
		if (video) {
			video.muted = video.muted ? false : true;
			if (video.paused) {
				video.play(); // asegurarse que está reproduciendo
			}
		}
	}
  return isMobile ? (
		<section className="section-video">
			<span
				className="video-cover"
				onClick={() => {
					handleclick();
				}}
			>
				<Audio color="#000000" Width="16" Height="16" />
				<span>{btn}</span>
			</span>
			<video
				ref={videoRef}
				width="100%"
				height="auto"
				controls
				autoPlay
				muted
				loop
				controlsList="nodownload"
				preload="auto"
			>
				<source src={src} type="video/mp4" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
		</section>
	) : (
		<section className="section-video">
			<span
				className="video-cover"
				onClick={() => {
					handleclick();
				}}
			>
				<Audio color="#000000" Width="16" Height="16" />
				<span>{btn}</span>
			</span>
			<video
				ref={videoRef}
				width="100%"
				height="auto"
				controls
				autoPlay
				muted
				loop
				controlsList="nodownload"
				preload="auto"
			>
				<source src={src} type="video/mp4" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
			<div className="video-footer">
				<p>{footer}</p>
			</div>
		</section>
	);
};

export default Video;