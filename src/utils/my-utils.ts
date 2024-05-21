//const m = require ('mathjs');
//const format = m.format;
import { format } from 'mathjs';
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
	let strTemp: string;
	let arrTemp: string [] = [];
	const yrLen: number = years.length;
	const iLast: number = yrLen - 1;
	const s: Statistics = m.getStatistics();
	//console.log ("map "+years.map(function(x){return(x);}));
	//console.log ("flatmap "+years.flatMap((x) => {return(x);}));
	if (yrLen > 0) {
		// Luo tooltip html
		result = '<div class="tooltip_table">';
		// Otsikko
		result += '<div class="tooltip_table__title">Kerrostaloasuntomaan markkina-arvo kunnassa</div>';
		// Tilastojen otsikko
		result += '<div class="tooltip_table__header">';
			result += '<div class="tooltip_table__municipality">'+m.getName()+'</div>';
			strTemp = '<div class="tooltip_table__year">'+years[iLast]+'</div> ';
			result += strTemp;
		result += '</div>';		
		// Tilastot
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">Keskimääräinen tonttiarvo (per m2 euroa)</div>';
			//result += ('<div class="tooltip_table__stat_data">'+s.getAvLandPrice()[iLast]+'</div>');
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getAvLandPrice()[iLast]).toFixed(0)+'</div>');
		result += '</div>';
				
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">Alin tonttiarvo (per m2 euroa)</div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getLowLandPrice()[iLast]+'</div>';
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getLowLandPrice()[iLast]).toFixed(0)+'</div>');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">Korkein tonttiarvo (per m2 euroa)</div>';
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getHighLandPrice()[iLast]).toFixed(0)+'</div>');			
		result += '</div>';
	
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Keskimääräinen tonttivuokra (per m2/kk euroa)</div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getAvLandRent()[iLast]+'</div>';
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getAvLandRent()[iLast]).toFixed(2)+'</div>');			
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Alin tonttivuokra (per m2/kk euroa) </div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getLowLandRent()[iLast]+'</div>';
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getLowLandRent()[iLast]).toFixed(2)+'</div>');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Korkein tonttivuokra (per m2/kk euroa)</div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getHighLandRent()[iLast]+'</div>';
			result += ('<div class="tooltip_table__stat_data">'+new Number(s.getHighLandRent()[iLast]).toFixed(2)+'</div>');
		result += '</div>';

		// Maa yhteensä
		result += '<div class="tooltip_table__header">';
			result += '<div class="tooltip_table__municipality">Maa yhteensä '+m.getName()+'</div>';
			result += '<div class="tooltip_table__year">'+years[iLast]+'</div>';			
		result += '</div>';

		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Asuntotonttien kokonaismäärä (m2)</div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getTotalLand()[iLast]+'</div>';
			result += '<div class="tooltip_table__stat_data">'+format(s.getTotalLand()[iLast], {notation: 'engineering', precision: 4})+'</div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Asuntotonttimaan kokonaisarvo (euroa)</div>';			
			//result += '<div class="tooltip_table__stat_data">'+s.getTotalLandValue()[iLast]+'</div>';
			result += '<div class="tooltip_table__stat_data">'+format(s.getTotalLandValue()[iLast], {notation: 'engineering', precision: 4})+'</div>';
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">Asuntotonttimaan vuokratuotto vuodessa (euroa)</div>';
			//result += '<div class="tooltip_table__stat_data">'+s.getTotalLandRent()[iLast]+'</div>';
			result += '<div class="tooltip_table__stat_data">'+format(s.getTotalLandRent()[iLast], {notation: 'engineering', precision: 4})+'</div>';			
		result += '</div>';		
		
		// Tilasto info
		result += '<div class="tooltip_table__info">';
			result += '<div class="tooltip_table__info-title">Tilastoinfo</div>';
			result += '<div class="tooltip_table__info-text"> *Tilastojen neliömetriyksiköt (m2) ovat teknisesti kerrosneliömetrejä (kem2) eli maan arvo kohdistettuna asuntokohtaisesti</div> ';
		result += '</div>';			
		
		//Lohkon loppu
		result += '</div>';
		//console.log("\n",result);
	}
	return (result);
}

export function createStatTooltipTable (m: Municipality): string {
	let result: string = "<div>no data available</div>";
	let strTemp: string;
	let arrTemp: string [] = [];
	const yrLen: number = years.length;
	const s: Statistics = m.getStatistics();
	//console.log ("map "+years.map(function(x){return(x);}));
	//console.log ("flatmap "+years.flatMap((x) => {return(x);}));
	if (yrLen > 0) {
		// Luo tooltip html
		result = '<div class="tooltip_table">';
		
		result += '<div class="tooltip_table__title">Asuntomaan hinta kunnassa markkinahintaan</div>';
		
		result += '<div class="tooltip_table__header">';
			result += '<div class="tooltip_table__municipality">'+m.getName()+'</div>';
			arrTemp = years.map((x) => {return('<div class="tooltip_table__year">'+x+'</div>');})
			strTemp = arrTemp.join('');			
			result += strTemp;
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">keskimääräinen tonttiarvo per kem2 euroa</div>';
			result += s.getAvLandPrice().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">alin tonttiarvo per kem2 euroa</div>';
			result += s.getLowLandPrice().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';
			result +='<div class="tooltip_table__stat_title">korkein tonttiarvo per kem2 euroa</div>';
			result += s.getHighLandPrice().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">keskimääräinen tonttivuokra per kem2/kk euroa</div>';
			result += s.getAvLandRent().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">alin tonttivuokra per kem2/kk euroa </div>';
			result += s.getLowLandRent().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">korkein tonttivuokra per kem2/kk euroa</div>';
			result += s.getHighLandRent().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');		
		result += '</div>';

		result += '<div class="tooltip_table__header">';
			result += '<div class="tooltip_table__municipality">Maa yhteensä</div>';
			result += years.map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';

		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttien kokonaismäärä kem2</div>';
			result += s.getTotalLand().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttimaan kokonaisarvo euroa</div>';
			result += s.getTotalLandValue().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';		
		
		result +='<div class="tooltip_table__stat_line">';		
			result +='<div class="tooltip_table__stat_title">asuntotonttimaan vuokratuotto vuodessa euroa</div>';
			result += s.getTotalLandRent().map((x) => ('<div class="tooltip_table__stat_data">'+x+'</div>')).join('');			
		result += '</div>';		
		
		//Lohkon loppu
		result += '</div>';
		//console.log("\n",result);
	}
	return (result);
}

