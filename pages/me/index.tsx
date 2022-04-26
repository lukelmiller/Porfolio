import type { NextPage } from "next";
import TechData from "../../assets/technologies.json";
import IconCard from "../../components/iconCard";
import Styles from "./AboutMe.module.scss";

interface Props {}
const AboutMe: NextPage<Props> = (props) => {
	const colors = [
		"#DE5E43",
		"#ACA655",
		"#78F069",
		"#469C9F",
		"#1E4DCB",
		"#001FF2",
	];
	const tech = TechData.map((Tech, index) => {
		return (
			<IconCard
				key={Tech.name}
				iconFilename={Tech.icon}
				index={index}
				title={Tech.name}
			/>
		);
	});
	const techReverse = [...tech].reverse();

	return (
		<>
			<h2>Technologies</h2>
			<div className={Styles.techContainerContainer}>
				<div className={Styles.techContainer}>
					<div className={Styles.techRow}>
						{tech}
						{tech}
					</div>
					<div className={`${Styles.techRow} ${Styles.bottomRow}`}>
						{techReverse}
						{techReverse}
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutMe;
