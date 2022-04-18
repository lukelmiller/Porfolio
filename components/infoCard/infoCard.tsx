import type { NextPage } from "next";
import Styles from "./infoCard.module.scss";
import Link from "next/link";

interface Props {
	body: String;
	className?: String;
	link?: String;
	prefix?: any;
	title: String;
}

export const InfoCard: NextPage<Props> = (props) => {
	const { title, body, prefix = null, className = "", link = "/" } = props;
	return (
		<Link href={{ pathname: link.toString() }}>
			<a>
				<div
					className={`${Styles.card} ${
						prefix && Styles.cardPrefixSplit
					} ${className}`}
				>
					{prefix && <div className={Styles.cardIcon}>{prefix}</div>}

					<div className={Styles.cardText}>
						<h2 className={Styles.cardTitle}>
							{title.toUpperCase()}
						</h2>
						<p className={Styles.cardBody}>{body}</p>
					</div>
				</div>
			</a>
		</Link>
	);
};
