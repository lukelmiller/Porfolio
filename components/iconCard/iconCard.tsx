import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

import Styles from "./iconCard.module.scss";

interface Props {
	iconFilename: String;
	index: number;
	title: String;
}
export const IconCard: NextPage<Props> = (props) => {
	const glows = [
		Styles.glow1,
		Styles.glow2,
		Styles.glow3,
		Styles.glow4,
		Styles.glow5,
		Styles.glow6,
	];
	const { iconFilename, index, title } = props;
	return (
		<div className={`${Styles.iconCard} ${glows[index % 6]}`}>
			<div className={Styles.iconContainer}>
				<Image
					alt={`${title} Icon`}
					src={`/Icons/${iconFilename}`}
					width={50}
					height={50}
					layout="raw"
					className={Styles.iconImage}
				/>
			</div>

			<h3 className={Styles.iconTitle}>{title}</h3>
		</div>
	);
};
