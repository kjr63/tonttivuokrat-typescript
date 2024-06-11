import * as React from "react";
import { Link } from "react-router-dom";
import { format } from 'mathjs';

import { StatYears, CtotDO, CountryTotal, GENERAL_DATA_FILE_NAME } from '../../api/api';
import genData from '../../data/general-data.json';
import totalStatVääräTieto from '../../data/country-total.json';
//GENERAL_DATA_FILE_NAME: string = "general-data.json"

const years: StatYears = genData;
const statLen: number = years.length;
const totalStats: CtotDO [] = totalStat as CtotDO [];
console.log ("ts ", totalStats);

/* const cTotal: CountryTotal [] = totalStats.map( (x) => { 
	const ct: CountryTotal = new CountryTotal ();
	ct.setDataObject ( x );
	return (ct);
} ); */

const cTotal: CountryTotal [] = totalStats.map(
	function (x) {
		const ct: CountryTotal = new CountryTotal ();
		ct.setDataObject ( x );
		return (ct); 
	}
 );

console.log("cTotal ",cTotal);

function TotalStat (): React.JSX.Element {
	return (
		<div className="total_stat">
			<div className="total_stat__title"> Koko maan suurimmat kaupungit yhteensä</div>
			<div className="total_stat__years">
				<div className="total_stat__years-empty"><pre></pre></div>
				<div  className="total_stat__years-entity">
					{ years.map ( (x,i) => { 
						return (<div key={i}>{x}</div>);
					} ) }
				</div>
			</div>
			<div className="total_stat__fields">
				<div className="total_stat__fields-titles">				
					<div className="total_stat__field-title">Asuntotonttimaan vuokratuotto vuodessa euroa</div>		
					<div className="total_stat__field-title">Asuntotonttimaan kokonaisarvo euroa</div>
					<div className="total_stat__field-title">Kotitalouksien lkm</div>
					<div className="total_stat__field-title">Asuntotonttien kokonaismäärä m2</div>
				</div>
				<div className="total_stat__fields-stats">
					{ cTotal.map ( (ct,i) => { 
						//console.log("x",x);
						const result =
							<div key={i}>
								<div>
									{ format(ct.getLandRent(), {notation: 'engineering', precision: 4}) }
								</div>
								<div>
									{ format(ct.getLandValue(), {notation: 'engineering', precision: 4}) }									
								</div>
								<div>
									{ct.getHouseholds ()}									
								</div>
								<div>
									{ format(ct.getLand(), {notation: 'engineering', precision: 4}) }						
								</div>
							</div>;
						return (result);
					} ) }					
				</div>
			</div>
			<Link to="/" className="push-button" >Takaisin karttanäyttöön</Link>
		</div>
	);
}

export default TotalStat;