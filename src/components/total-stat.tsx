import * as React from "react";
import { Link } from "react-router-dom";

function TotalStat (): React.JSX.Element {
	return (
		<div>
			<h1> Koko maan suurimmat kaupungit yhteensä </h1>
			<h2>Asuntotonttimaan vuokratuotto vuodessa 10.4828e+9 euroa</h2>
			<h2>Asuntotonttimaan kokonaisarvo 209.657e+9 euroa </h2>
			<h2>Kotitalouksien lkm 2.13178e+6 kpl </h2>
			<h2>Asuntotonttien kokonaismäärä 182.137e+6 kem2 </h2>
			<Link to="/" className="push-button" >Takaisin karttanäyttöön</Link>
		</div>
	);
}

export default TotalStat;