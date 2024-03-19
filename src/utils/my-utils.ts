import { Municipality, MuniDO, Statistics, StatDO } from '../../api/api';
import years from '../../data/general-data.json';

export async function setImgData (data: string) {
  let myPromise = new Promise (function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  let help = await myPromise;
  console.log(help);
}

const outEnd = '</div>';
const outTitle = '<div class="town-title">Asunnon kunnassa ';
const outInfo = '<div class="town-info">kem2 = kerrosneliömetri, eli sama yksikkö kuin asunnon m2 = asuinneliömetri</div> ';
const outSubt1 = '<div class="town-subt">keskimääräinen hinta per kem2 euroa</div>';
const outSubt2 = '<div class="town-subt">alin hinta per kem2 euroa</div>';
const outSubt3 = '<div class="town-subt">korkein hinta per kem2 euroa</div>';
const outSubt4 = '<div class="town-subt">keskimääräinen tonttivuokra per kem2/kk euroa</div>';
const outSubt5 = '<div class="town-subt">keskimääräinen tonttiarvo per kem2 euroa </div>';
const outSubt6 = '<div class="town-subt">alin tonttivuokra per kem2/kk euroa </div>';
const outSubt7 = '<div class="town-subt">alin tonttiarvo per kem2 euroa </div>';
const outSubt8 = '<div class="town-subt">korkein tonttivuokra per kem2/kk euroa </div>';
const outSubt9 = '<div class="town-subt">korkein tonttiarvo per kem2 euroa </div>';
const outSubt10 = '<div class="town-subt">keskimääräinen vuokra per kem2/kk euroa</div>';
const outTitle2 = '<div class="town-title__2">Yhteensä kunnan ';
const outSubt11 = '<div class="town-subt">asuntotonttien kokonaismäärä kem2</div>';
const outSubt12 = '<div class="town-subt">asuntotonttimaan kokonaisarvo euroa</div>';
const outSubt13 = '<div class="town-subt">asuntotonttimaan vuokratuotto vuodessa euroa</div>';
const outVal = '<div class="town-value">';

export function createStatTooltip (m: Municipality): string {
	let result: string = "<div>no data available</div>";
	let temp: string;
	const yrLen: number = years.length;
	if (yrLen > 0) {
		//Lohkon alku
		result = "<div>";
		//Luo Otsikko
		result += outTitle+' markkinahintaan'+outEnd+outInfo;
		result += '<div class="stat-table__title">'+m.getName()+'</div>';
		for (let i = 0; i<years.length; i++) {
			result += '<div class="stat-table__year">'+years[i]+'</div>';
		}
		const s: Statistics = m.getStatistics();
		//Tilastotietorivit
		result += outSubt1;
		result += '<div class="stat-table__array">'+s.getAvLandPrice().map((x) => new Number(x).toFixed(0))+'</div>';
		result += outSubt2;
		result += outSubt3;
		result += outSubt4;
		result += outSubt5 ;
		result += outSubt6;
		result += outSubt7;
		result += outSubt8;
		result += outSubt9;
		result += outSubt10;
		result += outTitle2;
		result += outSubt11;
		result += outSubt12;
		result += outSubt13;
		result += outEnd;
		result += outVal;
		result += outEnd;
		
		//Lohkon loppu
		result += outEnd;
		console.log("",result);
	}
	return (result);
}
