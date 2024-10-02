import * as React from "react";
import { Link } from "react-router-dom";

function ValuationReport (): React.JSX.Element {
	
const reportText =

`

Arvonmääritysraportti
======================

Tässä on määritelty kuntien asuintonttien keskimääräiset arvot. Tulokset ovat karkeita arvioita, mutta perusteltuja näkemyksiä.


2.10.2024 Helsinki
Kaj Risberg
kjrs63@gmail.com



Menetelmät, lähteet ja laskentakaavat (esimerkkinä pk-seutu)
============================================================


Laskettavat muuttujat (lähtötiedot) ovat

avPrice			asunnon keskihinta kunnassa
avRent			asunnon keskivuokra kunnassa
lowPrice		asunnon alin hinta
hightPrice		korkein asunnon hinta
lowLandPrice	alin tonttiarvo
highLandPrice	korkein tonttiarvo
avLandPrice		keskimääräinen tonttiarvo
avLandRent		keskimääräinen tonttivuokra
highLandRent	korkein tonttivuokra
lowLandRent		alin tonttivuokra
totalLand		kunnan asuintonttien kokonaismäärä asuinneliöinä
totalLandValue	kunnan asuintonttien arvo yhteensä
totalLandRent	kunnan asuintonttien vuokra yhteensä
capInterest		paikallinen kapitalisointikerroin



Asuntojen, koko kiinteistön, hinnat
====================================


avPrice
--------

Saadaan sivustolta
https://www.asuntojenhinnat.fi/myytyjen-asuntojen-tilastot/kunta/helsinki

Sivulla on grafiikka, josta hiirellä saa näkyviin toteutuneuden kauppojen keskihinnat vuosineljänneksittäin.

avPrice = käytetään vuoden korkeinta hintaa, Ricardon periaatteen mukaan että arvo = korkein hinta
...................................................................................................


lowPrice
--------

Edellä mainitulla sivulla on myös keskihinnat alueittain kunnassa

lowPrice = halvimman alueen keskihinta
.................................................................



highPrice
----------

highPrice = kuten lowPrice mutta kalleimman alueen keskihinta
..............................................................


TONTTIARVOT
=============


lowLandPrice
-------------

Tämä on myös "kova" hintaindikaattori ja saadaan Maanmittauslaitoksen Kauppahintatilastosta osoitteessa

https://khr.maanmittauslaitos.fi/tilastopalvelu/rest/API/kiinteistokauppojen-tilastopalvelu.html?v=2023.0.0#t21g2_x_2022_x_Kunta

Matalimmaksi hinnaksi asetetetaan rakentamattomien pientalotonttien
yksityiseltä sektorilta ostettujen tonttien keskiarvohinta, eli rajatontin arvo

lowLandPrice = alin rakennetun tontin arvo = rakentamattoman tontin keskimääräinen kauppahinta + 25%
.....................................................................................................

25% on arvio joka tulee hintaan lisää kehittamiseen liittyvistä veroluonteisista maksuista ja maaverosta


highLandPrice
--------------

Määrittämiseen käytetään kahta menetelmää ja tulokseksi annetaan menetelmien antamien tulosten keskiarvo.

Menetelmät ovat 1.erotusarvomenetelmä ja 2.jakosuhdemenetelmä.

1.Erotusarvomenetelmä
----------------------

On "kauppa-arvomenetelmän" sovellutus.

Kun tiedämme kaksi kovaa hintatietoa, rajatontin kauppa-arvon (lowLandPrice) sekä halvimman asunnon kauppa-arvon (lowPrice), saamme keskimääräisen
RAKENNUKSEN arvon erotuksella, eli avBuildingPrice = lowPrice - lowLandPrice.

Ricardon maankäytön perusteorian mukaan "paras maa otetaan käyttöön ensin", ja siis huonoin viimeiseksi. Joten
puhtaasti teoreettisesti uusimmat rakennukset sijaitsevat huonoimmalla maalla, ja tätä marginaalin rakennuksen arvoa
voidaan käyttää suhteellisen hyvin koko kunnan rakennusten keskimääräisenä arvona.

Joten saamme:

highLandPrice = highPrice - avBuildingPrice
............................................


avLandPrice
------------

Kuten edellä

avLandPrice = avPrice - avBuildingPrice
.........................................

Käytännössä lienee kuitenkin niin, että sijainnin paremmuus näkyy myös rakennusten arvossa, joten voidaan olettaa, että erotusarvomenetelmä yliarvostaa tonttien arvoa siirryttäessä kohti keskustaa. Jakosuhdemenetelmän taas voidaan olettaa aliarvostavan tonttien arvoa


2. Jakosuhdemenetelmä
---------------------

Jakosuhdemenetelmä on yhdistelmä kauppa-arvo- ja kustannusarvomenetelmää. Kaupunkien asuntomarkkinoilla kustannusarvomenetelmä on IVS:ssä periaatteessa kielletty. Mutta menetelmä on kuitenkin hyvin selkeä ja yksinkertainen ja puoltaa paikkaansa, kun sitä käytetään uustuotantoon.
Jakosuhdemenetelmä lähtee siitä oletuksesta, että arvokkaammalle maalle rakennetaan myös arvokkaampia rakennuksia, ja tämä rakennuksen ja tontin välille jakautuneen arvon suhde pysyy jotakuinkin vakiona rajatontin ja keskustan välillä.

Lasketaan siis highLandPrice ja avLandPrice myös jakosuhdemenetelmällä.

Jakosuhdevakio lasketaan uuden omakotitalon rakennuskustannusten sekä rakentamattoman tontin (rajatontin) arvon perusteella.

Uuden omakotitalon rakennuskustannus määritellään kolmen lähteen perusteella:

1. Pientaloteollisuuden laskelmien mukaan

https://www.pientaloteollisuus.fi/fin/rakentajalle/keskimaarainen-omakotitalo/kustannukset/

2.Talopaketin muuttovalmiin hinnan perusteella

https://www.alvsbytalo.fi/talopaketit/

3.Tilastokeskuksen rakennuskustannusindeksin perusteella, jolla oikaistaan tarvittaessa edelliset tiedot kohdehetkeen

https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__rki/statfin_rki_pxt_11na.px/table/tableViewLayout1/

Vuodelle 2022 nämä antavat seuraavat hinnat rakenukselle:

1. Vuonna 2019 PTT:n mukaan rakennuskustannus oli

2053 e/kem2

rakennushintaindeksin mukaan indeksi oli vuonna 2019 104,1 ja vuonna 2022 118.5 eli

Rakennuskustannus vuonna 2022 on 118,5 * 2053 / 104,1 = 2337 e/kem2
                                                        ............

2. Vuonna 2022 muuttovalmiin Älvsbytalon (Siiri) hinta on

153 900 / 62,5 m2 = 2462 e/kem2
                    ............

Näiden kahden keskiarvo on 2400 e/kem2
                           ...........

Joten vuonnma 2022

jakosuhde = lowlandPrice / (lowlandPrice+2400)
................................

ja jakosuhdemenetelmällä laskettu

highLandPrice-2 = highPrice * jakosuhde
.......................................

ja

avLandPrice-2 = avPrice * jakosuhde
...................................


Tonttiarvot tulokset
---------------------

lowLandPrice = lowLandPrice
avLandPrice = avLandPrice-1 + avLandPrice-2 / 2
highLandPrice = highLandPrice-1 + highLandPrice-2 / 2


TONTTIVUOKRAT
==============

Tontin "arvo" tarkoittaa sen vuokratulon (tulovirran) pääoma-arvoa. Vuokratulon muuttamista arvoksi, eli pääoma-arvoksi, kutsutaan tulovirran kapitalisoimikseksi.
Tämä laskelma on teoreettisesti korkoa-korolle laskun kaava. Markkinoilla kuitenkin tavanomaisesti toimitaan vain yksikertaistetun kaavan mukaan eli Korko = Tulovirta / Pääoma.
Joten kun tiedämme markkinoilla käytetyn koron sijoitukselle, voimme laskea tonttivuokrat tonttihinnoista kaavalla Tulovirta = Korko * Pääoma eli Tonttivuokra = Korko * Tonttihinta.
Teoriassa korko sijoitukselle on vain riskipreemio, ja kun maata tavallisesti pidetään hyvin matalariskisenä sijoituksena, käyttävät sijoittajat korkona tavallisesti n. 5% korkoa. Esim:
https://www.valuepenguin.com/mortgages/how-do-you-get-a-land-loan

capInterest
------------

Korko voi kuitenkin olla taajamien ulkopuolella korkeampi kuin 5%. Tämä voi selittyä sillä että tontin arvo voi esim.  muuttotappipaikkamunnilla jopa laskea, ja tämä näkyy sitten riskipreemiossa.
Paikallinen korko voidaan selvittää vertaamalla paikallisia asuntojen markkinavuokria paikallisiin asuntojen markkinahintoihin.

capInterest = on siis avRent / avPrice

Keskivuokra (avRent) saadaan linkistä:

https://asuntojen.hintatiedot.fi/haku/vuokratiedot?c=tampere&ps=&r=2&renderType=renderTypeTable

avRent = kaikkien vapaarahoitteisten asuntojen keskivuokra

Vuokrien laskeminen
---------------------

Laskemme tässä tonttivuokrat de-kapitalisoimalla tonttien arvot tonttivuokriksi capInterest-korolla edellä esitetyn kaavan mukaan.
Kaavalla saadaan vuosivuokra, mutta koska vuokra tavallisesti ilmoitetaan kuukausivuokrana, jaetaan tulos 12:lla, ja saadaan vuokran yksikoksi siis e/kem2/kk.

Joten 

avLandRent = capInterest * avlandPrice /12
highLandRent = capInterest * highLandPrice / 12
lowLandRent = capInterest * lowLandPrice / 12


YHTEENSÄ
===========

Asuntojen määrä ja koko kunnittain saadaan tilastokeskukselta:

https://pxdata.stat.fi/PxWeb/pxweb/fi/StatFin/StatFin__asas/statfin_asas_pxt_115a.px/

Tilastokeskus ei tilastoi asuntojen määrää, vain asuntokuntien määrän. Lehtitietojen mukaan kuitenkin
yli 11% asunnoista on tyhjillään, joten asuntokuntiin täytyy lisätä tämä saadaksemme asuntomäärän

Tyhjät asunnot:

https://www.aamulehti.fi/uutiset/art-2000008869718.html

empty = 11%

joten 

totalHousingLand = asuntokuntien määrä * keskimääräinen asunnon koko / 0,89
totalHousingLandValue = totalHousingLand * avLandPrice
totalHousingLandRent = 5% * totalHousingLandValue (Tässä korkona käytetään yleistä sijoituskorkoa)


YHTEENVETO
=============

Esimerkki vuodelta 2021

Helsingin muuttujien arvot

avPrice = 5144
lowPrice = 2500
hightPrice = 9327
avRent = 19,7
capInterest = 4,6%
lowLandPrice = 1,25 * 1137 = 1421

avBuldingPrice = 2500 - 1421 = 1079
highLandPrice-1 = 9327 - 1079 = 8248
avLandPrice-1 = 5144 - 1079 = 4065
buildingCost = 2400
jakosuhde = 1421 / 3821 = 0,372
highLandPrice-2 = 9327 * 0,372 = 3470
avLandPrice-2 = 5144 * 0,372 = 1914

avLandPrice = (4065+1914)/2 = 2990
highLandprice = (8248+3470)/2 = 5850
avLandRent = 4,6% * 2990 / 12 = 11,46 e/kem2/kk
highLandRent = 4,6% * 5840 / 12 = 22,39 e/kem2/kk
lowLandRent = 4,6% * 1421 / 12 = 5,45  e/kem2/kk

householdCount = 350 809
avSize = 63,5
empty = 0,89

totalLand = householdCount * azSize / empty = 25,0296 * 10 pot 6
totalLandValue = totalLand * avLandPrice = 74,8386 * 10 pot 9
totalLandRent = totalLandValue * 5% = 3,7419 * 10 pot 9





`;


	return (
		<div className="report">
			<p><Link to="/"> Takaisin karttanäyttöön </Link></p>
			
			<pre>{reportText}</pre>
			
			<p><Link to="/"> Takaisin karttanäyttöön </Link></p>
		</div>
	);
}

export default ValuationReport;