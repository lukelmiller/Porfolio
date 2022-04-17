import type { NextPage } from "next";
import Styles from "./header.module.scss";

interface Props {
	pageIndex: number;
}

export const Header: NextPage<Props> = (props) => {
	const { pageIndex = 0 } = props;
	return (
		<div className={Styles.header}>
			<div className={Styles.headerColumn}>
				<h1 className={Styles.title}>Luke Miller</h1>
				<div className={Styles.nav}>
					<ul className={Styles.navList}>
						<li className={pageIndex == 1 ? Styles.selected : ""}>
							Projects
						</li>
						<li className={pageIndex == 2 ? Styles.selected : ""}>
							GitHub
						</li>
						<li className={pageIndex == 3 ? Styles.selected : ""}>
							Me
						</li>
					</ul>
				</div>
			</div>
			<div className={Styles.headerBottomBorder} />
		</div>
	);
};
