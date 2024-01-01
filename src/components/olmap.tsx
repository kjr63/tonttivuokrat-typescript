import * as React from 'react';
import { useEffect } from 'react';
import Overlay from 'ol/Overlay.js';
import Circle from 'ol/geom/Circle.js';
import Polygon from 'ol/geom/Polygon.js';
import Point from 'ol/geom/Point.js';
import Feature from 'ol/Feature.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Circle as CircleStyle, Fill, Stroke, Style, Text} from 'ol/style.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {fromLonLat} from 'ol/proj';
import Control from 'ol/control/Control.js';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from "react-share";
import featureData from '../../data/feature-data.json';

let featureCollection = [];

const image = new CircleStyle({
  radius: 8,
  fill: new Fill({color:[250,128,114,0.5]}),
  stroke: new Stroke({color: 'red', width: 3}),
});

for ( let i=0; i < featureData.length; i++ ) {
	const feature = new Feature ({
		geometry: new Point (fromLonLat(featureData[i].coords)),
		output: featureData[i].output
	});
	feature.setStyle(new Style({
		image: image,
	}));
	featureCollection.push (feature);	
}

const vectorLayer = new VectorLayer({
	source: new VectorSource({
		features: featureCollection
	}),
});

export interface Props {
	year: string;
}

function OlMap ( {year}:Props ): React.JSX.Element {
	const mapYear = year;
	useEffect ( () => {
		const title: (HTMLElement | undefined) = document.getElementById('title') as (HTMLElement | undefined);
		const tooltip: (HTMLElement | undefined) = document.getElementById('tooltip') as (HTMLElement | undefined);			
		const report: (HTMLElement | undefined) = document.getElementById('report') as (HTMLElement | undefined);
		const share: (HTMLElement | undefined) = document.getElementById('share') as (HTMLElement | undefined);
		const mapTitle = new Control({element: title });		
		const valuationReport = new Control({element: report});
		const shareButtons = new Control({element: share});				
		const overlay = new Overlay({
			element: tooltip,
			offset: [10, 0],
			positioning: 'center-left'
		});		
		const map = new Map({
			layers: [
				new TileLayer({
				  source: new OSM(),
				}),
				vectorLayer,
			],
			target: 'map',
			view: new View({
				//center: fromLonLat([ 25.006641332, 60.298133721 ]),
				center: fromLonLat([ 25.472099070,	65.013784817]), // Oulu
				zoom: 5,
			}),
		});
		//overlay.setPosition(akaaCoords);
		map.addControl(mapTitle);
		map.addControl(valuationReport);
		map.addControl(shareButtons);
		map.addOverlay(overlay);		
		let selected: any = null;		
		map.on('pointermove', function (e) {
			if (selected !== null) {
				//selected.setStyle(undefined);
				overlay.setPosition(undefined);
				selected = null;
			}
			map.forEachFeatureAtPixel(e.pixel, function (f) {
				selected = f;
				//selectStyle.getFill().setColor(f.get('COLOR') || '#eeeeee');
				//f.setStyle(selectStyle);
				return true;
			});
			if (selected) {
				//console.log('tooltip hover');
				overlay.setPosition(e.coordinate);
				tooltip.innerHTML = selected.get('output');
			} else {
				tooltip.innerHTML = '';
			}
		});		
	}, []); // Vain kerran
	
	return (
		<div>		
			<div id="status"></div>
			<div className="controls">
				<div id="title">
					<div id="title__1">TONTTIVUOKRAT SUOMESSA {mapYear}</div>
					<div id="title__2">(Osoita kuntaa hiirellä)</div>
				</div>
				<div id="report">
					<a id="report__hlink" href="vendor/doc.txt">Arvonmääritysraportti</a>
				</div>
			</div>
			<div id="tooltip"></div>
			<main id="map" className="map"></main>
			<div id="share" className="share-buttons" >
				<TwitterShareButton
					title="Tonttivuokrat ja -hinnat Suomessa"
					url="https://tonttivuokrat.web.app/"
				>
					<TwitterIcon size={40} round={true} />
				</TwitterShareButton> 
				<pre>  </pre>
				<FacebookShareButton
					title="Tonttivuokrat ja -hinnat Suomessa"
					url="https://tonttivuokrat.web.app/"
				>
					<FacebookIcon size={40} round={true} />
				</FacebookShareButton> 
			</div>					
		</div>
	);
}

export default OlMap;


