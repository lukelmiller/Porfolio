import type { NextPage } from "next";
import Styles from "./header.module.scss";
import { externalLinks, personalInfo } from "../../utils/constants";
import Link from "next/link";
import { Fragment } from "react";
interface Props {
	pageIndex: number;
}

export const Header: NextPage<Props> = (props) => {
	const { pageIndex = 0 } = props;
	return (
		<Fragment>
			<div className={Styles.emptySpacingBox} />
			<div className={Styles.header}>
				<div className={Styles.headerColumn}>
					<Link href={{ pathname: "/" }}>
						<a>
							<h1 className={Styles.title}>Luke Miller</h1>
						</a>
					</Link>
					<div className={Styles.nav}>
						<ul className={Styles.navList}>
							<li
								className={
									pageIndex == 1
										? Styles.selected
										: Styles.unselected
								}
							>
								<Link href={{ pathname: "/projects" }}>
									<a>Projects</a>
								</Link>
							</li>
							<li
								className={
									pageIndex == 2
										? Styles.selected
										: Styles.unselected
								}
							>
								<a
									href={externalLinks.GITHUB}
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</li>
							<li
								className={
									pageIndex == 3
										? Styles.selected
										: Styles.unselected
								}
							>
								<Link href={{ pathname: "/me" }}>
									<a>Me</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={Styles.headerBottomBorder} />
			</div>
		</Fragment>
	);
};
