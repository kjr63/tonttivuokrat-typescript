import * as React from "react";
import { Link } from "react-router-dom";

import { CtotDO, CountryTotal, GENERAL_DATA_FILE_NAME } from '../../api/api';
import totalStat from '../../data/'+GENERAL_DATA_FILE_NAME);

function TotalStat (): React.JSX.Element {
	return (
		<div className="total-stat">
			<div className="total-stat__title"> Koko maan suurimmat kaupungit yhteensä </div>
			<div className="total-stat__field">Asuntotonttimaan vuokratuotto vuodessa 10.4828e+9 euroa</div>
			<div className="total-stat__field">Asuntotonttimaan kokonaisarvo 209.657e+9 euroa </div>
			<div className="total-stat__field">Kotitalouksien lkm 2.13178e+6 kpl </div>
			<div className="total-stat__field">Asuntotonttien kokonaismäärä 182.137e+6 kem2 </div>
			<Link to="/" className="push-button" >Takaisin karttanäyttöön</Link>
		</div>
	);
}

export default TotalStat;