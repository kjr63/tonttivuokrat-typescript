import { Municipality, MuniDO, Statistics, StatDO } from '../../api/api';
import years from '../../data/general-data.json';

export async function setImgData (data: string) {
  let myPromise = new Promise (function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  let help = await myPromise;
  console.log(help);
}

export function createStatTooltip (m: Municipality): string {
	let result: string = "<div>no data available</div>";
	let temp: string;
	const yrLen: number = years.length;
	console.log ("map "+years.map(function(x){return(x);}));
	console.log ("flatmap "+years.flatMap((x) => {return(x);}));
	if (yrLen > 0) {
		// Luo tooltip html
		result = '<div class="tooltip_table">';
		
		result += '<div class="tooltip_table__title">Asuntomaan hinta kunnassa markkinahintaan</div>';
		
		result += '<div class="tooltip_table__header">';
			result += '<div class="tooltip_table__municipality">'+m.getName()+'</div>';
			result += '<div class="tooltip_table__year">'+years.map(function(x) {return(x);})+'</div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">keskimääräinen hinta per kem2 euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">alin hinta per kem2 euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">korkein hinta per kem2 euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">keskimääräinen tonttivuokra per kem2/kk euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">keskimääräinen tonttiarvo per kem2 euroa</div><div class="tooltip_table__stat_data"></div>';	
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">alin tonttivuokra per kem2/kk euroa </div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">alin tonttiarvo per kem2 euroa </div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">korkein tonttivuokra per kem2/kk euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">korkein tonttiarvo per kem2 euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">keskimääräinen vuokra per kem2/kk euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		

		result += '<div class="tooltip_table__header">Kunta yhteensä</div>';

		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttien kokonaismäärä kem2</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttimaan kokonaisarvo euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttimaan vuokratuotto vuodessa euroa</div><div class="tooltip_table__stat_data"></div>';
		result += '</div>';		
		
		//Lohkon loppu
		result += '</div>';
		console.log("\n",result);
	}
	return (result);
}
