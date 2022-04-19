import type { NextPage } from "next";
import Styles from "./header.module.scss";
import { externalLinks, personalInfo, routes } from "../../utils/constants";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
interface Props {
	children: any;
}

export const Header: NextPage<Props> = (props) => {
	const [headerIndex, setHeaderIndex] = useState(0);
	const router = useRouter();

	const getHeaderIndex = (pathname: String) => {
		switch (pathname) {
			case routes.PROJECTS:
				return 1;
			case routes.ME:
				return 3;
			default:
				return 0;
		}
	};

	useEffect(() => {
		setHeaderIndex(getHeaderIndex(router.pathname));
	}, [router]);

	return (
		<Fragment>
			<div className={Styles.emptySpacingBox} />
			<div className={Styles.header}>
				<div className={Styles.headerColumn}>
					<Link href={{ pathname: "/" }}>
						<a>
							<h1 className={Styles.title}>
								{personalInfo.FULL_NAME}
							</h1>
						</a>
					</Link>
					<div className={Styles.nav}>
						<ul className={Styles.navList}>
							<li
								className={
									headerIndex == 1
										? Styles.selected
										: Styles.unselected
								}
							>
								<Link href={{ pathname: routes.PROJECTS }}>
									<a>Projects</a>
								</Link>
							</li>
							<li
								className={
									headerIndex == 2
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
									headerIndex == 3
										? Styles.selected
										: Styles.unselected
								}
							>
								<Link href={{ pathname: routes.ME }}>
									<a>Me</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={Styles.headerBottomBorder} />
			</div>
			{props.children}
		</Fragment>
	);
};
