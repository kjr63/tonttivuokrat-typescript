import {data} from '../../data/data.js';

const emptyFactor = 0.11; // Tyhjiä asuntoja 11%
const buildingCost = 2400 // Rakennuskustannus kustannusarvomenetelmällä
const capitalizationFactor = 0.05 // Kapitalisointikerroin 5%

function avBuildingPrice (lowPrice, lowLandPrice) {
	return (lowPrice - lowLandPrice);
}
function splitRatio (lowLandPrice, buildingCost) {
	return ( lowLandPrice / (lowLandPrice+buildingCost) );
}
function avLandPrice (avPrice, avBuildingPrice, splitRatio) {
	let result = 0;
	const avLPrice_1 = avPrice - avBuildingPrice;
	const avLPrice_2 = avPrice * splitRatio;
	result = (avLPrice_1 + avLPrice_2) / 2;
	return (result);
}
function highLandPrice (highPrice, avBuildingPrice, splitRatio) {
	let result = 0;
	const avHPrice_1 = highPrice - avBuildingPrice;
	const avHPrice_2 = highPrice * splitRatio;
	result = (avHPrice_1 + avHPrice_2) / 2;
	return (result);
}
function toLandRent (landPrice, capFactor) {
	return (capFactor * landPrice / 12);
}
function totalLand (houseCount, avSize, emptyFactor) {
	return (houseCount * avSize / (1-emptyFactor) );
}
function totalLandValue (landTotal, avLandPrice) {
	return (landTotal * avLandPrice);
}
function totalLandRent (landTotalValua, capFactor) {
	return (landTotalValua * capFactor);
}

function calcMapData (data) {
	let mapData = [];
	for (let i = 0; i < data.length; i++) {
		//Luo map-alkio
		let temp = {
			town: 			data[i].town,
			coords: 		data[i].coords,
			householdCount:	data[i].householdCount,
			avSize:			data[i].avSize,
			lowLandPrice:	data[i].lowLandPrice,
			avPrice: 		data[i].avPrice,
			lowPrice:		data[i].lowPrice,		
			highPrice:		data[i].highPrice,
			avRent:			data[i].avRent
		};
		const avBP = avBuildingPrice (data[i].lowPrice, data[i].lowLandPrice);
		const sR = splitRatio (data[i].lowLandPrice, buildingCost);
		
		temp.avLandPrice = avLandPrice (data[i].avPrice, avBP, sR);
		temp.highLandPrice = highLandPrice (data[i].highPrice, avBP, sR);
		temp.lowLandRent = toLandRent (data[i].lowLandPrice, capitalizationFactor);
		temp.avLandRent = toLandRent (temp.avLandPrice, capitalizationFactor);
		temp.highLandRent = toLandRent (temp.highLandPrice, capitalizationFactor);
		temp.totalLand = totalLand (data[i].householdCount, data[i].avSize, emptyFactor);
		temp.totalLandValue = totalLandValue (temp.totalLand, temp.avLandPrice);
		temp.totalLandRent = totalLandRent (temp.totalLandValue, capitalizationFactor);
		
		//Tallenna alkio puskuriin
		mapData.push (temp);
		//console.log ("temp",temp);
	}
	return (mapData);
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

function outputTooltip (data) {
	let result = 
		outTitle+'<b>'+data[0]+'</b>'+' markkinahintaan'+outEnd+
		outInfo+
		//outSubt1+outVal+data[1]+outEnd+ //Keskimääräinen hinta per m2
		//outSubt2+outVal+data[8]+outEnd+ //Alin hinta per m2
		//outSubt3+outVal+data[9]+outEnd+ //Korkein hinta per m2		
		outSubt5+outVal+data[3]+outEnd+ //Keskimääräinen tonttihinta
		outSubt7+outVal+data[5]+outEnd+ //Alin tonttihinta
		outSubt9+outVal+data[7]+outEnd+ //Korkein tonttihinta		
		//outSubt10+outVal+data[10]+outEnd+ //Keskimääräinen vuokra per m2/kk
		outSubt4+outVal+data[2]+outEnd+ //Keskimääräinen tonttivuokra
		outSubt6+outVal+data[4]+outEnd+ //Alin tonttivuokra
		outSubt8+outVal+data[6]+outEnd+ //Korkein tonttivuokra
		outTitle2+outEnd+
		outSubt11+outVal+data[11]+outEnd+ //asuntojen määrä
		outSubt12+outVal+data[12]+outEnd+ //asuintonttimaan arvo
		outSubt13+outVal+data[13]+outEnd; //asuintonttimaan vuokratuotto
	return result;
}
//
// Pääohjelma
//
// Laske tiedot
const mapData = calcMapData(data, countryTotal);
// Muodosta (html-elementit) tooltip-outputit ( sekä coords)
let tooltipData = [];
for ( let i=0; i < mapData.length; i++ ) {
	const dataOutput = [
		mapData [i].town,
		new Number(mapData [i].avPrice).toFixed(0),
		new Number(mapData [i].avLandRent).toFixed(2),
		new Number(mapData [i].avLandPrice).toFixed(0),
		new Number(mapData [i].lowLandRent).toFixed(2),
		new Number(mapData [i].lowLandPrice).toFixed(0),
		new Number(mapData [i].highLandRent).toFixed(2),
		new Number(mapData [i].highLandPrice).toFixed(0),
		new Number(mapData [i].lowPrice).toFixed(0),
		new Number(mapData [i].highPrice).toFixed(0),		
		new Number(mapData [i].avRent).toFixed(2),	
		format(mapData [i].totalLand, {notation: 'engineering', precision: 6}),	
		format(mapData [i].totalLandValue, {notation: 'engineering', precision: 6}),
		format(mapData [i].totalLandRent, {notation: 'engineering', precision: 6}),	
	];
	tooltipData.push({ coords:mapData[i].coords, output: outputTooltip(dataOutput)});	
}
for ( let i=0; i < tooltipData.length; i++) {
	console.log ("\n", tooltipData[i]);
}


export const mapData = calcMapData (data);



