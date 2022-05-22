import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TechData from "../../assets/technologies.json";
import IconCard from "../../components/iconCard";
import Styles from "./AboutMe.module.scss";
import classNames from "classnames";
import Icons from "../../utils/icons";
import InfoCard from "../../components/infoCard";
import OtcIcon from "../../assets/otc.png";
import Photo from "../../assets/photo.png";

import Image from "next/image";
interface Props {}
const AboutMe: NextPage<Props> = (props) => {
	const [animationPaused, setAnimationPaused] = useState(false);
	useEffect(() => {
		setAnimationPaused(
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		);
	}, []);
	const colors = [
		"#DE5E43",
		"#ACA655",
		"#78F069",
		"#469C9F",
		"#1E4DCB",
		"#001FF2",
	];

	const firstHalfTech = TechData.slice(
		0,
		Math.floor(TechData.length / 2)
	).map((Tech, index) => {
		return (
			<IconCard
				key={Tech.name}
				iconFilename={Tech.iconGradient}
				index={index}
				title={Tech.name}
			/>
		);
	});
	const secondHalfTech = TechData.slice(
		Math.floor(TechData.length / 2),
		TechData.length
	).map((Tech, index) => {
		return (
			<IconCard
				key={Tech.name}
				iconFilename={Tech.iconGradient}
				index={index}
				title={Tech.name}
			/>
		);
	});

	return (
		<>
			<h2 className={Styles.categoryTitle}>About Me</h2>
			<div className={Styles.academicsContainer}>
				<div className="column">
					<div className="row">
						<InfoCard
							title="Luke Miller"
							prefix={
								<Image
									src={Photo}
									alt="Portrait of Me"
									width="200px"
									height="200px"
									className={Styles.profilePic}
								/>
							}
							body="Hi I'm Luke"
						/>
					</div>
				</div>
			</div>
			<h2 className={Styles.categoryTitle}>Academics</h2>
			<div className={Styles.academicsContainer}>
				<div className="column">
					<div className="row">
						<InfoCard
							title="University of Arkansas"
							prefix={Icons.UARK}
							body="Bachelors Computer Science (BSCS)"
						/>
						<InfoCard
							title="Ozark Technical Community College"
							prefix={
								<Image
									src={OtcIcon}
									alt="OTC Logo"
									width="110px"
									height="110px"
								/>
							}
							body="Computer Information Science Certification (CIS)"
						/>
					</div>
				</div>
			</div>
			<h2 className={Styles.categoryTitle}>Experience</h2>
			<div className={Styles.experienceContainer}>
				<div className="column">
					<div className="row">
						<InfoCard
							title="Visa"
							prefix={Icons.VISA}
							body="I worked at visa"
						/>
						<InfoCard
							title="Olive Garden"
							prefix={Icons.OLIVE_GARDEN}
							body="I worked at Olive Garden"
						/>
					</div>
					<div className="row">
						<InfoCard
							title="Starbucks"
							prefix={Icons.STARBUCKS}
							body="I worked at Starbucks"
						/>
						<InfoCard
							title="Market Tech"
							prefix={Icons.MARKET_TECH}
							body="I worked at Market Tech"
						/>
					</div>
				</div>
			</div>
			<h2 className={Styles.categoryTitle}>Technologies</h2>
			<div className={Styles.techContainerContainer}>
				<div
					className={classNames({
						[Styles.techContainer]: true,
						[Styles.animationPaused]: animationPaused,
					})}
				>
					<div className={Styles.techRow}>
						{firstHalfTech}
						{firstHalfTech}
					</div>
					<div className={`${Styles.techRow} ${Styles.bottomRow}`}>
						{secondHalfTech}
						{secondHalfTech}
					</div>
				</div>
				<button
					onClick={() => setAnimationPaused(!animationPaused)}
					className={Styles.pauseButton}
				>
					{animationPaused ? Icons.PLAY : Icons.PAUSE}
				</button>
			</div>
		</>
	);
};
export default AboutMe;
