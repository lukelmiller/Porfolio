import type { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/header";
import InfoCard from "../components/infoCard";
import { welcomePage } from "../utils/constants";
import Icons from "../utils/icons";
import Styles from "./index.module.scss";

const Home: NextPage = () => {
	return (
		<Fragment>
			{/* <Header /> */}
			<div className={Styles.homeBody}>
				<div className="column">
					<div className="row">
						<InfoCard
							title={welcomePage.WELCOME_CARD.TITLE}
							body={welcomePage.WELCOME_CARD.BODY}
							prefix={Icons.SUN}
							link={welcomePage.WELCOME_CARD.ROUTE}
						/>
						<InfoCard
							title={welcomePage.PROJECT_CARD.TITLE}
							body={welcomePage.PROFILE_CARD.BODY}
							prefix={Icons.CHECKMARK}
							link={welcomePage.PROJECT_CARD.ROUTE}
						/>
					</div>
					<div className="row">
						<InfoCard
							title={welcomePage.GITHUB_CARD.TITLE}
							body={welcomePage.GITHUB_CARD.BODY}
							prefix={Icons.GITHUB}
							link={welcomePage.GITHUB_CARD.ROUTE}
						/>
						<InfoCard
							title={welcomePage.PROFILE_CARD.TITLE}
							body={welcomePage.PROFILE_CARD.BODY}
							prefix={Icons.PROFILE}
							link={welcomePage.PROFILE_CARD.ROUTE}
						/>
					</div>
					<div className="row">
						<InfoCard
							title={welcomePage.CONTACT_CARD.TITLE}
							body={welcomePage.CONTACT_CARD.BODY}
							prefix={Icons.MAIL}
							link={welcomePage.CONTACT_CARD.ROUTE}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
