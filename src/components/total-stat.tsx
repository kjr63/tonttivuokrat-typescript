import * as React from "react";
import { Link } from "react-router-dom";
import { format } from 'mathjs';

import { StatYears, CtotDO, CountryTotal, GENERAL_DATA_FILE_NAME } from '../../api/api';
import genData from '../../data/general-data.json';
import totalStat from '../../data/total-data.json';
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
		<main>
		<div className="total_stat">
			<div className="total_stat__title"> Maan suurimmat kaupungit yhteensä</div>
			<div className="total_stat__cols">
				<div className="total_stat__cols-title">Tilastotieto</div>
				<div  className="total_stat__cols-entity">
					{ years.map ( (x,i) => { 
						return (<div key={i}>{x}</div>);
					} ) }
				</div>
			</div>
			<div className="total_stat__fields">
				<div className="total_stat__fields-titles">				
					<div className="total_stat__field-1">Asuntotonttimaan vuokratuotto vuodessa (euroa)</div>		
					<div className="total_stat__field-1">Asuntotonttimaan arvo (euroa)</div>
					<div className="total_stat__field-1">Kotitalouksien lkm</div>
					<div className="total_stat__field-1">Asuntotonttien määrä (m2)</div>
				</div>
				<div className="total_stat__fields-stats">
					{ cTotal.map ( (ct,i) => { 
						//console.log("x",x);
						const result =
							<div key={i}>
								<div className="total_stat__value">
									{ format(ct.getLandRent(), {notation: 'engineering', precision: 4}) }
								</div>
								<div className="total_stat__value">
									{ format(ct.getLandValue(), {notation: 'engineering', precision: 4}) }									
								</div>
								<div className="total_stat__value">
									{ct.getHouseholds ()}									
								</div>
								<div className="total_stat__value">
									{ format(ct.getLand(), {notation: 'engineering', precision: 4}) }						
								</div>
							</div>;
						return (result);
					} ) }					
				</div>
			</div>
		</div>
		<div className="to_home">
			<Link to="/" className="" >Takaisin karttanäyttöön</Link>
		</div>
		</main>
	);
}

export default TotalStat;