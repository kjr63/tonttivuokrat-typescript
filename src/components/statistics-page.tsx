import * as React from "react";
import { Link } from "react-router-dom";

function StatisticsPage (): React.JSX.Element {
	return (
		<div className="stats-page">
			<div className="stats-page__title">Tiedot numeroina</div>
			<div className="stats-page__link">
				<Link to="/" className="push-button" >Takaisin karttanäyttöön</Link>
			</div>
		</div>
	);
}

export default StatisticsPage;