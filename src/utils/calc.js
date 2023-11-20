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

export const mapData = calcMapData (data);



