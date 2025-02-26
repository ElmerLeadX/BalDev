/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import videocover from "../../assets/video-cover.png";
import "./Video.css";
const Video = ({ src }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
	}, []);
  return isMobile ? (
		<section className="section-video">
			<video width="100%" height="auto" controls muted poster={videocover}>
				<source src={src} type="video/mp4" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
		</section>
	) : (
		<section className="section-video">
			<video
				width="100%"
				height="auto"
				controls
				autoPlay
				muted
				loop
				preload="auto"
			>
				<source src={src} type="video/mp4" />
				<track kind="captions" />
				Your browser does not support the video tag.
			</video>
		</section>
	);
};

export default Video;