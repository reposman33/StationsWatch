import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NS_STATIONS_ENDPOINT,
  OCP_APIM_SUBSCRIPTION_KEY,
} from '../../../apps/StationsWatch/src/app/environments/.environment';
import { Station, StationData, StationUitgebreid } from '../..//models';
import { map, Observable } from 'rxjs';
import { Landcode } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class NsApiService {
  private http = inject(HttpClient);
  private NS_STATIONS_ENDPOINT = NS_STATIONS_ENDPOINT;
  private OCP_APIM_SUBSCRIPTION_KEY = OCP_APIM_SUBSCRIPTION_KEY;

  public getStationsNamen(land: Landcode = 'NL'): Observable<Station[]> {
    return this.http.get<StationData>(this.NS_STATIONS_ENDPOINT, {
      headers: {
        'Ocp-Apim-Subscription-Key': this.OCP_APIM_SUBSCRIPTION_KEY,
        Accept: 'application/json',
      },
    })
    .pipe(
      map((data: StationData): Station[] =>
        data.payload
        .filter((station: StationUitgebreid): boolean => station.land === land)
        .map(
          (station: StationUitgebreid): Station => ({
            naam: station.namen.lang,
            cdCode: station.cdCode,
          })
        )
        .slice()
        .sort((a: Station, b: Station) =>
          a.naam.localeCompare(b.naam, 'nl', { sensitivity: 'base' })
        )
      )
    );
  }

  // utility om frequentieverdeling van landcodes op te halen van ns-api
  getAlleLanden() {
    const data = {
	"payload": [
		{
			"EVACode": "8002554",
			"UICCode": "8001063",
			"UICCdCode": "108001063",
			"code": "ABG",
			"ingangsDatum": "2025-08-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.489832,
			"lng": 10.206171,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg-Bergedorf",
				"middel": "Hamb.-Bergedorf",
				"kort": "Bergedorf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ABG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8002549",
			"UICCode": "8001071",
			"UICCdCode": "108001071",
			"code": "HAMH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.5526394,
			"lng": 10.0067103,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg Hbf",
				"middel": "Hamburg Hbf",
				"kort": "Hamburg H"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HAMH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8002548",
			"UICCode": "8001089",
			"UICCdCode": "108001089",
			"code": "DADF",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.560751,
			"lng": 80.02548,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg Dammtor",
				"middel": "Hamburg Dammtor",
				"kort": "H. Dammtor"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DADF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8002553",
			"UICCode": "8001093",
			"UICCdCode": "108001093",
			"code": "DAAG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.552695,
			"lng": 99.35175,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg-Altona",
				"middel": "Hamburg-Altona",
				"kort": "Ham-Altona"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAAG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000147",
			"UICCode": "8001134",
			"UICCdCode": "108001134",
			"code": "AHAR",
			"ingangsDatum": "2025-08-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.455908,
			"lng": 9.991701,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg-Harburg",
				"middel": "Hamburg-Harburg",
				"kort": "H.-Harburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AHAR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000238",
			"UICCode": "8001173",
			"UICCdCode": "108001173",
			"code": "DALBG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.249656,
			"lng": 10.41989,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lüneburg",
				"middel": "Lüneburg",
				"kort": "Lüneburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DALBG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000271",
			"UICCode": "8001295",
			"UICCdCode": "108001295",
			"code": "DEEN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 54.075752,
			"lng": 99.79816,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Neumünster",
				"middel": "Neumünster",
				"kort": "Neumünster"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DEEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000199",
			"UICCode": "8001304",
			"UICCdCode": "108001304",
			"code": "DAK",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 54.314985,
			"lng": 10.131976,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kiel Hbf",
				"middel": "Kiel Hbf",
				"kort": "Kiel Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8005362",
			"UICCode": "8001415",
			"UICCdCode": "108001415",
			"code": "DASW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 54.499457,
			"lng": 95.3814,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schleswig",
				"middel": "Schleswig",
				"kort": "Schleswig"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DASW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000103",
			"UICCode": "8001427",
			"UICCdCode": "108001427",
			"code": "DAF",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 54.774039,
			"lng": 94.36526,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Flensburg",
				"middel": "Flensburg",
				"kort": "Flensburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000237",
			"UICCode": "8001631",
			"UICCdCode": "108001631",
			"code": "DAL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.867547,
			"lng": 10.669821,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lübeck Hbf",
				"middel": "Lübeck Hbf",
				"kort": "Lübeck Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000139",
			"UICCode": "8002084",
			"UICCdCode": "108002084",
			"code": "MGZB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.460226,
			"lng": 10.278707,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Günzburg",
				"middel": "Günzburg",
				"kort": "Günzburg"
			},
			"synoniemen": [
				"Gunzburg"
			],
			"nearbyMeLocationId": {
				"value": "MGZB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8000013",
			"UICCode": "8002140",
			"UICCdCode": "108002140",
			"code": "MA",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.3654307143927,
			"lng": 10.88547706604,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Augsburg Hbf",
				"middel": "Augsburg Hbf",
				"kort": "Augsburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8010255",
			"UICCode": "8003004",
			"UICCdCode": "108003004",
			"code": "BHF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.5104989,
			"lng": 13.4346995,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Ostbahnhof",
				"middel": "Berlin Ostbhf",
				"kort": "Berlin Ost"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BHF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8010404",
			"UICCode": "8003025",
			"UICCdCode": "108003025",
			"code": "BSPD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.5343152,
			"lng": 13.1989467,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin-Spandau",
				"middel": "Berlin-Spandau",
				"kort": "Berlin-Spa"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BSPD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010406",
			"UICCode": "8003036",
			"UICCdCode": "108003036",
			"code": "BERZOO",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.5073407,
			"lng": 13.3324447,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Zoo",
				"middel": "Berlin Zoo",
				"kort": "Berlin Zoo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BERZOO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8089006",
			"UICCode": "8003147",
			"UICCdCode": "108003147",
			"code": "DBRGBV",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.493827,
			"lng": 13.497786,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Betr Rummelsburg",
				"middel": "Berl Rummelsburg",
				"kort": "Berlin Rum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DBRGBV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010113",
			"UICCode": "8003171",
			"UICCdCode": "108003171",
			"code": "FRANKO",
			"ingangsDatum": "2025-08-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.336163,
			"lng": 14.546509,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frankfurt (Oder)",
				"middel": "Frankfurt (Oder)",
				"kort": "Frankf(Od)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FRANKO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8013470",
			"UICCode": "8003328",
			"UICCdCode": "108003328",
			"code": "BBRN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.6755689,
			"lng": 13.5926414,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bernau (B Berlin)",
				"middel": "Bernau",
				"kort": "Bernau"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BBRN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8010109",
			"UICCode": "8003424",
			"UICCdCode": "108003424",
			"code": "BERFL",
			"ingangsDatum": "2025-08-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.3915,
			"lng": 13.513,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin-Schönefeld Flugh.",
				"middel": "Berlin-S Flugh.",
				"kort": "Berlin-Fl."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BERFL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8003200",
			"UICCode": "8005365",
			"UICCdCode": "108005365",
			"code": "FKW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.3128578,
			"lng": 9.4434024,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kassel-Wilhelmshöhe",
				"middel": "Kassel-Wilhelms.",
				"kort": "Kassel-W."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FKW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000115",
			"UICCode": "8005637",
			"UICCdCode": "108005637",
			"code": "FFU",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.55462,
			"lng": 9.6811906,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Fulda",
				"middel": "Fulda",
				"kort": "Fulda"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FFU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010022",
			"UICCode": "8006006",
			"UICCdCode": "108006006",
			"code": "BADSCH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.91851,
			"lng": 14.14,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bad Schandau",
				"middel": "Bad Schandau",
				"kort": "Bad Schand"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BADSCH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010085",
			"UICCode": "8006050",
			"UICCdCode": "108006050",
			"code": "DRESD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.04056,
			"lng": 13.73203,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dresden Hbf",
				"middel": "Dresden Hbf",
				"kort": "Dresden H."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DRESD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010089",
			"UICCode": "8006216",
			"UICCdCode": "108006216",
			"code": "DRESDN",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.065556,
			"lng": 13.740833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dresden-Neustadt",
				"middel": "Dresden-Neustadt",
				"kort": "Dresden-N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DRESDN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8098553",
			"UICCode": "8006900",
			"UICCdCode": "108006900",
			"code": "DAAS",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.551855,
			"lng": 99.34554,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamburg-Altona(S)",
				"middel": "Hamb.-Altona(S)",
				"kort": "Altona(S)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAAS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8011102",
			"UICCode": "8007799",
			"UICCdCode": "108007799",
			"code": "GSB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.5486327,
			"lng": 13.3904267,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Gesundbrunnen",
				"middel": "Berlin Gesundbr.",
				"kort": "Berlin Gsb"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GSB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000037",
			"UICCode": "8008016",
			"UICCdCode": "108008016",
			"code": "ESRT",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.442281,
			"lng": 7.55896,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schwerte (Ruhr)",
				"middel": "Schwerte (R)",
				"kort": "Schwerte"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESRT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000142",
			"UICCode": "8008073",
			"UICCdCode": "108008073",
			"code": "HAGEN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.362747,
			"lng": 7.460249,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hagen Hbf",
				"middel": "Hagen Hbf",
				"kort": "Hagen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HAGEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8006718",
			"UICCode": "8008082",
			"UICCdCode": "108008082",
			"code": "WUPPV",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.23351,
			"lng": 7.07237,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wuppertal-Vohwinkel",
				"middel": "Wupp-Vohwinkel",
				"kort": "Wupp-Vohw"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WUPPV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000085",
			"UICCode": "8008094",
			"UICCdCode": "108008094",
			"code": "DUSSEL",
			"ingangsDatum": "2017-06-07",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.220146,
			"lng": 6.793137,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Düsseldorf Hbf",
				"middel": "Düsseldorf Hbf",
				"kort": "Düsseldrf"
			},
			"synoniemen": [
				"Dusseldorf",
				"Dusseldorf Hbf"
			],
			"nearbyMeLocationId": {
				"value": "DUSSEL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8001795",
			"UICCode": "8008134",
			"UICCdCode": "108008134",
			"code": "EENP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.304892,
			"lng": 7.343285,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ennepetal",
				"middel": "Ennepetal",
				"kort": "Ennepetal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EENP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000033",
			"UICCode": "8008136",
			"UICCdCode": "108008136",
			"code": "KSWE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.290526,
			"lng": 7.289681,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schwelm",
				"middel": "Schwelm",
				"kort": "Schwelm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KSWE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8006719",
			"UICCode": "8008138",
			"UICCdCode": "108008138",
			"code": "KWO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.273839,
			"lng": 7.221483,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wuppertal-Oberbarmen",
				"middel": "Wuppertal-Oberb.",
				"kort": "Wup'tal-O"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KWO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8006596",
			"UICCode": "8008142",
			"UICCdCode": "108008142",
			"code": "KWBA",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.267082,
			"lng": 7.195929,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wuppertal-Barmen",
				"middel": "Wuppertal-Barmen",
				"kort": "Wup'tal-B"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KWBA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000266",
			"UICCode": "8008143",
			"UICCdCode": "108008143",
			"code": "WUPPH",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.25433,
			"lng": 7.14939,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wuppertal Hbf",
				"middel": "Wuppertal Hbf",
				"kort": "Wuppertal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WUPPH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000046",
			"UICCode": "8008246",
			"UICCdCode": "108008246",
			"code": "DESIE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.875939,
			"lng": 80.16508,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Siegen Hbf",
				"middel": "Siegen Hbf",
				"kort": "Siegen Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DESIE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001585",
			"UICCode": "8008327",
			"UICCdCode": "108008327",
			"code": "KDBI",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.2079752,
			"lng": 6.7735578,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Düsseldorf-Bilk",
				"middel": "Düsseldorf-Bilk",
				"kort": "Düssel.Bi"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KDBI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000149",
			"UICCode": "8010002",
			"UICCdCode": "108010002",
			"code": "HAMM",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.678078,
			"lng": 7.807821,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hamm (Westf.)",
				"middel": "Hamm (Westf.)",
				"kort": "Hamm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HAMM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8000080",
			"UICCode": "8010053",
			"UICCdCode": "108010053",
			"code": "EDO",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.517896,
			"lng": 7.45929,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dortmund Hbf",
				"middel": "Dortmund Hbf",
				"kort": "Dortmund"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8000239",
			"UICCode": "8010098",
			"UICCdCode": "108010098",
			"code": "ELUE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.61713,
			"lng": 7.52949,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lünen Hbf",
				"middel": "Lünen Hbf",
				"kort": "Lünen Hbf"
			},
			"synoniemen": [
				"Lunen"
			],
			"nearbyMeLocationId": {
				"value": "ELUE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004883",
			"UICCode": "8010100",
			"UICCdCode": "108010100",
			"code": "EPRN",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.58833,
			"lng": 7.53933,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Preussen",
				"middel": "Preussen",
				"kort": "Preussen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EPRN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001530",
			"UICCode": "8010101",
			"UICCdCode": "108010101",
			"code": "EDD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.56754,
			"lng": 7.52855,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dortmund-Derne",
				"middel": "Dortmund-Derne",
				"kort": "Dortmund-D"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001533",
			"UICCode": "8010102",
			"UICCdCode": "108010102",
			"code": "EDKD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.547076,
			"lng": 7.510099,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dortmund-Kirchderne",
				"middel": "Dortmund-Kirchd.",
				"kort": "Dortmund-K"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDKD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000118",
			"UICCode": "8010144",
			"UICCdCode": "108010144",
			"code": "GSK",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.5049334,
			"lng": 7.0996378,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Gelsenkirchen Hbf",
				"middel": "Gelsenkirchen",
				"kort": "Gelsenk."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GSK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000041",
			"UICCode": "8010179",
			"UICCdCode": "108010179",
			"code": "DBOCH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.478609,
			"lng": 72.23275,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bochum Hbf",
				"middel": "Bochum Hbf",
				"kort": "Bochum Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DBOCH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000098",
			"UICCode": "8010184",
			"UICCdCode": "108010184",
			"code": "EE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.4504775,
			"lng": 7.0111232,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Essen hbf",
				"middel": "Essen hbf",
				"kort": "Essen hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000286",
			"UICCode": "8010263",
			"UICCdCode": "108010263",
			"code": "OBERH",
			"ingangsDatum": "2017-06-07",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.47512,
			"lng": 6.852038,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Oberhausen Hbf",
				"middel": "Oberhausen Hbf",
				"kort": "Oberhausen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OBERH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8004542",
			"UICCode": "8010266",
			"UICCdCode": "108010266",
			"code": "OBERHS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.512222,
			"lng": 6.843611,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Oberhausen-Sterkrade",
				"middel": "Oberh-Sterkrade",
				"kort": "Ob-Sterkr"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OBERHS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004540",
			"UICCode": "8010268",
			"UICCdCode": "108010268",
			"code": "EOHT",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.5343353,
			"lng": 6.8070141,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Oberhausen-Holten",
				"middel": "Oberh.-Holten",
				"kort": "Ob.-Holten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EOHT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001469",
			"UICCode": "8010269",
			"UICCdCode": "108010269",
			"code": "EDIN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.5671894,
			"lng": 6.7378317,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dinslaken",
				"middel": "Dinslaken",
				"kort": "Dinslaken"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDIN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8006098",
			"UICCode": "8010272",
			"UICCdCode": "108010272",
			"code": "EVD",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.5977395,
			"lng": 6.6838737,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Voerde (Niederrhein)",
				"middel": "Voerde (N.rhein)",
				"kort": "Voerde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EVD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000242",
			"UICCode": "8010275",
			"UICCdCode": "108010275",
			"code": "WESEL",
			"ingangsDatum": "2017-04-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.655833,
			"lng": 6.627222,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wesel",
				"middel": "Wesel",
				"kort": "Wesel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WESEL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004024",
			"UICCode": "8010281",
			"UICCdCode": "108010281",
			"code": "KMIL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.80946,
			"lng": 6.40001,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Millingen(b Rees)",
				"middel": "Millingen (Rees)",
				"kort": "Millingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KMIL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003943",
			"UICCode": "8010283",
			"UICCdCode": "108010283",
			"code": "EHMO",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.7389599,
			"lng": 6.5137439,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mehrhoog",
				"middel": "Mehrhoog",
				"kort": "Mehrhoog"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHMO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8002536",
			"UICCode": "8010284",
			"UICCdCode": "108010284",
			"code": "EHAD",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.7723623,
			"lng": 6.4514185,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Haldern (Rheinl)",
				"middel": "Haldern (Rheinl)",
				"kort": "Haldern Rh"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHAD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001780",
			"UICCode": "8010285",
			"UICCdCode": "108010285",
			"code": "EEMP",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.7982447,
			"lng": 6.4158979,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Empel-Rees",
				"middel": "Empel-Rees",
				"kort": "Empel-Rees"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EEMP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004878",
			"UICCode": "8010286",
			"UICCdCode": "108010286",
			"cdCode": 694,
			"code": "EPRA",
			"ingangsDatum": "2022-06-24",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.821944,
			"lng": 6.345556,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Praest",
				"middel": "Praest",
				"kort": "Praest"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EPRA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001773",
			"UICCode": "8010288",
			"UICCdCode": "108010288",
			"cdCode": 695,
			"code": "EM",
			"ingangsDatum": "2022-06-24",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.834283,
			"lng": 6.255718,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Emmerich",
				"middel": "Emmerich",
				"kort": "Emmerich"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8000040",
			"UICCode": "8010292",
			"UICCdCode": "108010292",
			"code": "BCHZ",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.83412,
			"lng": 6.620426,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bocholt",
				"middel": "Bocholt",
				"kort": "Bocholt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BCHZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8006356",
			"UICCode": "8010297",
			"UICCdCode": "108010297",
			"code": "EWFK",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.6766705,
			"lng": 6.6138257,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wesel Feldmark",
				"middel": "Wesel Feldmark",
				"kort": "W.Feldmark"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EWFK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000086",
			"UICCode": "8010316",
			"UICCdCode": "108010316",
			"code": "DUISB",
			"ingangsDatum": "2017-06-07",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.4297785713316,
			"lng": 6.77590370178222,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Duisburg Hbf",
				"middel": "Duisburg Hbf",
				"kort": "Duisburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DUISB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8000171",
			"UICCode": "8010382",
			"UICCdCode": "108010382",
			"code": "EUN",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.5385828,
			"lng": 7.6953056,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Unna",
				"middel": "Unna",
				"kort": "Unna"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EUN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000392",
			"UICCode": "8010384",
			"UICCdCode": "108010384",
			"code": "EHZW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.504767,
			"lng": 7.619647,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Holzwickede",
				"middel": "Holzwickede",
				"kort": "H'wickede"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHZW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001061",
			"UICCode": "8010385",
			"UICCdCode": "108010385",
			"code": "EBEO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.598015,
			"lng": 7.757296,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bönen",
				"middel": "Bönen",
				"kort": "Bönen"
			},
			"synoniemen": [
				"Bonen"
			],
			"nearbyMeLocationId": {
				"value": "EBEO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000250",
			"UICCode": "8011018",
			"UICCdCode": "108011018",
			"code": "FW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.0710408,
			"lng": 8.2389108,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wiesbaden Hbf",
				"middel": "Wiesbaden Hbf",
				"kort": "Wiesbaden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8002041",
			"UICCode": "8011065",
			"UICCdCode": "108011065",
			"code": "FFS",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.099444,
			"lng": 8.686389,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frankfurt (Main) Süd",
				"middel": "Frankfurt (M)Süd",
				"kort": "Frankf.Süd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FFS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000105",
			"UICCode": "8011068",
			"UICCdCode": "108011068",
			"code": "FFFM",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.1071222,
			"lng": 8.6638338,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frankfurt (M) Hbf",
				"middel": "Frankfurt Hbf",
				"kort": "Frankfurt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FFFM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8070004",
			"UICCode": "8011090",
			"UICCdCode": "108011090",
			"code": "FNAR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.0511634,
			"lng": 8.5682151,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frankfurt Flugh. Regiobf.",
				"middel": "Frankfurt FlughR",
				"kort": "FrankfurtR"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FNAR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8006552",
			"UICCode": "8013017",
			"UICCdCode": "108013017",
			"code": "HWOB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.429492,
			"lng": 10.788195,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wolfsburg Hbf",
				"middel": "Wolfsburg Hbf",
				"kort": "Wolfsburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWOB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8000159",
			"UICCode": "8013228",
			"UICCdCode": "108013228",
			"code": "DHHLM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.222086,
			"lng": 11.010553,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Helmstedt",
				"middel": "Helmstedt",
				"kort": "Helmstedt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DHHLM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000049",
			"UICCode": "8013240",
			"UICCdCode": "108013240",
			"code": "DBRSC",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.252218,
			"lng": 10.540295,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Braunschweig Hbf",
				"middel": "Braunschweig Hbf",
				"kort": "Braunschw."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DBRSC",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "800307",
			"UICCode": "8013241",
			"UICCdCode": "108013241",
			"code": "BRAUNS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.25224,
			"lng": 10.53971,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Recklinghausen Hbf",
				"middel": "Recklinghausen",
				"kort": "Recklingh."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRAUNS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000152",
			"UICCode": "8013552",
			"UICCdCode": "108013552",
			"code": "HANN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.3770401,
			"lng": 9.7416759,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hannover Hbf",
				"middel": "Hannover Hbf",
				"kort": "Hannover H"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HANN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8003487",
			"UICCode": "8013555",
			"UICCdCode": "108013555",
			"code": "HHMZ",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.316899,
			"lng": 9.792863,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hannover Messe/Laatzen",
				"middel": "Hannover Messe/L",
				"kort": "Hann M/L"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HHMZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000268",
			"UICCode": "8013565",
			"UICCdCode": "108013565",
			"code": "HWIJN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.422225,
			"lng": 9.450976,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wunstorf",
				"middel": "Wunstorf",
				"kort": "Wunstorf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWIJN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000252",
			"UICCode": "8013578",
			"UICCdCode": "108013578",
			"code": "MINDEN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.290138,
			"lng": 8.934728,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Minden (Westf)",
				"middel": "Minden (Westf)",
				"kort": "Minden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MINDEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000732",
			"UICCode": "8013585",
			"UICCdCode": "108013585",
			"code": "OEYNH",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.205461,
			"lng": 8.796932,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bad Oeynhausen",
				"middel": "Bad Oeynhausen",
				"kort": "Bad Oeynh"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OEYNH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000162",
			"UICCode": "8013593",
			"UICCdCode": "108013593",
			"code": "EHFD",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.1194178,
			"lng": 8.6618908,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Herford",
				"middel": "Herford",
				"kort": "Herford"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHFD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001118",
			"UICCode": "8013596",
			"UICCdCode": "108013596",
			"code": "EBRA",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.0698228,
			"lng": 8.6017576,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Brake (b Bielefeld)",
				"middel": "Brake bBielefeld",
				"kort": "Brake (b)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EBRA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000036",
			"UICCode": "8013597",
			"UICCdCode": "108013597",
			"code": "BIELEF",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.029261,
			"lng": 8.532722,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bielefeld Hbf",
				"middel": "Bielefeld Hbf",
				"kort": "Bielefeld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BIELEF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000168",
			"UICCode": "8013623",
			"UICCdCode": "108013623",
			"code": "DHU",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.969781,
			"lng": 10.553053,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Uelzen",
				"middel": "Uelzen",
				"kort": "Uelzen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DHU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000064",
			"UICCode": "8013632",
			"UICCdCode": "108013632",
			"code": "DHC",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.6204548,
			"lng": 10.062468,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Celle",
				"middel": "Celle",
				"kort": "Celle"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DHC",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000050",
			"UICCode": "8013751",
			"UICCdCode": "108013751",
			"code": "BREMEN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.083481,
			"lng": 8.813834,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bremen Hbf",
				"middel": "Bremen Hbf",
				"kort": "Bremen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BREMEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8000244",
			"UICCode": "8014008",
			"UICCdCode": "108014008",
			"code": "MANNHE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.479354,
			"lng": 8.468921,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mannheim Hbf",
				"middel": "Mannheim Hbf",
				"kort": "Mannheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MANNHE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000191",
			"UICCode": "8014228",
			"UICCdCode": "108014228",
			"code": "KARLSR",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.9936223,
			"lng": 8.400743,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Karlsruhe Hbf",
				"middel": "Karlsruhe Hbf",
				"kort": "Karlsruhe"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KARLSR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000774",
			"UICCode": "8014277",
			"UICCdCode": "108014277",
			"code": "RBB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.789588,
			"lng": 8.1863869,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Baden-Baden",
				"middel": "Baden-Baden",
				"kort": "Baden-B."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RBB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000290",
			"UICCode": "8014309",
			"UICCdCode": "108014309",
			"code": "RO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.476475,
			"lng": 7.946723,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Offenburg",
				"middel": "Offenburg",
				"kort": "Offenburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8005101",
			"UICCode": "8014325",
			"UICCdCode": "108014325",
			"code": "RRI",
			"ingangsDatum": "2024-01-18",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.2660194,
			"lng": 7.7220076,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ringsheim/Europa-Park",
				"middel": "Ringsheim/Eur.-P",
				"kort": "Ringsheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RRI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000107",
			"UICCode": "8014350",
			"UICCdCode": "108014350",
			"code": "RF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.99789,
			"lng": 7.84134,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Freiburg (Breisgau) Hbf",
				"middel": "Freiburg (B.)",
				"kort": "Freiburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8000026",
			"UICCode": "8014431",
			"UICCdCode": "108014431",
			"code": "BASELB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.56815,
			"lng": 7.6073,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Basel Bad Bf",
				"middel": "Basel Bad Bf",
				"kort": "Basel Bad"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BASELB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000073",
			"UICCode": "8014558",
			"UICCdCode": "108014558",
			"code": "DSLI",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.7588801,
			"lng": 88.4126902,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Singen(Hohentwiel)",
				"middel": "Singen(Hohentw.)",
				"kort": "Singen Ho."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DSLI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8003368",
			"UICCode": "8015032",
			"UICCdCode": "108015032",
			"code": "KKD",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.940874,
			"lng": 6.975001,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln Messe/Deutz",
				"middel": "Köln Messe/Deutz",
				"kort": "Köln Messe"
			},
			"synoniemen": [
				"Koln Deutz"
			],
			"nearbyMeLocationId": {
				"value": "KKD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8000174",
			"UICCode": "8015122",
			"UICCdCode": "108015122",
			"code": "VIERS",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.25516,
			"lng": 6.40388,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Viersen",
				"middel": "Viersen",
				"kort": "Viersen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VIERS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001571",
			"UICCode": "8015125",
			"UICCdCode": "108015125",
			"code": "KDUL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.257149,
			"lng": 6.33793,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dülken",
				"middel": "Dülken",
				"kort": "Dülken"
			},
			"synoniemen": [
				"Dulken"
			],
			"nearbyMeLocationId": {
				"value": "KDUL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001072",
			"UICCode": "8015128",
			"UICCdCode": "108015128",
			"code": "KBOI",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.274323,
			"lng": 6.274591,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Boisheim",
				"middel": "Boisheim",
				"kort": "Boisheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KBOI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001180",
			"UICCode": "8015129",
			"UICCdCode": "108015129",
			"code": "KBRY",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.294615,
			"lng": 6.241174,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Breyell",
				"middel": "Breyell",
				"kort": "Breyell"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KBRY",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000190",
			"UICCode": "8015130",
			"UICCdCode": "108015130",
			"code": "KN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.327184,
			"lng": 6.203225,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kaldenkirchen",
				"middel": "Kaldenkirchen",
				"kort": "Kaldenkir"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000274",
			"UICCode": "8015149",
			"UICCdCode": "108015149",
			"code": "NEUSS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.20444,
			"lng": 6.68468,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Neuss Hbf",
				"middel": "Neuss Hbf",
				"kort": "Neuss"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NEUSS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000253",
			"UICCode": "8015165",
			"UICCdCode": "108015165",
			"code": "MCGB",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.196583,
			"lng": 6.446111,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mönchengladbach Hbf",
				"middel": "Mönchengladbach",
				"kort": "Mönchengl"
			},
			"synoniemen": [
				"Monchengladbach Hbf",
				"Monchengladbach"
			],
			"nearbyMeLocationId": {
				"value": "MCGB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8002806",
			"UICCode": "8015190",
			"UICCdCode": "108015190",
			"cdCode": 827,
			"code": "HZ",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.870916,
			"lng": 6.094486,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Herzogenrath",
				"middel": "Herzogenrath",
				"kort": "Herzogenr"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003395",
			"UICCode": "8015195",
			"UICCdCode": "108015195",
			"code": "KOHL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.831728,
			"lng": 6.074485,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kohlscheid",
				"middel": "Kohlscheid",
				"kort": "Kohlscheid"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KOHL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000404",
			"UICCode": "8015199",
			"UICCdCode": "108015199",
			"cdCode": 828,
			"code": "AW",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.78036,
			"lng": 6.070715,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aachen West",
				"middel": "Aachen West",
				"kort": "Aachen W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005159",
			"UICCode": "8015300",
			"UICCdCode": "108015300",
			"code": "ROMM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.039933,
			"lng": 6.69959,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rommerskirchen",
				"middel": "Rommerskirchen",
				"kort": "Rommersk."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ROMM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004898",
			"UICCode": "8015319",
			"UICCdCode": "108015319",
			"code": "PULH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.998043,
			"lng": 6.797051,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Pulheim",
				"middel": "Pulheim",
				"kort": "Pulheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PULH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005746",
			"UICCode": "8015320",
			"UICCdCode": "108015320",
			"code": "STOMM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.018092,
			"lng": 6.752466,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stommeln",
				"middel": "Stommeln",
				"kort": "Stommeln"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STOMM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000208",
			"UICCode": "8015321",
			"UICCdCode": "108015321",
			"code": "KKERP",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.951533,
			"lng": 6.917276,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln-Ehrenfeld",
				"middel": "Köln-Ehrenfeld",
				"kort": "Köln-Ehre"
			},
			"synoniemen": [
				"Koln-Ehrenfeld"
			],
			"nearbyMeLocationId": {
				"value": "KKERP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000084",
			"UICCode": "8015330",
			"UICCdCode": "108015330",
			"code": "KDR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.809517,
			"lng": 6.482451,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Düren",
				"middel": "Düren",
				"kort": "Düren"
			},
			"synoniemen": [
				"Duren"
			],
			"nearbyMeLocationId": {
				"value": "KDR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8003553",
			"UICCode": "8015334",
			"UICCdCode": "108015334",
			"code": "LANG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.817909,
			"lng": 6.353467,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Langerwehe",
				"middel": "Langerwehe",
				"kort": "Langerwehe"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LANG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001886",
			"UICCode": "8015336",
			"UICCdCode": "108015336",
			"code": "ESCH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.813532,
			"lng": 6.251937,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eschweiler Hbf",
				"middel": "Eschweiler Hbf",
				"kort": "Eschweiler"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESCH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000348",
			"UICCode": "8015338",
			"UICCdCode": "108015338",
			"code": "STOLB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.7944104,
			"lng": 6.21715667,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stolberg(Rhein)Hbf",
				"middel": "Stolberg Hbf",
				"kort": "Stolberg H"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STOLB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001712",
			"UICCode": "8015341",
			"UICCdCode": "108015341",
			"code": "EDF",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.785561,
			"lng": 6.154367,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eilendorf",
				"middel": "Eilendorf",
				"kort": "Eilendorf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000406",
			"UICCode": "8015342",
			"UICCdCode": "108015342",
			"code": "ARE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.7702,
			"lng": 6.1119739,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aachen Rothe Erde",
				"middel": "Aachen R. Erde",
				"kort": "Aachen RE"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ARE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000001",
			"UICCode": "8015345",
			"UICCdCode": "108015345",
			"cdCode": 38,
			"code": "AHBF",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.7678,
			"lng": 6.091499,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aachen Hbf",
				"middel": "Aachen Hbf",
				"kort": "Aachen"
			},
			"synoniemen": [
				"Aken"
			],
			"nearbyMeLocationId": {
				"value": "AHBF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8000207",
			"UICCode": "8015458",
			"UICCdCode": "108015458",
			"code": "KOLN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.9432158,
			"lng": 6.9589214,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln Hbf",
				"middel": "Köln Hbf",
				"kort": "Köln Hbf"
			},
			"synoniemen": [
				"Koln",
				"Koln Hbf",
				"Keulen"
			],
			"nearbyMeLocationId": {
				"value": "KOLN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8003363",
			"UICCode": "8015468",
			"UICCdCode": "108015468",
			"code": "KKW",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.943611,
			"lng": 6.934444,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln West",
				"middel": "Köln West",
				"kort": "Köln West"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KKW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8003361",
			"UICCode": "8015469",
			"UICCdCode": "108015469",
			"code": "KKS",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.926991,
			"lng": 6.9353801,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln Süd",
				"middel": "Köln Süd",
				"kort": "Köln Süd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KKS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000044",
			"UICCode": "8015485",
			"UICCdCode": "108015485",
			"code": "BONN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.7320141646745,
			"lng": 7.09712505340576,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bonn Hbf",
				"middel": "Bonn Hbf",
				"kort": "Bonn Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BONN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000209",
			"UICCode": "8015541",
			"UICCdCode": "108015541",
			"code": "KKM",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.958056,
			"lng": 7.013333,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Köln-Mülheim",
				"middel": "Köln-Mülheim",
				"kort": "Köln-Mülh."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KKM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000135",
			"UICCode": "8015572",
			"UICCdCode": "108015572",
			"code": "KT",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.813889,
			"lng": 7.150833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Troisdorf",
				"middel": "Troisdorf",
				"kort": "Troisdorf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001083",
			"UICCode": "8015577",
			"UICCdCode": "108015577",
			"code": "KBB",
			"ingangsDatum": "2021-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.738611,
			"lng": 7.127778,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bonn-Beuel",
				"middel": "Bonn-Beuel",
				"kort": "Bonn-Beuel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KBB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8005556",
			"UICCode": "8015588",
			"UICCdCode": "108015588",
			"code": "KSB",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.7939411,
			"lng": 7.2030017,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Siegburg/Bonn",
				"middel": "Siegburg/Bonn",
				"kort": "Siegburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KSB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000206",
			"UICCode": "8019023",
			"UICCdCode": "108019023",
			"code": "KKO",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.351085,
			"lng": 7.588649,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Koblenz Hbf",
				"middel": "Koblenz Hbf",
				"kort": "Koblenz"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KKO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000240",
			"UICCode": "8019051",
			"UICCdCode": "108019051",
			"code": "FMZ",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.001117,
			"lng": 8.25872,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mainz Hbf",
				"middel": "Mainz Hbf",
				"kort": "Mainz Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FMZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000667",
			"UICCode": "8019585",
			"UICCdCode": "108019585",
			"code": "KMB",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.444834,
			"lng": 7.825333,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Montabaur",
				"middel": "Montabaur",
				"kort": "Montabaur"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KMB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000320",
			"UICCode": "8020174",
			"UICCdCode": "108020174",
			"code": "ROSENH",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.85,
			"lng": 12.119167,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rosenheim",
				"middel": "Rosenheim",
				"kort": "Rosenheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ROSENH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000262",
			"UICCode": "8020234",
			"UICCdCode": "108020234",
			"code": "STRAUB",
			"ingangsDatum": "2022-06-24",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.1275,
			"lng": 11.605,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "München Ost",
				"middel": "München Ost",
				"kort": "München O"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STRAUB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8004158",
			"UICCode": "8020286",
			"UICCdCode": "108020286",
			"code": "DMP",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.1486016,
			"lng": 11.4597823,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "München-Pasing",
				"middel": "München-Pasing",
				"kort": "M.Pasing"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DMP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8002187",
			"UICCode": "8020295",
			"UICCdCode": "108020295",
			"code": "MGP",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.491452,
			"lng": 11.097013,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Garmisch-Partenkirchen",
				"middel": "Garmisch-Part.",
				"kort": "Garmisch"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MGP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004506",
			"UICCode": "8020297",
			"UICCdCode": "108020297",
			"code": "MOU",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.559273,
			"lng": 11.139272,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Oberau",
				"middel": "Oberau",
				"kort": "Oberau"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MOU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004185",
			"UICCode": "8020301",
			"UICCdCode": "108020301",
			"code": "MMU",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.682266,
			"lng": 11.192628,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Murnau",
				"middel": "Murnau",
				"kort": "Murnau"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MMU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000220",
			"UICCode": "8020305",
			"UICCdCode": "108020305",
			"code": "MWH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 47.845363,
			"lng": 11.14286,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Weilheim (Oberbay)",
				"middel": "Weilheim (Oberb)",
				"kort": "Weilheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MWH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000261",
			"UICCode": "8020347",
			"UICCdCode": "108020347",
			"code": "MUNCHH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.1402033359505,
			"lng": 11.558346748352,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "München Hbf",
				"middel": "München Hbf",
				"kort": "München"
			},
			"synoniemen": [
				"Munchen Hbf",
				"Munchen"
			],
			"nearbyMeLocationId": {
				"value": "MUNCHH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8000083",
			"UICCode": "8021005",
			"UICCdCode": "108021005",
			"code": "EDULH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.827927,
			"lng": 7.295756,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Dülmen",
				"middel": "Dülmen",
				"kort": "Dülmen"
			},
			"synoniemen": [
				"Dulmen"
			],
			"nearbyMeLocationId": {
				"value": "EDULH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000263",
			"UICCode": "8021011",
			"UICCdCode": "108021011",
			"code": "MUNST",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.956892,
			"lng": 7.635895,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Münster (Westf) Hbf",
				"middel": "Münster (Westf)",
				"kort": "Münster"
			},
			"synoniemen": [
				"Munster (Westf.)"
			],
			"nearbyMeLocationId": {
				"value": "MUNST",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8000294",
			"UICCode": "8021025",
			"UICCdCode": "108021025",
			"code": "OSNH",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.272851,
			"lng": 8.061781,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Osnabrück Hbf",
				"middel": "Osnabrück Hbf",
				"kort": "Osnabrück"
			},
			"synoniemen": [
				"Osnabruck Hbf"
			],
			"nearbyMeLocationId": {
				"value": "OSNH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8004689",
			"UICCode": "8021031",
			"UICCdCode": "108021031",
			"code": "HOHT",
			"ingangsDatum": "2025-08-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2808815,
			"lng": 8.0278596,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Osnabrück Altstadt",
				"middel": "Osnabr. Altstadt",
				"kort": "Altstadt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HOHT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000316",
			"UICCode": "8021067",
			"UICCdCode": "108021067",
			"code": "RHEINE",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.276299,
			"lng": 7.434255,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rheine",
				"middel": "Rheine",
				"kort": "Rheine"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RHEINE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8005262",
			"UICCode": "8021071",
			"UICCdCode": "108021071",
			"code": "HSAL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.3229209,
			"lng": 7.3457991,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Salzbergen",
				"middel": "Salzbergen",
				"kort": "Salzbergen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HSAL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000225",
			"UICCode": "8021091",
			"UICCdCode": "108021091",
			"cdCode": 109,
			"code": "LEER",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.23165,
			"lng": 7.465283,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Leer (Ostfriesl)",
				"middel": "Leer (Ostfr.)",
				"kort": "Leer"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LEER",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001097",
			"UICCode": "8021111",
			"UICCdCode": "108021111",
			"code": "EBOK",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.66988,
			"lng": 7.45664,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bork (Westf)",
				"middel": "Bork (Westf)",
				"kort": "Bork"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EBOK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005525",
			"UICCode": "8021112",
			"UICCdCode": "108021112",
			"code": "ESEM",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.707885,
			"lng": 7.453396,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Selm",
				"middel": "Selm",
				"kort": "Selm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESEM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003783",
			"UICCode": "8021113",
			"UICCdCode": "108021113",
			"code": "ELDH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.76184,
			"lng": 7.43165,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lüdinghausen",
				"middel": "Lüdinghausen",
				"kort": "Lü'hausen"
			},
			"synoniemen": [
				"Ludinghausen"
			],
			"nearbyMeLocationId": {
				"value": "ELDH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003658",
			"UICCode": "8021117",
			"UICCdCode": "108021117",
			"code": "ELET",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.8925,
			"lng": 7.187,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lette (Kr Coesfeld)",
				"middel": "Lette (Kr Coes)",
				"kort": "Lette"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ELET",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000066",
			"UICCode": "8021119",
			"UICCdCode": "108021119",
			"code": "ECMF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.939,
			"lng": 7.1642,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Coesfeld (Westf)",
				"middel": "Coesfeld (Westf)",
				"kort": "Coesfeld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ECMF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005526",
			"UICCode": "8021120",
			"UICCdCode": "108021120",
			"code": "ESEB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.692947,
			"lng": 7.454829,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Selm-Beifang",
				"middel": "Selm-Beifang",
				"kort": "Selm-B"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESEB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8002972",
			"UICCode": "8021121",
			"UICCdCode": "108021121",
			"code": "EHW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.9994672604096,
			"lng": 7.1215009689331,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rosendahl-Holtwick",
				"middel": "Rosendahl-Holtw.",
				"kort": "Rosend-H"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003608",
			"UICCode": "8021122",
			"UICCdCode": "108021122",
			"code": "ELGD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.034924,
			"lng": 7.088538,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Legden",
				"middel": "Legden",
				"kort": "Legden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ELGD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000437",
			"UICCode": "8021123",
			"UICCdCode": "108021123",
			"code": "EAHS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.079796120944,
			"lng": 7.01635837554931,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ahaus",
				"middel": "Ahaus",
				"kort": "Ahaus"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EAHS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001808",
			"UICCode": "8021126",
			"UICCdCode": "108021126",
			"code": "EEPE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.18346,
			"lng": 7.03009,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Epe (Westf)",
				"middel": "Epe (Westf)",
				"kort": "Epe (West)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EEPE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000382",
			"UICCode": "8021128",
			"UICCdCode": "108021128",
			"cdCode": 398,
			"code": "G",
			"ingangsDatum": "2021-06-21",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.21521,
			"lng": 7.022109,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Gronau (Westf.)",
				"middel": "Gronau (Westf.)",
				"kort": "Gronau"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "G",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8000062",
			"UICCode": "8021143",
			"UICCdCode": "108021143",
			"code": "EBFT",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.147384,
			"lng": 7.32934,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Steinfurt-Burgsteinfurt",
				"middel": "Steinfurt-Burgst",
				"kort": "Steinf-Bur"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EBFT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004426",
			"UICCode": "8021147",
			"UICCdCode": "108021147",
			"code": "ENBE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.022327,
			"lng": 7.562668,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Münster-Häger",
				"middel": "Münster-Häger",
				"kort": "Münster-H"
			},
			"synoniemen": [
				"Munster-Hager"
			],
			"nearbyMeLocationId": {
				"value": "ENBE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000518",
			"UICCode": "8021148",
			"UICCdCode": "108021148",
			"code": "EABG",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.05223,
			"lng": 7.481202,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Altenberge",
				"middel": "Altenberge",
				"kort": "Altenberge"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EABG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004461",
			"UICCode": "8021149",
			"UICCdCode": "108021149",
			"code": "ENOW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.077618,
			"lng": 7.461706,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Nordwalde",
				"middel": "Nordwalde",
				"kort": "Nordwalde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ENOW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001096",
			"UICCode": "8021150",
			"UICCdCode": "108021150",
			"code": "EBGO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.118791,
			"lng": 7.397581,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Steinfurt-Borghorst",
				"middel": "Steinfurt-Borgh",
				"kort": "Steinf-Bor"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EBGO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004001",
			"UICCode": "8021151",
			"UICCdCode": "108021151",
			"code": "EMTE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.162444,
			"lng": 7.254423,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Metelen Land",
				"middel": "Metelen Land",
				"kort": "Metelen L."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EMTE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8004613",
			"UICCode": "8021152",
			"UICCdCode": "108021152",
			"code": "EOP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.201703,
			"lng": 7.182643,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ochtrup",
				"middel": "Ochtrup",
				"kort": "Ochtrup"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EOP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000879",
			"UICCode": "8021156",
			"UICCdCode": "108021156",
			"code": "BH",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.309685595156,
			"lng": 7.15853691101074,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bad Bentheim",
				"middel": "Bad Bentheim",
				"kort": "Bentheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8005436",
			"UICCode": "8021157",
			"UICCdCode": "108021157",
			"code": "HSTT",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.3168398,
			"lng": 7.2161038,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schüttorf",
				"middel": "Schüttorf",
				"kort": "Schüttorf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HSTT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8002915",
			"UICCode": "8021159",
			"UICCdCode": "108021159",
			"code": "HHTL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2955438,
			"lng": 7.5929111,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hörstel",
				"middel": "Hörstel",
				"kort": "Hörstel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HHTL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001867",
			"UICCode": "8021160",
			"UICCdCode": "108021160",
			"code": "HESH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2993714,
			"lng": 7.6547253,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ibbenbüren-Esch",
				"middel": "Ibbenbüren-Esch",
				"kort": "Ibben-Esch"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HESH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003036",
			"UICCode": "8021162",
			"UICCdCode": "108021162",
			"code": "IBBENB",
			"ingangsDatum": "2025-08-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.276944,
			"lng": 7.721389,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ibbenbüren",
				"middel": "Ibbenbüren",
				"kort": "Ibbenbüren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "IBBENB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003491",
			"UICCode": "8021163",
			"UICCdCode": "108021163",
			"code": "HLGG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2647297,
			"lng": 7.7789465,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ibbenbüren-Laggenbeck",
				"middel": "Ibben-Laggenbeck",
				"kort": "Laggenbeck"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HLGG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8006503",
			"UICCode": "8021167",
			"UICCdCode": "108021167",
			"code": "HWIS",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.258479,
			"lng": 8.2023414,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wissingen",
				"middel": "Wissingen",
				"kort": "Wissingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWIS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8006367",
			"UICCode": "8021168",
			"UICCdCode": "108021168",
			"code": "HWTH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2360881,
			"lng": 8.2766141,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Westerhausen",
				"middel": "Westerhausen",
				"kort": "W. hausen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWTH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003956",
			"UICCode": "8021169",
			"UICCdCode": "108021169",
			"code": "HMEL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.209102,
			"lng": 8.3397124,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Melle",
				"middel": "Melle",
				"kort": "Melle"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HMEL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001201",
			"UICCode": "8021170",
			"UICCdCode": "108021170",
			"code": "HBUE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.2046071,
			"lng": 8.4441367,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bruchmühlen",
				"middel": "Bruchmühlen",
				"kort": "Bruchmühl."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HBUE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000059",
			"UICCode": "8021173",
			"UICCdCode": "108021173",
			"code": "BUENDE",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.202075,
			"lng": 8.573876,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bünde (Westf)",
				"middel": "Bünde (Westf)",
				"kort": "Bünde (W)"
			},
			"synoniemen": [
				"Bunde"
			],
			"nearbyMeLocationId": {
				"value": "BUENDE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8003288",
			"UICCode": "8021175",
			"UICCdCode": "108021175",
			"code": "HKLG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.1961172,
			"lng": 8.6409714,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kirchlengern",
				"middel": "Kirchlengern",
				"kort": "Kirchlenge"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HKLG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000291",
			"UICCode": "8021207",
			"UICCdCode": "108021207",
			"code": "OLDEN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.144323,
			"lng": 8.222713,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Oldenburg Hbf",
				"middel": "Oldenburg Hbf",
				"kort": "Oldenburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OLDEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8006237",
			"UICCode": "8021239",
			"UICCdCode": "108021239",
			"cdCode": 237,
			"code": "WR",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.16311,
			"lng": 7.3442,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Weener",
				"middel": "Weener",
				"kort": "Weener"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001269",
			"UICCode": "8021241",
			"UICCdCode": "108021241",
			"code": "BUNDE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.188877,
			"lng": 7.228146,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bunde",
				"middel": "Bunde",
				"kort": "Bunde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BUNDE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000284",
			"UICCode": "8022193",
			"UICCdCode": "108022193",
			"code": "NURNB",
			"ingangsDatum": "2020-11-19",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.4449634,
			"lng": 11.0826087,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Nürnberg Hbf",
				"middel": "Nürnberg Hbf",
				"kort": "Nürnberg"
			},
			"synoniemen": [
				"Nurnberg"
			],
			"nearbyMeLocationId": {
				"value": "NURNB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000260",
			"UICCode": "8022534",
			"UICCdCode": "108022534",
			"code": "WURZB",
			"ingangsDatum": "2020-11-19",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.80179,
			"lng": 9.9358,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Würzburg Hbf",
				"middel": "Würzburg Hbf",
				"kort": "Würzburg"
			},
			"synoniemen": [
				"Wurzburg"
			],
			"nearbyMeLocationId": {
				"value": "WURZB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000010",
			"UICCode": "8022610",
			"UICCdCode": "108022610",
			"code": "NAH",
			"ingangsDatum": "2024-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.9805364439886,
			"lng": 9.14371490478515,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aschaffenburg",
				"middel": "Aschaffenburg",
				"kort": "Aschaf'brg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NAH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8010205",
			"UICCode": "8023179",
			"UICCdCode": "108023179",
			"code": "LEIPZ",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.3454712,
			"lng": 12.3820639,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Leipzig Hbf",
				"middel": "Leipzig Hbf",
				"kort": "Leipzig"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LEIPZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8004173",
			"UICCode": "8023783",
			"UICCdCode": "108023783",
			"code": "ENHF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.984987,
			"lng": 7.63861,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Münster (W) Zentrum Nord",
				"middel": "Münster Zentr N.",
				"kort": "Münster ZN"
			},
			"synoniemen": [
				"Munster Zentrum Nord"
			],
			"nearbyMeLocationId": {
				"value": "ENHF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010224",
			"UICCode": "8024001",
			"UICCdCode": "108024001",
			"code": "DLM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.1305112,
			"lng": 11.626963,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Magdeburg Hbf",
				"middel": "Magdeburg Hbf",
				"kort": "Magdeburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DLM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010334",
			"UICCode": "8024062",
			"UICCdCode": "108024062",
			"code": "LS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.594723,
			"lng": 11.854412,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stendal",
				"middel": "Stendal",
				"kort": "Stendal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010296",
			"UICCode": "8024069",
			"UICCdCode": "108024069",
			"code": "LRW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.599444,
			"lng": 12.354721,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rathenow",
				"middel": "Rathenow",
				"kort": "Rathenow"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LRW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010310",
			"UICCode": "8024585",
			"UICCdCode": "108024585",
			"code": "DLSW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.858113,
			"lng": 11.162035,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Salzwedel",
				"middel": "Salzwedel",
				"kort": "Salzwedel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DLSW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8002707",
			"UICCode": "8025284",
			"UICCdCode": "108025284",
			"code": "KHB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.617676,
			"lng": 7.231047,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Heimbach(Nahe)",
				"middel": "Heimbach",
				"kort": "Heimbach"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KHB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000309",
			"UICCode": "8026294",
			"UICCdCode": "108026294",
			"code": "REGENB",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 49.011672,
			"lng": 12.099617,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Regensburg Hbf",
				"middel": "Regensburg Hbf",
				"kort": "Regensburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "REGENB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000298",
			"UICCode": "8026506",
			"UICCdCode": "108026506",
			"code": "PASS",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.5734269523465,
			"lng": 13.450870513916,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Passau Hbf",
				"middel": "Passau Hbf",
				"kort": "Passau"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PASS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010382",
			"UICCode": "8027317",
			"UICCdCode": "108027317",
			"code": "DWW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.003115,
			"lng": 11.762871,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wittenberge",
				"middel": "Wittenberge",
				"kort": "Wittenberg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DWW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010216",
			"UICCode": "8027327",
			"UICCdCode": "108027327",
			"code": "DWL",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.334671,
			"lng": 11.494491,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ludwigslust",
				"middel": "Ludwigslust",
				"kort": "Ludwigslu."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DWL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8010093",
			"UICCode": "8028227",
			"UICCdCode": "108028227",
			"code": "WE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.834021,
			"lng": 13.797062,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eberswalde Hbf",
				"middel": "Eberswalde Hbf",
				"kort": "Eberswalde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8010004",
			"UICCode": "8028324",
			"UICCdCode": "108028324",
			"code": "WA",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.015221,
			"lng": 13.996361,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Angermünde",
				"middel": "Angermünde",
				"kort": "Angermünd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8000096",
			"UICCode": "8029034",
			"UICCdCode": "108029034",
			"code": "TS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.784084,
			"lng": 9.181635,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stuttgart Hbf",
				"middel": "Stuttgart Hbf",
				"kort": "Stuttgart"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8001920",
			"UICCode": "8029055",
			"UICCdCode": "108029055",
			"code": "TE",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.7386055,
			"lng": 9.2978079,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Esslingen (Neckar)",
				"middel": "Esslingen Neckar",
				"kort": "Esslingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000302",
			"UICCode": "8029060",
			"UICCdCode": "108029060",
			"code": "TP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.71308,
			"lng": 9.41081,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Plochingen",
				"middel": "Plochingen",
				"kort": "Plochingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8000127",
			"UICCode": "8029066",
			"UICCdCode": "108029066",
			"code": "TGO",
			"ingangsDatum": "2024-12-31",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.700191,
			"lng": 9.651685,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Göppingen",
				"middel": "Göppingen",
				"kort": "Göppingen"
			},
			"synoniemen": [
				"Goppingen"
			],
			"nearbyMeLocationId": {
				"value": "TGO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8002218",
			"UICCode": "8029086",
			"UICCdCode": "108029086",
			"code": "GEISL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.6194774237368,
			"lng": 9.84184026718139,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Geislingen",
				"middel": "Geislingen",
				"kort": "Geislingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GEISL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000170",
			"UICCode": "8029103",
			"UICCdCode": "108029103",
			"code": "TU",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.399015,
			"lng": 9.982165,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ulm Hbf",
				"middel": "Ulm Hbf",
				"kort": "Ulm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8006053",
			"UICCode": "8029779",
			"UICCdCode": "108029779",
			"code": "TV",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 48.9463184,
			"lng": 8.9587867,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Vaihingen(Enz)",
				"middel": "Vaihingen(Enz)",
				"kort": "Vaihingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8070704",
			"UICCode": "8031372",
			"UICCdCode": "108031372",
			"code": "ASCH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.769871144942,
			"lng": 6.07383012771606,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aachen Schanz",
				"middel": "Aachen Schanz",
				"kort": "Aachen Sch"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASCH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8098160",
			"UICCode": "8031922",
			"UICCdCode": "108031922",
			"code": "BERHBT",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.525592,
			"lng": 13.369545,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Hbf (tief)",
				"middel": "Berlin Hbf",
				"kort": "Berlin Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BERHBT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8003680",
			"UICCode": "8032572",
			"UICCdCode": "108032572",
			"code": "FLB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.382498,
			"lng": 8.096112,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Limburg Süd",
				"middel": "Limburg Süd",
				"kort": "Limburg S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FLB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001776",
			"UICCode": "8033415",
			"UICCdCode": "108033415",
			"cdCode": 693,
			"code": "EL",
			"ingangsDatum": "2022-06-24",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.8743,
			"lng": 6.15417,
			"radius": 200,
			"naderenRadius": 500,
			"namen": {
				"lang": "Emmerich-Elten",
				"middel": "Emmerich-Elten",
				"kort": "Elten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005744",
			"UICCode": "8037124",
			"UICCdCode": "108037124",
			"code": "STOLSM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.784904,
			"lng": 6.219012,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stolberg-Schneidmühle",
				"middel": "Stolberg-Schn.",
				"kort": "Stolberg-S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STOLSM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005743",
			"UICCode": "8037156",
			"UICCdCode": "108037156",
			"code": "STOLR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.768554,
			"lng": 6.229845,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stolberg Rathaus",
				"middel": "Stolberg Rathaus",
				"kort": "Stolberg R"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STOLR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8005745",
			"UICCode": "8037164",
			"UICCdCode": "108037164",
			"code": "STOLMB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.773589,
			"lng": 6.223898,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stolberg Mühlener Bahnhof",
				"middel": "Stolberg M Bf",
				"kort": "Stolberg M"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STOLMB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8000082",
			"UICCode": "8039904",
			"UICCdCode": "108039904",
			"code": "KDFFH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 51.292009,
			"lng": 6.786836,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Düsseldorf Flughafen",
				"middel": "Düsseldorf Flug.",
				"kort": "Düsseld F."
			},
			"synoniemen": [
				"Dusseldorf Airport",
				"Dusseldorf Flughafen"
			],
			"nearbyMeLocationId": {
				"value": "KDFFH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8070003",
			"UICCode": "8061676",
			"UICCdCode": "108061676",
			"code": "FNAF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.0531710299286,
			"lng": 8.570237159729,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frankfurt Flughafen Fernb",
				"middel": "Frankfurt Flugh.",
				"kort": "FrankfurtF"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FNAF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8005712",
			"UICCode": "8064371",
			"UICCdCode": "108064371",
			"code": "EGRK",
			"ingangsDatum": "2025-08-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.123439,
			"lng": 7.376031,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Steinfurt-Grottenkamp",
				"middel": "Steinfurt-Grotte",
				"kort": "Steinf-Gr"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EGRK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8011160",
			"UICCode": "8065969",
			"UICCdCode": "108065969",
			"code": "BERHBL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.52503,
			"lng": 13.36946,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Hbf",
				"middel": "Berlin Hbf",
				"kort": "Berlin Hbf"
			},
			"synoniemen": [
				"Berlijn"
			],
			"nearbyMeLocationId": {
				"value": "BERHBL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8011113",
			"UICCode": "8065971",
			"UICCdCode": "108065971",
			"code": "BPAF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.47611,
			"lng": 13.365,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Berlin Südkreuz",
				"middel": "Berlin Südkreuz",
				"kort": "Berlin Süd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BPAF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8002824",
			"UICCode": "8069148",
			"UICCdCode": "108069148",
			"code": "HHIS",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.1591935,
			"lng": 8.6683483,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hiddenhausen-Schweicheln",
				"middel": "Hiddenhausen-Sch",
				"kort": "Hiddenh.-S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HHIS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8001888",
			"UICCode": "8069831",
			"UICCdCode": "108069831",
			"code": "ESCHT",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.814759,
			"lng": 6.263203,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eschweiler Talbahnhof",
				"middel": "Eschweiler Talb.",
				"kort": "Eschweil T"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESCHT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001887",
			"UICCode": "8069832",
			"UICCdCode": "108069832",
			"code": "ESCHW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.817712,
			"lng": 6.251721,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eschweiler-West",
				"middel": "Eschweiler-W.",
				"kort": "Eschweil-W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESCHW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001889",
			"UICCode": "8069834",
			"UICCdCode": "108069834",
			"code": "ESCHN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.812827,
			"lng": 6.293846,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eschweiler-Nothberg",
				"middel": "Eschweiler-Nothb",
				"kort": "Eschweil-N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESCHN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8001893",
			"UICCode": "8069835",
			"UICCdCode": "108069835",
			"code": "EWEIS",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 50.824174,
			"lng": 6.320318,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Eschweiler-Weisweiler",
				"middel": "Eschweiler-Weisw",
				"kort": "Esch-Weisw"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EWEIS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8072553",
			"UICCode": "8072553",
			"UICCdCode": "108072553",
			"code": "DAAB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 53.5514124,
			"lng": 99.3660808,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "H-Altona Max Brauer Allee",
				"middel": "Altona MaxBAllee",
				"kort": "Altona MBA"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DAAB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8089194",
			"UICCode": "8089194",
			"UICCdCode": "108089194",
			"code": "DHAN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "D",
			"lat": 52.3788571,
			"lng": 9.7391829,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hannover Hbf ZOB",
				"middel": "Hannover Hbf ZOB",
				"kort": "Hannover Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DHAN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8800001",
			"UICCode": "8811007",
			"UICCdCode": "108811007",
			"code": "BFSR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.878404,
			"lng": 43.78656,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schaerbeek",
				"middel": "Schaerbeek",
				"kort": "Schaerbeek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BFSR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8800090",
			"UICCode": "8811189",
			"UICCdCode": "108811189",
			"code": "FVV",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.9245867,
			"lng": 4.4280707,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Vilvoorde",
				"middel": "Vilvoorde",
				"kort": "Vilvoorde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FVV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800002",
			"UICCode": "8812005",
			"UICCdCode": "108812005",
			"code": "BRUSN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.859658,
			"lng": 4.360854,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Brussel-Noord",
				"middel": "Brussel-Noord",
				"kort": "Brussel-N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRUSN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8800003",
			"UICCode": "8813003",
			"UICCdCode": "108813003",
			"code": "BRUSC",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.845175,
			"lng": 4.357131,
			"radius": 1700,
			"naderenRadius": 2500,
			"namen": {
				"lang": "Brussel-Centraal",
				"middel": "Brussel-C.",
				"kort": "Brussel-C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRUSC",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8800004",
			"UICCode": "8814001",
			"UICCdCode": "108814001",
			"code": "BRUSZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.836782,
			"lng": 4.336922,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Brussel-Zuid",
				"middel": "Brussel-Zuid",
				"kort": "Brussel-Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRUSZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8800043",
			"UICCode": "8819406",
			"UICCdCode": "108819406",
			"code": "FBNL",
			"ingangsDatum": "2025-01-08",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.896821,
			"lng": 4.48549,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Brussels Airport-Zaventem",
				"middel": "Brussels Airport",
				"kort": "Brus Airpt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FBNL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8800007",
			"UICCode": "8821006",
			"UICCdCode": "108821006",
			"code": "ATW",
			"ingangsDatum": "2025-01-08",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.21686,
			"lng": 4.421242,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Antwerpen-Centraal",
				"middel": "Antwerpen-C.",
				"kort": "Antw-C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ATW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8800187",
			"UICCode": "8821063",
			"UICCdCode": "108821063",
			"code": "ATWLB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.2449375,
			"lng": 4.4251543,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Antwerpen-Luchtbal",
				"middel": "Antw-Luchtbal",
				"kort": "Antw-Bal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ATWLB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800189",
			"UICCode": "8821071",
			"UICCdCode": "108821071",
			"code": "LKR",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.2816099,
			"lng": 4.4341227,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ekeren",
				"middel": "Ekeren",
				"kort": "Ekeren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LKR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800188",
			"UICCode": "8821089",
			"UICCdCode": "108821089",
			"code": "ANDD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.261686,
			"lng": 4.4274315,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Antwerpen-Noorderdokken",
				"middel": "Antw-N'dokken",
				"kort": "Antw-dok"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ANDD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8821105",
			"UICCode": "8821105",
			"UICCdCode": "108821105",
			"code": "NDKP",
			"ingangsDatum": "2019-08-21",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.358088,
			"lng": 4.633977,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Noorderkempen",
				"middel": "Noorderkempen",
				"kort": "N' kempen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NDKP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8800008",
			"UICCode": "8821121",
			"UICCdCode": "108821121",
			"code": "BERCH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.198914,
			"lng": 4.4332,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Antwerpen-Berchem",
				"middel": "Antw-Berchem",
				"kort": "Antw-Berch"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BERCH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8800222",
			"UICCode": "8821154",
			"UICCdCode": "108821154",
			"code": "GMD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.1825,
			"lng": 4.447222,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mortsel-Deurnesteenweg",
				"middel": "M-Deurnesteenweg",
				"kort": "M-Deurnest"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GMD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800310",
			"UICCode": "8821196",
			"UICCdCode": "108821196",
			"code": "FNZD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.19785,
			"lng": 4.39027,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Antwerpen-Zuid",
				"middel": "Antwerpen-Z.",
				"kort": "Antw-Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FNZD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800221",
			"UICCode": "8821238",
			"UICCdCode": "108821238",
			"code": "GMOG",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.171111,
			"lng": 4.455833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mortsel-Oude God",
				"middel": "Mortsel-Oude God",
				"kort": "M-Oude God"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GMOG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800219",
			"UICCode": "8821311",
			"UICCdCode": "108821311",
			"code": "FKI",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.133889,
			"lng": 4.476667,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kontich",
				"middel": "Kontich",
				"kort": "Kontich"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FKI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800220",
			"UICCode": "8821337",
			"UICCdCode": "108821337",
			"code": "MHO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.153611,
			"lng": 4.465278,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hove",
				"middel": "Hove",
				"kort": "Hove"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MHO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800009",
			"UICCode": "8821402",
			"UICCdCode": "108821402",
			"code": "ESN",
			"ingangsDatum": "2018-04-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.46261,
			"lng": 4.45129,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Essen",
				"middel": "Essen",
				"kort": "Essen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800193",
			"UICCode": "8821436",
			"UICCdCode": "108821436",
			"code": "GWD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.4277061,
			"lng": 4.4633962,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wildert",
				"middel": "Wildert",
				"kort": "Wildert"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GWD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800183",
			"UICCode": "8821444",
			"UICCdCode": "108821444",
			"code": "FKTH",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.3909989,
			"lng": 4.4668202,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kalmthout",
				"middel": "Kalmthout",
				"kort": "Kalmthout"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FKTH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800192",
			"UICCode": "8821451",
			"UICCdCode": "108821451",
			"code": "GKT",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.37867,
			"lng": 4.46722,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kijkuit",
				"middel": "Kijkuit",
				"kort": "Kijkuit"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GKT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800062",
			"UICCode": "8821519",
			"UICCdCode": "108821519",
			"code": "MID",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.364828,
			"lng": 4.4604308,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Heide (B)",
				"middel": "Heide (B)",
				"kort": "Heide (B)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MID",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800072",
			"UICCode": "8821535",
			"UICCdCode": "108821535",
			"code": "LKP",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.31362,
			"lng": 4.43262,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kapellen",
				"middel": "Kapellen",
				"kort": "Kapellen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LKP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800190",
			"UICCode": "8821543",
			"UICCdCode": "108821543",
			"code": "MARIA",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.29126,
			"lng": 4.43495,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Sint-Mariaburg",
				"middel": "Sint-Mariaburg",
				"kort": "St-Mariab"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MARIA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800010",
			"UICCode": "8822004",
			"UICCdCode": "108822004",
			"code": "MECH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.01758,
			"lng": 4.48313,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Mechelen",
				"middel": "Mechelen",
				"kort": "Mechelen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MECH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8800218",
			"UICCode": "8822210",
			"UICCdCode": "108822210",
			"code": "FDP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.091389,
			"lng": 4.493056,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Duffel",
				"middel": "Duffel",
				"kort": "Duffel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FDP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800217",
			"UICCode": "8822228",
			"UICCdCode": "108822228",
			"code": "FWA",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.07,
			"lng": 4.496111,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Sint-Katelijne-Waver",
				"middel": "Sint-Katelijne-W",
				"kort": "Sint-Katel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FWA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800179",
			"UICCode": "8822343",
			"UICCdCode": "108822343",
			"code": "LNK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.03011,
			"lng": 44.90268,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Mechelen-Nekkerspoel",
				"middel": "Mech-Nekkerspoel",
				"kort": "Nekkersp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LNK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800316",
			"UICCode": "8822715",
			"UICCdCode": "108822715",
			"code": "FRP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.07716,
			"lng": 4.28273,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Puurs",
				"middel": "Puurs",
				"kort": "Puurs"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FRP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800315",
			"UICCode": "8822814",
			"UICCdCode": "108822814",
			"code": "FMB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.09063,
			"lng": 4.36057,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Boom",
				"middel": "Boom",
				"kort": "Boom"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FMB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800099",
			"UICCode": "8822848",
			"UICCdCode": "108822848",
			"code": "FSV",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.08115,
			"lng": 4.32551,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ruisbroek-Sauvegarde",
				"middel": "Ruisbroek-Sauv.",
				"kort": "Ruisbr-S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FSV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800311",
			"UICCode": "8824158",
			"UICCdCode": "108824158",
			"code": "FOE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.18285,
			"lng": 4.34831,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hoboken-Polder",
				"middel": "Hoboken-Polder",
				"kort": "Hoboken-P"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FOE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800313",
			"UICCode": "8824224",
			"UICCdCode": "108824224",
			"code": "LKM",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.13624,
			"lng": 4.33828,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hemiksem",
				"middel": "Hemiksem",
				"kort": "Hemiksem"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LKM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8824232",
			"UICCode": "8824232",
			"UICCdCode": "108824232",
			"code": "SCHLL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.12555,
			"lng": 4.34023,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schelle",
				"middel": "Schelle",
				"kort": "Schelle"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SCHLL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800314",
			"UICCode": "8824240",
			"UICCdCode": "108824240",
			"code": "LNI",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.11154,
			"lng": 4.33845,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Niel",
				"middel": "Niel",
				"kort": "Niel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LNI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800240",
			"UICCode": "8831112",
			"UICCdCode": "108831112",
			"code": "GDP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.910278,
			"lng": 5.419722,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Diepenbeek",
				"middel": "Diepenbeek",
				"kort": "Diepenbeek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GDP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800038",
			"UICCode": "8831138",
			"UICCdCode": "108831138",
			"code": "FIE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.868333,
			"lng": 5.509167,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bilzen",
				"middel": "Bilzen",
				"kort": "Bilzen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FIE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800086",
			"UICCode": "8831310",
			"UICCdCode": "108831310",
			"code": "FTG",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.784167,
			"lng": 5.473056,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Tongeren",
				"middel": "Tongeren",
				"kort": "Tongeren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FTG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800032",
			"UICCode": "8833209",
			"UICCdCode": "108833209",
			"code": "FRST",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.984141,
			"lng": 48.23757,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aarschot",
				"middel": "Aarschot",
				"kort": "Aarschot"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FRST",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8800012",
			"UICCode": "8841004",
			"UICCdCode": "108841004",
			"cdCode": 904,
			"code": "LUIK",
			"ingangsDatum": "2025-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.62436,
			"lng": 5.56648,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Liège-Guillemins",
				"middel": "Liège-Guillemins",
				"kort": "Liège-G."
			},
			"synoniemen": [
				"Luik",
				"Liege-Guilemins"
			],
			"nearbyMeLocationId": {
				"value": "LUIK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8800236",
			"UICCode": "8841608",
			"UICCdCode": "108841608",
			"code": "LHS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.66076,
			"lng": 5.62231,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Herstal",
				"middel": "Herstal",
				"kort": "Herstal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LHS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800237",
			"UICCode": "8841665",
			"UICCdCode": "108841665",
			"code": "BLTM",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.69301,
			"lng": 5.59983,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Milmort",
				"middel": "Milmort",
				"kort": "Milmort"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BLTM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800238",
			"UICCode": "8841673",
			"UICCdCode": "108841673",
			"code": "LSL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.69822,
			"lng": 5.56848,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Liers",
				"middel": "Liers",
				"kort": "Liers"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LSL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800239",
			"UICCode": "8841731",
			"UICCdCode": "108841731",
			"code": "LGL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.750277,
			"lng": 5.535278,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Glons",
				"middel": "Glons",
				"kort": "Glons"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LGL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800107",
			"UICCode": "8843901",
			"UICCdCode": "108843901",
			"cdCode": 901,
			"code": "BRESSX",
			"ingangsDatum": "2024-06-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.643829,
			"lng": 5.6112542,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bressoux",
				"middel": "Bressoux",
				"kort": "Bressoux"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRESSX",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800172",
			"UICCode": "8846201",
			"UICCdCode": "108846201",
			"cdCode": 902,
			"code": "FVS",
			"ingangsDatum": "2024-06-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 50.73781,
			"lng": 5.69232,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Visé",
				"middel": "Visé",
				"kort": "Visé"
			},
			"synoniemen": [
				"Vise"
			],
			"nearbyMeLocationId": {
				"value": "FVS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8800123",
			"UICCode": "8893013",
			"UICCdCode": "108893013",
			"code": "MEREL",
			"ingangsDatum": "2024-03-22",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 45.4410734,
			"lng": 12.3188549,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Merelbeke",
				"middel": "Merelbeke",
				"kort": "Merelbeke"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MEREL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8800127",
			"UICCode": "8894201",
			"UICCdCode": "108894201",
			"code": "FLK",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.107222,
			"lng": 3.985833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lokeren",
				"middel": "Lokeren",
				"kort": "Lokeren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FLK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800333",
			"UICCode": "8894425",
			"UICCdCode": "108894425",
			"code": "LSW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.143333,
			"lng": 4.068889,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Sinaai",
				"middel": "Sinaai",
				"kort": "Sinaai"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LSW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800355",
			"UICCode": "8894433",
			"UICCdCode": "108894433",
			"code": "LLB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.150833,
			"lng": 4.088332,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Belsele",
				"middel": "Belsele",
				"kort": "Belsele"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LLB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800143",
			"UICCode": "8894508",
			"UICCdCode": "108894508",
			"code": "FSN",
			"ingangsDatum": "2013-05-29",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.171944,
			"lng": 4.144167,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Sint-Niklaas",
				"middel": "Sint-Niklaas",
				"kort": "Sint-Nikla"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FSN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800334",
			"UICCode": "8894714",
			"UICCdCode": "108894714",
			"code": "FNU",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.185556,
			"lng": 4.185832,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Nieuwkerken-Waas",
				"middel": "Nieuwkerken-Waas",
				"kort": "Nieuwkerke"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FNU",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800037",
			"UICCode": "8894748",
			"UICCdCode": "108894748",
			"code": "FBR",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.208056,
			"lng": 4.259444,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Beveren",
				"middel": "Beveren",
				"kort": "Beveren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FBR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800356",
			"UICCode": "8894755",
			"UICCdCode": "108894755",
			"code": "LM",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.210556,
			"lng": 4.286667,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Melsele",
				"middel": "Melsele",
				"kort": "Melsele"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8800336",
			"UICCode": "8894821",
			"UICCdCode": "108894821",
			"code": "LZD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "B",
			"lat": 51.214167,
			"lng": 4.33,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Zwijndrecht (B)",
				"middel": "Zwijndrecht (B)",
				"kort": "Zwijndrech"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LZD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "5100082",
			"UICCode": "5102580",
			"UICCdCode": "115102580",
			"code": "RZEPIN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 52.350222,
			"lng": 14.815073,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rzepin",
				"middel": "Rzepin",
				"kort": "Rzepin"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RZEPIN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "5100081",
			"UICCode": "5103060",
			"UICCdCode": "115103060",
			"code": "POZN",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 52.401993,
			"lng": 16.91087,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Poznan Glowny",
				"middel": "Poznan Gl.",
				"kort": "Poznan Gl."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "POZN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "5100065",
			"UICCode": "5103360",
			"UICCdCode": "115103360",
			"code": "WARSZC",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 52.22886,
			"lng": 21.003234,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Warszawa Centralna",
				"middel": "Warszawa C.",
				"kort": "Warszawa C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WARSZC",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "5100066",
			"UICCode": "5103865",
			"UICCdCode": "115103865",
			"code": "WARSAW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 52.251548,
			"lng": 21.052335,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Warszawa Wschodnia",
				"middel": "Warszawa Wschodn",
				"kort": "Warszawa W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WARSAW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "5100069",
			"UICCode": "5106010",
			"UICCdCode": "115106010",
			"code": "PWLG",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 51.098078,
			"lng": 17.037088,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wroclaw Glowny",
				"middel": "Wroclaw Glowny",
				"kort": "Wroclaw Gl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PWLG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5100020",
			"UICCode": "5107331",
			"UICCdCode": "115107331",
			"code": "PKAT",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 50.257515,
			"lng": 19.017165,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Katowice",
				"middel": "Katowice",
				"kort": "Katowice"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PKAT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5100028",
			"UICCode": "5108041",
			"UICCdCode": "115108041",
			"code": "PKRAK",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "PL",
			"lat": 50.067194,
			"lng": 19.947426,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kraków Główny",
				"middel": "Kraków Główny",
				"kort": "Kraków Gł"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PKRAK",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5400019",
			"UICCode": "5453179",
			"UICCdCode": "115453179",
			"code": "USTI",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CZ",
			"lat": 50.65956,
			"lng": 14.04473,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Usti nad Labem",
				"middel": "Usti nad Labem",
				"kort": "Usti nad L"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "USTI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5400003",
			"UICCode": "5455659",
			"UICCdCode": "115455659",
			"code": "DECIN",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CZ",
			"lat": 50.77342,
			"lng": 14.20125,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Decin hl.n.",
				"middel": "Decin hl.n.",
				"kort": "Decin hl.n"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DECIN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5400014",
			"UICCode": "5457076",
			"UICCdCode": "115457076",
			"code": "PRAHA",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CZ",
			"lat": 50.08306,
			"lng": 14.435,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Praha hl.n.",
				"middel": "Praha hl.n.",
				"kort": "Praha hl.n"
			},
			"synoniemen": [
				"Praag"
			],
			"nearbyMeLocationId": {
				"value": "PRAHA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5400201",
			"UICCode": "5457256",
			"UICCdCode": "115457256",
			"code": "PRAHOL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CZ",
			"lat": 50.1102,
			"lng": 14.44,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Praha-Holesovice",
				"middel": "Praha-Holesovice",
				"kort": "Praha-Hol."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PRAHOL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "5596001",
			"UICCode": "5510009",
			"UICCdCode": "115510009",
			"code": "HBDP",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "H",
			"lat": 47.500278,
			"lng": 19.083889,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Budapest",
				"middel": "Budapest",
				"kort": "Budapest"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HBDP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "7004428",
			"UICCode": "7015400",
			"UICCdCode": "117015400",
			"code": "STP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "GB",
			"lat": 51.531437,
			"lng": -0.126136,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "London St. Pancras Int.",
				"middel": "London St. P Int",
				"kort": "London StP"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "7004419",
			"UICCode": "7015440",
			"UICCdCode": "117015440",
			"code": "EBBS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "GB",
			"lat": 51.44297,
			"lng": 0.32095,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ebbsfleet International",
				"middel": "Ebbsfleet Intern",
				"kort": "Ebbsfleet"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EBBS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "7098107",
			"UICCode": "7054660",
			"UICCdCode": "117054660",
			"code": "ASHFD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "GB",
			"lat": 51.14371,
			"lng": 0.87612,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ashford International",
				"middel": "Ashford Internat",
				"kort": "AshfordINT"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASHFD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "7000006",
			"UICCode": "7069020",
			"UICCdCode": "117069020",
			"code": "HARW",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "GB",
			"lat": 51.9473,
			"lng": 1.25514,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Harwich International",
				"middel": "Harwich Internat",
				"kort": "HarwichINT"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HARW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "7400003",
			"UICCode": "7401318",
			"UICCdCode": "117401318",
			"code": "HOJE",
			"ingangsDatum": "2022-05-28",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "S",
			"lat": 57.708889,
			"lng": 11.973333,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Göteborg Central",
				"middel": "Göteborg Central",
				"kort": "Göteborg C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HOJE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100003",
			"UICCode": "8101001",
			"UICCdCode": "118101001",
			"code": "WIENW",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.19687,
			"lng": 16.33727,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wien Westbahnhof",
				"middel": "Wien Westbf",
				"kort": "Wien Westb"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WIENW",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8103000",
			"UICCode": "8101003",
			"UICCdCode": "118101003",
			"code": "WBF",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.185,
			"lng": 16.375833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wien Hbf",
				"middel": "Wien Hbf",
				"kort": "Wien Hbf"
			},
			"synoniemen": [
				"Wenen"
			],
			"nearbyMeLocationId": {
				"value": "WBF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100447",
			"UICCode": "8101008",
			"UICCdCode": "118101008",
			"code": "WIENH",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.197222,
			"lng": 16.261389,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wien Hütteldorf",
				"middel": "Wien Hütteldorf",
				"kort": "Wien Htt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WIENH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100008",
			"UICCode": "8101032",
			"UICCdCode": "118101032",
			"code": "POLTEN",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.20769,
			"lng": 15.62591,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "St.Pölten Hbf",
				"middel": "St.Pölten Hbf",
				"kort": "St.Pölten"
			},
			"synoniemen": [
				"Polten St"
			],
			"nearbyMeLocationId": {
				"value": "POLTEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100012",
			"UICCode": "8101049",
			"UICCdCode": "118101049",
			"code": "AMST",
			"ingangsDatum": "2021-06-04",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.121606,
			"lng": 14.878112,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Amstetten NÖ",
				"middel": "Amstetten NÖ",
				"kort": "Amstetten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMST",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100013",
			"UICCode": "8101073",
			"UICCdCode": "118101073",
			"code": "LINZ",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.29018,
			"lng": 14.29213,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Linz Hbf",
				"middel": "Linz Hbf",
				"kort": "Linz Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LINZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100014",
			"UICCode": "8101081",
			"UICCdCode": "118101081",
			"code": "WELS",
			"ingangsDatum": "2020-10-05",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.166111,
			"lng": 14.026667,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wels Hbf",
				"middel": "Wels Hbf",
				"kort": "Wels Hbf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WELS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100002",
			"UICCode": "8101114",
			"UICCdCode": "118101114",
			"code": "SCHARD",
			"ingangsDatum": "2022-06-24",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.813056,
			"lng": 13.045833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Salzburg Hbf",
				"middel": "Salzburg Hbf",
				"kort": "Salzburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SCHARD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100042",
			"UICCode": "8101134",
			"UICCdCode": "118101134",
			"code": "BISCHO",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.41748,
			"lng": 13.21991,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bischofshofen",
				"middel": "Bischofshofen",
				"kort": "Bischofsh."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BISCHO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100043",
			"UICCode": "8101136",
			"UICCdCode": "118101136",
			"code": "STJOHP",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.34811,
			"lng": 13.19486,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "St. Johann im Pongau",
				"middel": "St. Johann im P.",
				"kort": "St.JohannP"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STJOHP",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100044",
			"UICCode": "8101137",
			"UICCdCode": "118101137",
			"code": "SCHWAR",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.31853,
			"lng": 13.15446,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Schwarzach-St. Veit",
				"middel": "Schwarzach-St. V",
				"kort": "Schwarzach"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SCHWAR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100048",
			"UICCode": "8101145",
			"UICCdCode": "118101145",
			"code": "ZELL",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.32053,
			"lng": 12.79658,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Zell am See",
				"middel": "Zell am See",
				"kort": "Zell am S."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZELL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100049",
			"UICCode": "8101148",
			"UICCdCode": "118101148",
			"code": "SAALF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.42684,
			"lng": 12.82942,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Saalfelden",
				"middel": "Saalfelden",
				"kort": "Saalfelden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SAALF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100053",
			"UICCode": "8101155",
			"UICCdCode": "118101155",
			"code": "FIEBER",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.49111,
			"lng": 12.528,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Fieberbrunn",
				"middel": "Fieberbrunn",
				"kort": "Fieberbrun"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "FIEBER",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100054",
			"UICCode": "8101157",
			"UICCdCode": "118101157",
			"code": "STJOH",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.51962,
			"lng": 12.43079,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "St. Johann in Tirol",
				"middel": "St. Johann in T.",
				"kort": "St. Johann"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STJOH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100055",
			"UICCode": "8101160",
			"UICCdCode": "118101160",
			"code": "KITZB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.45411,
			"lng": 12.39104,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kitzbühel",
				"middel": "Kitzbühel",
				"kort": "Kitzbühel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KITZB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100057",
			"UICCode": "8101163",
			"UICCdCode": "118101163",
			"code": "KIRCHB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.448918,
			"lng": 12.309101,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kirchberg in Tirol",
				"middel": "Kirchberg",
				"kort": "Kirchberg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KIRCHB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100059",
			"UICCode": "8101168",
			"UICCdCode": "118101168",
			"code": "HOPF",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.45525,
			"lng": 12.14921,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Hopfgarten",
				"middel": "Hopfgarten",
				"kort": "Hopfgarten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HOPF",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100099",
			"UICCode": "8101170",
			"UICCdCode": "118101170",
			"code": "WORGL",
			"ingangsDatum": "2023-03-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.49178,
			"lng": 12.06059,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wörgl Hbf",
				"middel": "Wörgl Hbf",
				"kort": "Wörgl Hbf"
			},
			"synoniemen": [
				"Worgl"
			],
			"nearbyMeLocationId": {
				"value": "WORGL",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100102",
			"UICCode": "8101176",
			"UICCdCode": "118101176",
			"code": "JENBAC",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.38844,
			"lng": 11.77841,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Jenbach",
				"middel": "Jenbach",
				"kort": "Jenbach"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "JENBAC",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8100108",
			"UICCode": "8101187",
			"UICCdCode": "118101187",
			"code": "INNSB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.26328,
			"lng": 11.401,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Innsbruck Hbf",
				"middel": "Innsbruck Hbf",
				"kort": "Innsbruck"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "INNSB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8100067",
			"UICCode": "8101230",
			"UICCdCode": "118101230",
			"code": "BLUDEN",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.15473,
			"lng": 9.81456,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bludenz",
				"middel": "Bludenz",
				"kort": "Bludenz"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BLUDEN",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100001",
			"UICCode": "8102184",
			"UICCdCode": "118102184",
			"code": "KUFST",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 47.5831,
			"lng": 12.16568,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kufstein",
				"middel": "Kufstein",
				"kort": "Kufstein"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KUFST",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8100514",
			"UICCode": "8103107",
			"UICCdCode": "118103107",
			"code": "WIENM",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "A",
			"lat": 48.1719617,
			"lng": 16.3001795,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Wien Meidling",
				"middel": "Wien Meidling",
				"kort": "W.Meidling"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WIENM",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8300056",
			"UICCode": "8301307",
			"UICCdCode": "118301307",
			"code": "COMO",
			"ingangsDatum": "2022-07-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "I",
			"lat": 45.80889,
			"lng": 9.071944,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Como S. Giovanni",
				"middel": "Como S. Giovanni",
				"kort": "Como S. G"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "COMO",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8300047",
			"UICCode": "8301645",
			"UICCdCode": "118301645",
			"code": "DOMOD",
			"ingangsDatum": "2022-07-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "I",
			"lat": 45.484722,
			"lng": 9.187778,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Milano Porta Garibaldi",
				"middel": "Milano Garibaldi",
				"kort": "Milano G"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DOMOD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8300120",
			"UICCode": "8302430",
			"UICCdCode": "118302430",
			"code": "ITVER",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "I",
			"lat": 45.428656,
			"lng": 10.982739,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Verona Porta Nuova",
				"middel": "Verona Porta N.",
				"kort": "Verona"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ITVER",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8300157",
			"UICCode": "8306725",
			"UICCdCode": "118306725",
			"code": "LIVOR",
			"ingangsDatum": "2024-03-22",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "I",
			"lat": 43.776667,
			"lng": 11.276667,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Livorno Centrale",
				"middel": "Livorno Centrale",
				"kort": "Livorno C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LIVOR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400045",
			"UICCode": "8400045",
			"UICCdCode": "118400045",
			"cdCode": 45,
			"code": "ATN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9213265245505,
			"lng": 6.57862722873687,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Aalten",
				"middel": "Aalten",
				"kort": "Aalten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ATN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400047",
			"UICCode": "8400047",
			"UICCdCode": "118400047",
			"cdCode": 47,
			"code": "AC",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2785,
			"lng": 4.977,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Abcoude",
				"middel": "Abcoude",
				"kort": "Abcoude"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400049",
			"UICCode": "8400049",
			"UICCdCode": "118400049",
			"cdCode": 49,
			"code": "AKM",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.0463905334473,
			"lng": 5.84361124038696,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Akkrum",
				"middel": "Akkrum",
				"kort": "Akkrum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AKM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400050",
			"UICCode": "8400050",
			"UICCdCode": "118400050",
			"cdCode": 50,
			"code": "AMR",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6377792358398,
			"lng": 4.73972225189209,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Alkmaar",
				"middel": "Alkmaar",
				"kort": "Alkmaar"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400051",
			"UICCode": "8400051",
			"UICCdCode": "118400051",
			"cdCode": 51,
			"code": "AML",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3580551147461,
			"lng": 6.65388870239258,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almelo",
				"middel": "Almelo",
				"kort": "Almelo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AML",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400052",
			"UICCode": "8400052",
			"UICCdCode": "118400052",
			"cdCode": 52,
			"code": "AMRN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6438903808594,
			"lng": 4.76416683197022,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Alkmaar Noord",
				"middel": "Alkmaar Noord",
				"kort": "Alkmaar N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMRN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400053",
			"UICCode": "8400053",
			"UICCdCode": "118400053",
			"cdCode": 53,
			"code": "APN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1244430541992,
			"lng": 4.65777778625488,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Alphen a/d Rijn",
				"middel": "Alphen a/d Rijn",
				"kort": "Alphen"
			},
			"synoniemen": [
				"Alphen aan den Rijn"
			],
			"nearbyMeLocationId": {
				"value": "APN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400054",
			"UICCode": "8400054",
			"UICCdCode": "118400054",
			"cdCode": 54,
			"code": "AMFS",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1748221374512,
			"lng": 5.40388870239258,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amersfoort Schothorst",
				"middel": "Schothorst",
				"kort": "Schothorst"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMFS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400055",
			"UICCode": "8400055",
			"UICCdCode": "118400055",
			"cdCode": 55,
			"code": "AMF",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1538887023926,
			"lng": 5.37055540084839,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amersfoort Centraal",
				"middel": "Amersfoort C.",
				"kort": "Amersfrt C"
			},
			"synoniemen": [
				"Amersfoort CS",
				"Amersfoort"
			],
			"nearbyMeLocationId": {
				"value": "AMF",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "5a"
				},
				{
					"spoorNummer": "5b"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "6a"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "7"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400056",
			"UICCode": "8400056",
			"UICCdCode": "118400056",
			"cdCode": 56,
			"code": "RAI",
			"ingangsDatum": "2006-12-23",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3372230529785,
			"lng": 4.89027786254883,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam RAI",
				"middel": "RAI",
				"kort": "RAI"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RAI",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400057",
			"UICCode": "8400057",
			"UICCdCode": "118400057",
			"cdCode": 57,
			"code": "ASA",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3466682434082,
			"lng": 4.91777801513672,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Amstel",
				"middel": "Amstel",
				"kort": "Amstel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400058",
			"UICCode": "8400058",
			"UICCdCode": "118400058",
			"cdCode": 58,
			"code": "ASD",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3788871765137,
			"lng": 4.90027761459351,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Centraal",
				"middel": "Amsterdam C.",
				"kort": "Amsterdm C"
			},
			"synoniemen": [
				"Amsterdam CS",
				"Amsterdam"
			],
			"nearbyMeLocationId": {
				"value": "ASD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "5a"
				},
				{
					"spoorNummer": "5b"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "7a"
				},
				{
					"spoorNummer": "7b"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "8a"
				},
				{
					"spoorNummer": "8b"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "10a"
				},
				{
					"spoorNummer": "10b"
				},
				{
					"spoorNummer": "11"
				},
				{
					"spoorNummer": "11a"
				},
				{
					"spoorNummer": "11b"
				},
				{
					"spoorNummer": "13"
				},
				{
					"spoorNummer": "13a"
				},
				{
					"spoorNummer": "13b"
				},
				{
					"spoorNummer": "14"
				},
				{
					"spoorNummer": "14a"
				},
				{
					"spoorNummer": "14b"
				},
				{
					"spoorNummer": "15"
				},
				{
					"spoorNummer": "15a"
				},
				{
					"spoorNummer": "15b"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400059",
			"UICCode": "8400059",
			"UICCdCode": "118400059",
			"cdCode": 59,
			"code": "ASS",
			"ingangsDatum": "2015-03-18",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3888893127441,
			"lng": 4.83777761459351,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Sloterdijk",
				"middel": "Sloterdijk",
				"kort": "Sloterdijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "11"
				},
				{
					"spoorNummer": "12"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400060",
			"UICCode": "8400060",
			"UICCdCode": "118400060",
			"cdCode": 60,
			"code": "ASDM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3605537414551,
			"lng": 4.93111133575439,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Amsterdam Muiderpoort",
				"middel": "Muiderpoort",
				"kort": "Muiderprt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400061",
			"UICCode": "8400061",
			"UICCdCode": "118400061",
			"cdCode": 61,
			"code": "ASDZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.338889,
			"lng": 4.872356,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Zuid",
				"middel": "Amsterdam Zuid",
				"kort": "Amsterdm Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASDZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400065",
			"UICCode": "8400065",
			"UICCdCode": "118400065",
			"cdCode": 65,
			"code": "ANA",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.8672218322754,
			"lng": 4.81111097335815,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Anna Paulowna",
				"middel": "Anna Paulowna",
				"kort": "Anna Paulo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ANA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400066",
			"UICCode": "8400066",
			"UICCdCode": "118400066",
			"cdCode": 66,
			"code": "APD",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2091674804687,
			"lng": 5.97027778625488,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Apeldoorn",
				"middel": "Apeldoorn",
				"kort": "Apeldoorn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "APD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400067",
			"UICCode": "8400067",
			"UICCdCode": "118400067",
			"cdCode": 67,
			"code": "APG",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3258135,
			"lng": 6.8619577,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Appingedam",
				"middel": "Appingedam",
				"kort": "Appingedam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "APG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400068",
			"UICCode": "8400068",
			"UICCdCode": "118400068",
			"cdCode": 68,
			"code": "AKL",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8719444274902,
			"lng": 4.99277782440186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Arkel",
				"middel": "Arkel",
				"kort": "Arkel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AKL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400069",
			"UICCode": "8400069",
			"UICCdCode": "118400069",
			"cdCode": 69,
			"code": "ARN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5016670227051,
			"lng": 3.66916656494141,
			"radius": 250,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Arnemuiden",
				"middel": "Arnemuiden",
				"kort": "Arnemuiden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ARN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400071",
			"UICCode": "8400071",
			"UICCdCode": "118400071",
			"cdCode": 71,
			"code": "AH",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9850006103516,
			"lng": 5.89916658401489,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Arnhem Centraal",
				"middel": "Arnhem C.",
				"kort": "Arnhem C"
			},
			"synoniemen": [
				"Arnhem",
				"Arnhem CS"
			],
			"nearbyMeLocationId": {
				"value": "AH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "6a"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "11"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400072",
			"UICCode": "8400072",
			"UICCdCode": "118400072",
			"cdCode": 72,
			"code": "AHP",
			"ingangsDatum": "2014-06-04",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.985279083252,
			"lng": 5.91944456100464,
			"radius": 400,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Arnhem Velperpoort",
				"middel": "Velperpoort",
				"kort": "Velperprt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AHP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400073",
			"UICCode": "8400073",
			"UICCdCode": "118400073",
			"cdCode": 73,
			"code": "ASN",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9916648864746,
			"lng": 6.57083320617676,
			"radius": 300,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Assen",
				"middel": "Assen",
				"kort": "Assen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400074",
			"UICCode": "8400074",
			"UICCdCode": "118400074",
			"cdCode": 74,
			"code": "ASB",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3122215270996,
			"lng": 4.94694423675537,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Bijlmer ArenA",
				"middel": "Bijlmer ArenA",
				"kort": "Bijlmer A"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400075",
			"UICCode": "8400075",
			"UICCdCode": "118400075",
			"cdCode": 75,
			"code": "AHPR",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9880561828613,
			"lng": 5.94388866424561,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Arnhem Presikhaaf",
				"middel": "Presikhaaf",
				"kort": "Presikhaaf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AHPR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400079",
			"UICCode": "8400079",
			"UICCdCode": "118400079",
			"cdCode": 79,
			"code": "ASDL",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3577766418457,
			"lng": 4.83388900756836,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Lelylaan",
				"middel": "Lelylaan",
				"kort": "Lelylaan"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASDL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400080",
			"UICCode": "8400080",
			"UICCdCode": "118400080",
			"cdCode": 80,
			"code": "ALM",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.37503,
			"lng": 5.21764,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Centrum",
				"middel": "Almere C.",
				"kort": "Almere C"
			},
			"synoniemen": [
				"Almere"
			],
			"nearbyMeLocationId": {
				"value": "ALM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400081",
			"UICCode": "8400081",
			"UICCdCode": "118400081",
			"cdCode": 81,
			"code": "ALMB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3941650390625,
			"lng": 5.2780556678772,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Buiten",
				"middel": "Buiten",
				"kort": "Buiten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ALMB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400082",
			"UICCode": "8400082",
			"UICCdCode": "118400082",
			"cdCode": 82,
			"code": "ALMM",
			"ingangsDatum": "2011-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3675003051758,
			"lng": 5.19027757644653,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Muziekwijk",
				"middel": "Muziekwijk",
				"kort": "Muziekwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ALMM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400086",
			"UICCode": "8400086",
			"UICCdCode": "118400086",
			"cdCode": 86,
			"code": "BRN",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2083320617676,
			"lng": 5.28083324432373,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Baarn",
				"middel": "Baarn",
				"kort": "Baarn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400089",
			"UICCode": "8400089",
			"UICCdCode": "118400089",
			"cdCode": 89,
			"code": "BF",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3608969,
			"lng": 6.5185581,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Baflo",
				"middel": "Baflo",
				"kort": "Baflo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BF",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400090",
			"UICCode": "8400090",
			"UICCdCode": "118400090",
			"cdCode": 90,
			"code": "BRD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8547210693359,
			"lng": 4.5533332824707,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Barendrecht",
				"middel": "Barendrecht",
				"kort": "Barendrcht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BRD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400091",
			"UICCode": "8400091",
			"UICCdCode": "118400091",
			"cdCode": 91,
			"code": "BNC",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1399993896484,
			"lng": 5.59027767181396,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Barneveld Centrum",
				"middel": "Barneveld C.",
				"kort": "Barnevld C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BNC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400092",
			"UICCode": "8400092",
			"UICCdCode": "118400092",
			"cdCode": 92,
			"code": "BNN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1613883972168,
			"lng": 5.59805536270142,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Barneveld Noord",
				"middel": "Barneveld Noord",
				"kort": "Barnevld N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BNN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400094",
			"UICCode": "8400094",
			"UICCdCode": "118400094",
			"cdCode": 94,
			"code": "BDM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3068857,
			"lng": 6.593054,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bedum",
				"middel": "Bedum",
				"kort": "Bedum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400096",
			"UICCode": "8400096",
			"UICCdCode": "118400096",
			"cdCode": 96,
			"code": "BK",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9474983215332,
			"lng": 5.78666687011719,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Beek-Elsloo",
				"middel": "Beek-Elsloo",
				"kort": "Beek-E"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400097",
			"UICCode": "8400097",
			"UICCdCode": "118400097",
			"cdCode": 97,
			"code": "BSD",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8994445800781,
			"lng": 5.19444465637207,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Beesd",
				"middel": "Beesd",
				"kort": "Beesd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BSD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400100",
			"UICCode": "8400100",
			"UICCdCode": "118400100",
			"cdCode": 100,
			"code": "BL",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.8547210693359,
			"lng": 6.52111101150513,
			"radius": 300,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Beilen",
				"middel": "Beilen",
				"kort": "Beilen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8479008",
			"UICCode": "8400104",
			"UICCdCode": "118400104",
			"cdCode": 104,
			"code": "ALMP",
			"ingangsDatum": "2011-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3766670227051,
			"lng": 5.24472236633301,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Parkwijk",
				"middel": "Parkwijk",
				"kort": "Parkwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ALMP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400108",
			"UICCode": "8400108",
			"UICCdCode": "118400108",
			"cdCode": 108,
			"code": "BGN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4938888549805,
			"lng": 4.29611110687256,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bergen op Zoom",
				"middel": "Bergen op Zoom",
				"kort": "Bergen opZ"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BGN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400112",
			"UICCode": "8400112",
			"UICCdCode": "118400112",
			"cdCode": 112,
			"code": "BET",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5099983215332,
			"lng": 5.38916683197022,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Best",
				"middel": "Best",
				"kort": "Best"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BET",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400113",
			"UICCode": "8400113",
			"UICCdCode": "118400113",
			"cdCode": 113,
			"code": "BV",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4783325195313,
			"lng": 4.65666675567627,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Beverwijk",
				"middel": "Beverwijk",
				"kort": "Beverwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400114",
			"UICCode": "8400114",
			"UICCdCode": "118400114",
			"cdCode": 114,
			"code": "BHV",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1300010681152,
			"lng": 5.20388889312744,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bilthoven",
				"middel": "Bilthoven",
				"kort": "Bilthoven"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BHV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400111",
			"UICCode": "8400115",
			"UICCdCode": "118400115",
			"cdCode": 115,
			"code": "BNZ",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.128853,
			"lng": 5.60246,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Barneveld Zuid",
				"middel": "Barneveld Zuid",
				"kort": "Barnevld Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BNZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400117",
			"UICCode": "8400117",
			"UICCdCode": "118400117",
			"cdCode": 117,
			"code": "BR",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.372501373291,
			"lng": 6.15500020980835,
			"radius": 525,
			"naderenRadius": 1000,
			"namen": {
				"lang": "Blerick",
				"middel": "Blerick",
				"kort": "Blerick"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400118",
			"UICCode": "8400118",
			"UICCdCode": "118400118",
			"cdCode": 118,
			"code": "BLL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.404167175293,
			"lng": 4.62750005722046,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bloemendaal",
				"middel": "Bloemendaal",
				"kort": "Bloemendl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BLL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400121",
			"UICCode": "8400121",
			"UICCdCode": "118400121",
			"cdCode": 121,
			"code": "BDG",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0813903808594,
			"lng": 4.7461109161377,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bodegraven",
				"middel": "Bodegraven",
				"kort": "Bodegraven"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BDG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400124",
			"UICCode": "8400124",
			"UICCdCode": "118400124",
			"cdCode": 124,
			"code": "BN",
			"ingangsDatum": "2017-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2988891601562,
			"lng": 6.74805545806885,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Borne",
				"middel": "Borne",
				"kort": "Borne"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400125",
			"UICCode": "8400125",
			"UICCdCode": "118400125",
			"cdCode": 125,
			"code": "BSK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0777778625488,
			"lng": 4.64694452285767,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Boskoop",
				"middel": "Boskoop",
				"kort": "Boskoop"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BSK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400126",
			"UICCode": "8400126",
			"UICCdCode": "118400126",
			"cdCode": 126,
			"code": "BSKS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.067658,
			"lng": 4.646186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Boskoop Snijdelwijk",
				"middel": "Snijdelwijk",
				"kort": "Snijdelwk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BSKS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400127",
			"UICCode": "8400127",
			"UICCdCode": "118400127",
			"cdCode": 127,
			"code": "BKG",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6949996948242,
			"lng": 5.23777770996094,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bovenkarspel-Grootebroek",
				"middel": "Bovenkarspel-Gr.",
				"kort": "Bovenk-Gr"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BKG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400128",
			"UICCode": "8400128",
			"UICCdCode": "118400128",
			"cdCode": 128,
			"code": "BMR",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.6445217676531,
			"lng": 5.93903303146362,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Boxmeer",
				"middel": "Boxmeer",
				"kort": "Boxmeer"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BMR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400129",
			"UICCode": "8400129",
			"UICCdCode": "118400129",
			"cdCode": 129,
			"code": "BTL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.58433,
			"lng": 5.31912,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Boxtel",
				"middel": "Boxtel",
				"kort": "Boxtel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BTL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400131",
			"UICCode": "8400131",
			"UICCdCode": "118400131",
			"cdCode": 131,
			"code": "BD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5955543518066,
			"lng": 4.78000020980835,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Breda",
				"middel": "Breda",
				"kort": "Breda"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400132",
			"UICCode": "8400132",
			"UICCdCode": "118400132",
			"cdCode": 132,
			"code": "BDPB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.606388092041,
			"lng": 4.72083330154419,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Breda-Prinsenbeek",
				"middel": "Prinsenbeek",
				"kort": "Prinsenbk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BDPB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400133",
			"UICCode": "8400133",
			"UICCdCode": "118400133",
			"cdCode": 133,
			"code": "BKL",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.17149,
			"lng": 4.9906,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Breukelen",
				"middel": "Breukelen",
				"kort": "Breukelen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BKL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400135",
			"UICCode": "8400135",
			"UICCdCode": "118400135",
			"cdCode": 135,
			"code": "LLZM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.042222,
			"lng": 4.517222,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Lansingerland-Zoetermeer",
				"middel": "Lansingerland",
				"kort": "Lansingerl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LLZM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400136",
			"UICCode": "8400136",
			"UICCdCode": "118400136",
			"cdCode": 136,
			"code": "BMN",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0911102294922,
			"lng": 6.14694452285767,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Brummen",
				"middel": "Brummen",
				"kort": "Brummen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BMN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400139",
			"UICCode": "8400139",
			"UICCdCode": "118400139",
			"cdCode": 139,
			"code": "BP",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2564547,
			"lng": 6.1446496,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Buitenpost",
				"middel": "Buitenpost",
				"kort": "Buitenpost"
			},
			"synoniemen": [
				"Bûtenpost"
			],
			"nearbyMeLocationId": {
				"value": "BP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8400140",
			"UICCode": "8400140",
			"UICCdCode": "118400140",
			"cdCode": 140,
			"code": "BDE",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8969459533691,
			"lng": 5.73666667938232,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bunde",
				"middel": "Bunde",
				"kort": "Bunde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BDE",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400141",
			"UICCode": "8400141",
			"UICCdCode": "118400141",
			"cdCode": 141,
			"code": "BNK",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0630569458008,
			"lng": 5.19444465637207,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bunnik",
				"middel": "Bunnik",
				"kort": "Bunnik"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BNK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400145",
			"UICCode": "8400145",
			"UICCdCode": "118400145",
			"cdCode": 145,
			"code": "BSMZ",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2658348083496,
			"lng": 5.16305541992188,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bussum Zuid",
				"middel": "Bussum Zuid",
				"kort": "Bussum Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BSMZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400147",
			"UICCode": "8400147",
			"UICCdCode": "118400147",
			"cdCode": 147,
			"code": "CPS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9541664123535,
			"lng": 4.58416652679443,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Capelle Schollevaar",
				"middel": "Schollevaar",
				"kort": "Schollevr"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CPS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400151",
			"UICCode": "8400151",
			"UICCdCode": "118400151",
			"cdCode": 151,
			"code": "CAS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5458335876465,
			"lng": 4.65861129760742,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Castricum",
				"middel": "Castricum",
				"kort": "Castricum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CAS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400152",
			"UICCode": "8400152",
			"UICCdCode": "118400152",
			"cdCode": 152,
			"code": "CVM",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8761100769043,
			"lng": 6.05972242355347,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Chevremont",
				"middel": "Chevremont",
				"kort": "Chevremont"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CVM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400153",
			"UICCode": "8400153",
			"UICCdCode": "118400153",
			"cdCode": 153,
			"code": "CO",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6636123657227,
			"lng": 6.73555564880371,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Coevorden",
				"middel": "Coevorden",
				"kort": "Coevorden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8400154",
			"UICCode": "8400154",
			"UICCdCode": "118400154",
			"cdCode": 154,
			"code": "CL",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9466667175293,
			"lng": 5.22694444656372,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Culemborg",
				"middel": "Culemborg",
				"kort": "Culemborg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400155",
			"UICCode": "8400155",
			"UICCdCode": "118400155",
			"cdCode": 155,
			"code": "CK",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.7266825879048,
			"lng": 5.87429523468017,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Cuijk",
				"middel": "Cuijk",
				"kort": "Cuijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400161",
			"UICCode": "8400161",
			"UICCdCode": "118400161",
			"cdCode": 161,
			"code": "DLN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6941680908203,
			"lng": 6.75805568695068,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Dalen",
				"middel": "Dalen",
				"kort": "Dalen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DLN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400163",
			"UICCode": "8400163",
			"UICCdCode": "118400163",
			"cdCode": 163,
			"code": "DMNZ",
			"ingangsDatum": "1993-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3302764892578,
			"lng": 4.95583343505859,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Diemen Zuid",
				"middel": "Diemen Zuid",
				"kort": "Diemen Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DMNZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400164",
			"UICCode": "8400164",
			"UICCdCode": "118400164",
			"cdCode": 164,
			"code": "DA",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4407702,
			"lng": 6.5759947,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Daarlerveen",
				"middel": "Daarlerveen",
				"kort": "Daarlervn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400165",
			"UICCode": "8400165",
			"UICCdCode": "118400165",
			"cdCode": 165,
			"code": "DMN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.34515,
			"lng": 4.967566,
			"radius": 300,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Diemen",
				"middel": "Diemen",
				"kort": "Diemen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DMN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400166",
			"UICCode": "8400166",
			"UICCdCode": "118400166",
			"cdCode": 166,
			"code": "DTCP",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9908332824707,
			"lng": 4.36472225189209,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Delft Campus",
				"middel": "Delft Campus",
				"kort": "Delft Camp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DTCP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400167",
			"UICCode": "8400167",
			"UICCdCode": "118400167",
			"cdCode": 167,
			"code": "DL",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4983329772949,
			"lng": 6.25861120223999,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Dalfsen",
				"middel": "Dalfsen",
				"kort": "Dalfsen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400168",
			"UICCode": "8400168",
			"UICCdCode": "118400168",
			"cdCode": 168,
			"code": "DEI",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1888115,
			"lng": 5.7281572,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Deinum",
				"middel": "Deinum",
				"kort": "Deinum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DEI",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400169",
			"UICCode": "8400169",
			"UICCdCode": "118400169",
			"cdCode": 169,
			"code": "DDN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2599983215332,
			"lng": 6.7161111831665,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Delden",
				"middel": "Delden",
				"kort": "Delden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DDN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400170",
			"UICCode": "8400170",
			"UICCdCode": "118400170",
			"cdCode": 170,
			"code": "DT",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0066680908203,
			"lng": 4.35638904571533,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Delft",
				"middel": "Delft",
				"kort": "Delft"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400171",
			"UICCode": "8400171",
			"UICCdCode": "118400171",
			"cdCode": 171,
			"code": "DZ",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3336625,
			"lng": 6.9240797,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Delfzijl",
				"middel": "Delfzijl",
				"kort": "Delfzijl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400172",
			"UICCode": "8400172",
			"UICCdCode": "118400172",
			"cdCode": 172,
			"code": "DN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4558334350586,
			"lng": 5.78888893127441,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Deurne",
				"middel": "Deurne",
				"kort": "Deurne"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400173",
			"UICCode": "8400173",
			"UICCdCode": "118400173",
			"cdCode": 173,
			"code": "DV",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2574996948242,
			"lng": 6.16055536270142,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Deventer",
				"middel": "Deventer",
				"kort": "Deventer"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400174",
			"UICCode": "8400174",
			"UICCdCode": "118400174",
			"cdCode": 174,
			"code": "DID",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.933502,
			"lng": 6.1324106,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Didam",
				"middel": "Didam",
				"kort": "Didam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DID",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400175",
			"UICCode": "8400175",
			"UICCdCode": "118400175",
			"cdCode": 175,
			"code": "DZW",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3320834,
			"lng": 6.9069092,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Delfzijl West",
				"middel": "Delfzijl West",
				"kort": "Delfzijl W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DZW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400176",
			"UICCode": "8400176",
			"UICCdCode": "118400176",
			"cdCode": 176,
			"code": "DR",
			"ingangsDatum": "1999-05-30",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0449981689453,
			"lng": 6.10305547714233,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Dieren",
				"middel": "Dieren",
				"kort": "Dieren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400177",
			"UICCode": "8400177",
			"UICCdCode": "118400177",
			"cdCode": 177,
			"code": "DTC",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9585962,
			"lng": 6.2962148,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Doetinchem",
				"middel": "Doetinchem",
				"kort": "Doetinchem"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DTC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400179",
			"UICCode": "8400179",
			"UICCdCode": "118400179",
			"cdCode": 179,
			"code": "DLD",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1402778625488,
			"lng": 5.24277782440186,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Dolder",
				"middel": "Den Dolder",
				"kort": "Den Dolder"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DLD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400180",
			"UICCode": "8400180",
			"UICCdCode": "118400180",
			"cdCode": 180,
			"code": "DDR",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8072204589844,
			"lng": 4.66833353042603,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Dordrecht",
				"middel": "Dordrecht",
				"kort": "Dordrecht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DDR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "15"
				},
				{
					"spoorNummer": "20"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400181",
			"UICCode": "8400181",
			"UICCdCode": "118400181",
			"cdCode": 181,
			"code": "DDZD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.7900009155273,
			"lng": 4.67138910293579,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Dordrecht Zuid",
				"middel": "Dordrecht Zuid",
				"kort": "Dordrcht Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DDZD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400182",
			"UICCode": "8400182",
			"UICCdCode": "118400182",
			"cdCode": 182,
			"code": "DB",
			"ingangsDatum": "2003-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0652770996094,
			"lng": 5.25861120223999,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Driebergen-Zeist",
				"middel": "Driebergen-Zeist",
				"kort": "Driebergen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400183",
			"UICCode": "8400183",
			"UICCdCode": "118400183",
			"cdCode": 183,
			"code": "DRH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4425010681152,
			"lng": 4.63805532455444,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Driehuis",
				"middel": "Driehuis",
				"kort": "Driehuis"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DRH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400184",
			"UICCode": "8400184",
			"UICCdCode": "118400184",
			"cdCode": 184,
			"code": "DTCH",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9591413,
			"lng": 6.2598521,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Doetinchem De Huet",
				"middel": "De Huet",
				"kort": "De Huet"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DTCH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400185",
			"UICCode": "8400185",
			"UICCdCode": "118400185",
			"cdCode": 185,
			"code": "DVC",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2502784729004,
			"lng": 6.21444463729858,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Deventer Colmschate",
				"middel": "Colmschate",
				"kort": "Colmschate"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DVC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400186",
			"UICCode": "8400186",
			"UICCdCode": "118400186",
			"cdCode": 186,
			"code": "DDRS",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.801944732666,
			"lng": 4.71666669845581,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Dordrecht Stadspolders",
				"middel": "Stadspolders",
				"kort": "Stadspldrs"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DDRS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400188",
			"UICCode": "8400188",
			"UICCdCode": "118400188",
			"cdCode": 188,
			"code": "DVNK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1472206115723,
			"lng": 4.4563889503479,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "De Vink",
				"middel": "De Vink",
				"kort": "De Vink"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DVNK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400192",
			"UICCode": "8400192",
			"UICCdCode": "118400192",
			"cdCode": 192,
			"code": "DRP",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1778086,
			"lng": 5.6347411,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Dronryp",
				"middel": "Dronryp",
				"kort": "Dronryp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DRP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400193",
			"UICCode": "8400193",
			"UICCdCode": "118400193",
			"cdCode": 193,
			"code": "DVN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9433326721191,
			"lng": 6.01472234725952,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Duiven",
				"middel": "Duiven",
				"kort": "Duiven"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DVN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400194",
			"UICCode": "8400194",
			"UICCdCode": "118400194",
			"cdCode": 194,
			"code": "DVD",
			"ingangsDatum": "1993-05-23",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3233337402344,
			"lng": 4.93638896942139,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Duivendrecht",
				"middel": "Duivendrecht",
				"kort": "Duivendrt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DVD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "8"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400195",
			"UICCode": "8400195",
			"UICCdCode": "118400195",
			"cdCode": 195,
			"code": "EC",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.1005554199219,
			"lng": 5.87888908386231,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Echt",
				"middel": "Echt",
				"kort": "Echt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400196",
			"UICCode": "8400196",
			"UICCdCode": "118400196",
			"cdCode": 196,
			"code": "EHS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4511108398438,
			"lng": 5.45583343505859,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eindhoven Strijp-S",
				"middel": "Strijp-S",
				"kort": "Strijp-S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EHS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400198",
			"UICCode": "8400198",
			"UICCdCode": "118400198",
			"cdCode": 198,
			"code": "DRON",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5344,
			"lng": 5.72089,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Dronten",
				"middel": "Dronten",
				"kort": "Dronten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DRON",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400200",
			"UICCode": "8400200",
			"UICCdCode": "118400200",
			"cdCode": 200,
			"code": "ED",
			"ingangsDatum": "2014-04-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0277786254883,
			"lng": 5.67305564880371,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Ede-Wageningen",
				"middel": "Ede-Wageningen",
				"kort": "Ede-Wag"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ED",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400201",
			"UICCode": "8400201",
			"UICCdCode": "118400201",
			"cdCode": 201,
			"code": "EDC",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0436096191406,
			"lng": 5.66833353042603,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Ede Centrum",
				"middel": "Ede C.",
				"kort": "Ede C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400202",
			"UICCode": "8400202",
			"UICCdCode": "118400202",
			"cdCode": 202,
			"code": "EEM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.458419,
			"lng": 6.832,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eemshaven",
				"middel": "Eemshaven",
				"kort": "Eemshaven"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EEM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400206",
			"UICCode": "8400206",
			"UICCdCode": "118400206",
			"cdCode": 206,
			"code": "EHV",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4433326721191,
			"lng": 5.48138904571533,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eindhoven Centraal",
				"middel": "Eindhoven C.",
				"kort": "Eindhovn C"
			},
			"synoniemen": [
				"Eindhoven",
				"Eindhoven CS"
			],
			"nearbyMeLocationId": {
				"value": "EHV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400207",
			"UICCode": "8400207",
			"UICCdCode": "118400207",
			"cdCode": 207,
			"code": "EST",
			"ingangsDatum": "2014-04-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9169425964355,
			"lng": 5.85500001907349,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Elst",
				"middel": "Elst",
				"kort": "Elst"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400208",
			"UICCode": "8400208",
			"UICCdCode": "118400208",
			"cdCode": 208,
			"code": "EMN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7900009155273,
			"lng": 6.89944458007812,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Emmen",
				"middel": "Emmen",
				"kort": "Emmen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EMN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400210",
			"UICCode": "8400210",
			"UICCdCode": "118400210",
			"cdCode": 210,
			"code": "EKZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6991653442383,
			"lng": 5.28638887405396,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Enkhuizen",
				"middel": "Enkhuizen",
				"kort": "Enkhuizen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EKZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400212",
			"UICCode": "8400212",
			"UICCdCode": "118400212",
			"cdCode": 212,
			"code": "ES",
			"ingangsDatum": "2021-06-21",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2224998474121,
			"lng": 6.8899998664856,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Enschede",
				"middel": "Enschede",
				"kort": "Enschede"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ES",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400216",
			"UICCode": "8400216",
			"UICCdCode": "118400216",
			"cdCode": 216,
			"code": "EML",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3016662597656,
			"lng": 5.61472225189209,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Ermelo",
				"middel": "Ermelo",
				"kort": "Ermelo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EML",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400012",
			"UICCode": "8400217",
			"UICCdCode": "118400217",
			"cdCode": 217,
			"code": "ESE",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2213897705078,
			"lng": 6.95111131668091,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Enschede De Eschmarke",
				"middel": "De Eschmarke",
				"kort": "Eschmarke"
			},
			"synoniemen": [
				"Eschmarke",
				"De Eschmarke"
			],
			"nearbyMeLocationId": {
				"value": "ESE",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400218",
			"UICCode": "8400218",
			"UICCdCode": "118400218",
			"cdCode": 218,
			"code": "ETN",
			"ingangsDatum": "2011-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5750007629395,
			"lng": 4.63583326339722,
			"radius": 260,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Etten-Leur",
				"middel": "Etten-Leur",
				"kort": "Etten-Leur"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ETN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400219",
			"UICCode": "8400219",
			"UICCdCode": "118400219",
			"cdCode": 219,
			"code": "EDN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.7719459533691,
			"lng": 5.71000003814697,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eijsden",
				"middel": "Eijsden",
				"kort": "Eijsden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EDN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400213",
			"UICCode": "8400221",
			"UICCdCode": "118400221",
			"cdCode": 221,
			"code": "ESK",
			"ingangsDatum": "2017-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2374992370605,
			"lng": 6.83888912200928,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Enschede Kennispark",
				"middel": "Kennispark",
				"kort": "Kennispark"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ESK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400024",
			"UICCode": "8400226",
			"UICCdCode": "118400226",
			"cdCode": 226,
			"code": "ALMO",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4033317565918,
			"lng": 5.30055570602417,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Oostvaarders",
				"middel": "Oostvaarders",
				"kort": "Oostvaard"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ALMO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400029",
			"UICCode": "8400227",
			"UICCdCode": "118400227",
			"cdCode": 227,
			"code": "AHZ",
			"ingangsDatum": "2014-04-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9550018310547,
			"lng": 5.85194444656372,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Arnhem Zuid",
				"middel": "Arnhem Zuid",
				"kort": "Arnhem Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AHZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400031",
			"UICCode": "8400228",
			"UICCdCode": "118400228",
			"cdCode": 228,
			"code": "AVAT",
			"ingangsDatum": "2006-05-28",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1927795410156,
			"lng": 5.43388891220093,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amersfoort Vathorst",
				"middel": "Vathorst",
				"kort": "Vathorst"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AVAT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400033",
			"UICCode": "8400229",
			"UICCdCode": "118400229",
			"cdCode": 229,
			"code": "APDO",
			"ingangsDatum": "2006-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2152786254883,
			"lng": 6.00444459915161,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Apeldoorn Osseveld",
				"middel": "Osseveld",
				"kort": "Osseveld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "APDO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400230",
			"UICCode": "8400230",
			"UICCdCode": "118400230",
			"cdCode": 230,
			"code": "BKF",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6961097717285,
			"lng": 5.25277757644653,
			"radius": 250,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bovenkarspel Flora",
				"middel": "Bovenkarspel Fl.",
				"kort": "Bovenk Flo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BKF",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400076",
			"UICCode": "8400231",
			"UICCdCode": "118400231",
			"cdCode": 231,
			"code": "ASHD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.29844,
			"lng": 4.95972,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Holendrecht",
				"middel": "Holendrecht",
				"kort": "Holendrcht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASHD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400232",
			"UICCode": "8400232",
			"UICCdCode": "118400232",
			"cdCode": 232,
			"code": "FN",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1824488,
			"lng": 5.5483094,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Franeker",
				"middel": "Franeker",
				"kort": "Franeker"
			},
			"synoniemen": [
				"Frjentsjer"
			],
			"nearbyMeLocationId": {
				"value": "FN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400032",
			"UICCode": "8400233",
			"UICCdCode": "118400233",
			"cdCode": 233,
			"code": "APDM",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2052764892578,
			"lng": 6.00055551528931,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Apeldoorn De Maten",
				"middel": "De Maten",
				"kort": "De Maten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "APDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400043",
			"UICCode": "8400234",
			"UICCdCode": "118400234",
			"cdCode": 234,
			"code": "EGHM",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8960498196442,
			"lng": 6.0602474212646396,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eygelshoven Markt",
				"middel": "Eygelshoven Mrkt",
				"kort": "Eygelsh M"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EGHM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400083",
			"UICCode": "8400235",
			"UICCdCode": "118400235",
			"cdCode": 235,
			"code": "ASSP",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.35274,
			"lng": 4.94855,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Amsterdam Science Park",
				"middel": "Science Park",
				"kort": "Scienceprk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ASSP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400098",
			"UICCode": "8400236",
			"UICCdCode": "118400236",
			"cdCode": 236,
			"code": "BHDV",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.832222,
			"lng": 4.878056,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Boven-Hardinxveld",
				"middel": "Boven-Hardinxv.",
				"kort": "Boven-Har"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BHDV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400042",
			"UICCode": "8400238",
			"UICCdCode": "118400238",
			"cdCode": 238,
			"code": "GERP",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.20480027,
			"lng": 6.5854178,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Groningen Europapark",
				"middel": "Europapark",
				"kort": "Europapark"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GERP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400034",
			"UICCode": "8400241",
			"UICCdCode": "118400241",
			"cdCode": 241,
			"code": "GDR",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.93074,
			"lng": 6.3486,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Gaanderen",
				"middel": "Gaanderen",
				"kort": "Gaanderen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GDR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400035",
			"UICCode": "8400242",
			"UICCdCode": "118400242",
			"cdCode": 242,
			"code": "HMBV",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4622230529785,
			"lng": 5.60722208023071,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Helmond Brandevoort",
				"middel": "Brandevoort",
				"kort": "Brandevrt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HMBV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400244",
			"UICCode": "8400244",
			"UICCdCode": "118400244",
			"cdCode": 244,
			"code": "GDM",
			"ingangsDatum": "2018-12-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.88301,
			"lng": 5.27127,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Geldermalsen",
				"middel": "Geldermalsen",
				"kort": "Geldermlsn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400245",
			"UICCode": "8400245",
			"UICCdCode": "118400245",
			"cdCode": 245,
			"code": "GP",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4197235107422,
			"lng": 5.55055570602417,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Geldrop",
				"middel": "Geldrop",
				"kort": "Geldrop"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400246",
			"UICCode": "8400246",
			"UICCdCode": "118400246",
			"cdCode": 246,
			"code": "GLN",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9669456481934,
			"lng": 5.84305572509766,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Geleen Oost",
				"middel": "Geleen Oost",
				"kort": "Geleen O"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GLN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400248",
			"UICCode": "8400248",
			"UICCdCode": "118400248",
			"cdCode": 248,
			"code": "LUT",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9755554199219,
			"lng": 5.82472229003906,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Geleen-Lutterade",
				"middel": "Geleen-Lut.",
				"kort": "Geleen-Lut"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LUT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400251",
			"UICCode": "8400251",
			"UICCdCode": "118400251",
			"cdCode": 251,
			"code": "GZ",
			"ingangsDatum": "2002-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.583610534668,
			"lng": 4.92611122131348,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Gilze-Rijen",
				"middel": "Gilze-Rijen",
				"kort": "Gilze-Rij"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400253",
			"UICCode": "8400253",
			"UICCdCode": "118400253",
			"cdCode": 253,
			"code": "GS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4980545043945,
			"lng": 3.89055562019348,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Goes",
				"middel": "Goes",
				"kort": "Goes"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400254",
			"UICCode": "8400254",
			"UICCdCode": "118400254",
			"cdCode": 254,
			"code": "GO",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2302780151367,
			"lng": 6.58444452285767,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Goor",
				"middel": "Goor",
				"kort": "Goor"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400256",
			"UICCode": "8400256",
			"UICCdCode": "118400256",
			"cdCode": 256,
			"code": "GR",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8338890075684,
			"lng": 4.96833324432373,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Gorinchem",
				"middel": "Gorinchem",
				"kort": "Gorinchem"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400257",
			"UICCode": "8400257",
			"UICCdCode": "118400257",
			"cdCode": 257,
			"code": "GDG",
			"ingangsDatum": "1993-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0149993896484,
			"lng": 4.7408332824707,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Gouda Goverwelle",
				"middel": "Goverwelle",
				"kort": "Goverwelle"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GDG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400258",
			"UICCode": "8400258",
			"UICCdCode": "118400258",
			"cdCode": 258,
			"code": "GD",
			"ingangsDatum": "2016-12-11",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0175018310547,
			"lng": 4.70444440841675,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Gouda",
				"middel": "Gouda",
				"kort": "Gouda"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "11"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400259",
			"UICCode": "8400259",
			"UICCdCode": "118400259",
			"cdCode": 259,
			"code": "GBG",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6091651916504,
			"lng": 6.67583322525024,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Gramsbergen",
				"middel": "Gramsbergen",
				"kort": "Gramsbergn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GBG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400011",
			"UICCode": "8400262",
			"UICCdCode": "118400262",
			"cdCode": 262,
			"code": "GBR",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2186126708984,
			"lng": 6.97444438934326,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Glanerbrug",
				"middel": "Glanerbrug",
				"kort": "Glanerbrug"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GBR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400263",
			"UICCode": "8400263",
			"UICCdCode": "118400263",
			"cdCode": 263,
			"code": "GN",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2105560302734,
			"lng": 6.56472206115723,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Groningen",
				"middel": "Groningen",
				"kort": "Groningen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5a"
				},
				{
					"spoorNummer": "6a"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "7"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400264",
			"UICCode": "8400264",
			"UICCdCode": "118400264",
			"cdCode": 264,
			"code": "GNN",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2301469,
			"lng": 6.5563172,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Groningen Noord",
				"middel": "Groningen Noord",
				"kort": "Groningn N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GNN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400266",
			"UICCode": "8400266",
			"UICCdCode": "118400266",
			"cdCode": 266,
			"code": "GW",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.0888900756836,
			"lng": 5.82250022888184,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Grou-Jirnsum",
				"middel": "Grou-Jirnsum",
				"kort": "Grou-Jirns"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400267",
			"UICCode": "8400267",
			"UICCdCode": "118400267",
			"cdCode": 267,
			"code": "GK",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2557403255735,
			"lng": 6.30977869033813,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Grijpskerk",
				"middel": "Grijpskerk",
				"kort": "Grijpskerk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8402735",
			"UICCode": "8400270",
			"UICCdCode": "118400270",
			"cdCode": 270,
			"code": "HLMS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3827781677246,
			"lng": 4.67305564880371,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Haarlem Spaarnwoude",
				"middel": "Spaarnwoude",
				"kort": "Spaarnwde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HLMS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400278",
			"UICCode": "8400278",
			"UICCdCode": "118400278",
			"cdCode": 278,
			"code": "GVM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0905570983887,
			"lng": 4.36944437026978,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Haag Mariahoeve",
				"middel": "Mariahoeve",
				"kort": "Mariahoeve"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GVM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400279",
			"UICCode": "8400279",
			"UICCdCode": "118400279",
			"cdCode": 279,
			"code": "GVMW",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0538902282715,
			"lng": 4.3086109161377,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Haag Moerwijk",
				"middel": "Moerwijk",
				"kort": "Moerwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GVMW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400280",
			"UICCode": "8400280",
			"UICCdCode": "118400280",
			"cdCode": 280,
			"code": "GV",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0697212219238,
			"lng": 4.32250022888184,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Den Haag HS",
				"middel": "Den Haag HS",
				"kort": "Dn Haag HS"
			},
			"synoniemen": [
				"Den Haag Hollands Spoor",
				"Hollands Spoor"
			],
			"nearbyMeLocationId": {
				"value": "GV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400282",
			"UICCode": "8400282",
			"UICCdCode": "118400282",
			"cdCode": 282,
			"code": "GVC",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0802764892578,
			"lng": 4.32499980926514,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Den Haag Centraal",
				"middel": "Den Haag C.",
				"kort": "Den Haag C"
			},
			"synoniemen": [
				"Den Haag CS",
				"Den Haag",
				"'s-Gravenhage"
			],
			"nearbyMeLocationId": {
				"value": "GVC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "11"
				},
				{
					"spoorNummer": "12"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400285",
			"UICCode": "8400285",
			"UICCdCode": "118400285",
			"cdCode": 285,
			"code": "HLM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3877792358398,
			"lng": 4.63833332061768,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Haarlem",
				"middel": "Haarlem",
				"kort": "Haarlem"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HLM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "6a"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "8"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400292",
			"UICCode": "8400292",
			"UICCdCode": "118400292",
			"cdCode": 292,
			"code": "HDG",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2187783,
			"lng": 5.934543,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hurdegaryp",
				"middel": "Hurdegaryp",
				"kort": "Hurdegaryp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HDG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400293",
			"UICCode": "8400293",
			"UICCdCode": "118400293",
			"cdCode": 293,
			"code": "HDB",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5727767944336,
			"lng": 6.62861108779907,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Hardenberg",
				"middel": "Hardenberg",
				"kort": "Hardenberg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HDB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400294",
			"UICCode": "8400294",
			"UICCdCode": "118400294",
			"cdCode": 294,
			"code": "HD",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3375015258789,
			"lng": 5.61972236633301,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Harderwijk",
				"middel": "Harderwijk",
				"kort": "Harderwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400295",
			"UICCode": "8400295",
			"UICCdCode": "118400295",
			"cdCode": 295,
			"code": "GND",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8305549621582,
			"lng": 4.83583354949951,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hardinxveld-Giessendam",
				"middel": "Hardinxveld-G.",
				"kort": "Hardinxvld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "GND",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400296",
			"UICCode": "8400296",
			"UICCdCode": "118400296",
			"cdCode": 296,
			"code": "HLG",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1704205,
			"lng": 5.4251932,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Harlingen",
				"middel": "Harlingen",
				"kort": "Harlingen"
			},
			"synoniemen": [
				"Harns"
			],
			"nearbyMeLocationId": {
				"value": "HLG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400297",
			"UICCode": "8400297",
			"UICCdCode": "118400297",
			"cdCode": 297,
			"code": "HRN",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1761093139648,
			"lng": 6.61722230911255,
			"radius": 300,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Haren",
				"middel": "Haren",
				"kort": "Haren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HRN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8479003",
			"UICCode": "8400298",
			"UICCdCode": "118400298",
			"cdCode": 298,
			"code": "HLGH",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.174917,
			"lng": 5.4112885,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Harlingen Haven",
				"middel": "Harlingen Haven",
				"kort": "Harl Haven"
			},
			"synoniemen": [
				"Harns Haven"
			],
			"nearbyMeLocationId": {
				"value": "HLGH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400299",
			"UICCode": "8400299",
			"UICCdCode": "118400299",
			"cdCode": 299,
			"code": "HMBH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.47068,
			"lng": 5.70177,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Helmond Brouwhuis",
				"middel": "Brouwhuis",
				"kort": "Brouwhuis"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HMBH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400300",
			"UICCode": "8400300",
			"UICCdCode": "118400300",
			"cdCode": 300,
			"code": "HMH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.46794,
			"lng": 5.63085,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Helmond 't Hout",
				"middel": "'t Hout",
				"kort": "'t Hout"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HMH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400302",
			"UICCode": "8400302",
			"UICCdCode": "118400302",
			"cdCode": 302,
			"code": "HAD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3591651916504,
			"lng": 4.60666656494141,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heemstede-Aerdenhout",
				"middel": "Heemstede-A.",
				"kort": "Heemstede"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HAD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400303",
			"UICCode": "8400303",
			"UICCdCode": "118400303",
			"cdCode": 303,
			"code": "HDRZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9324989318848,
			"lng": 4.76416683197022,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Helder Zuid",
				"middel": "Den Helder Zuid",
				"kort": "Dn Heldr Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HDRZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400305",
			"UICCode": "8400305",
			"UICCdCode": "118400305",
			"cdCode": 305,
			"code": "HR",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9613876342773,
			"lng": 5.91416645050049,
			"radius": 260,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Heerenveen",
				"middel": "Heerenveen",
				"kort": "Heerenveen"
			},
			"synoniemen": [
				"It Hearrenfean"
			],
			"nearbyMeLocationId": {
				"value": "HR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400306",
			"UICCode": "8400306",
			"UICCdCode": "118400306",
			"cdCode": 306,
			"code": "HWD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6697235107422,
			"lng": 4.82277774810791,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heerhugowaard",
				"middel": "Heerhugowaard",
				"kort": "Heerhugow"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400307",
			"UICCode": "8400307",
			"UICCdCode": "118400307",
			"cdCode": 307,
			"code": "HRL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8908348083496,
			"lng": 5.97499990463257,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heerlen",
				"middel": "Heerlen",
				"kort": "Heerlen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HRL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400308",
			"UICCode": "8400308",
			"UICCdCode": "118400308",
			"cdCode": 308,
			"code": "HZE",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.3849983215332,
			"lng": 5.56944465637207,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heeze",
				"middel": "Heeze",
				"kort": "Heeze"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HZE",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400309",
			"UICCode": "8400309",
			"UICCdCode": "118400309",
			"cdCode": 309,
			"code": "HLO",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5994453430176,
			"lng": 4.70055532455444,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heiloo",
				"middel": "Heiloo",
				"kort": "Heiloo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HLO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400310",
			"UICCode": "8400310",
			"UICCdCode": "118400310",
			"cdCode": 310,
			"code": "HNO",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4272232055664,
			"lng": 6.22111129760742,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heino",
				"middel": "Heino",
				"kort": "Heino"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HNO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400311",
			"UICCode": "8400311",
			"UICCdCode": "118400311",
			"cdCode": 311,
			"code": "HDR",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9552764892578,
			"lng": 4.76111125946045,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Helder",
				"middel": "Den Helder",
				"kort": "Den Helder"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HDR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400312",
			"UICCode": "8400312",
			"UICCdCode": "118400312",
			"cdCode": 312,
			"code": "HGLO",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2688903808594,
			"lng": 6.81944465637207,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hengelo Oost",
				"middel": "Hengelo Oost",
				"kort": "Hengelo O"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HGLO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400313",
			"UICCode": "8400313",
			"UICCdCode": "118400313",
			"cdCode": 313,
			"code": "HM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4755554199219,
			"lng": 5.66194438934326,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Helmond",
				"middel": "Helmond",
				"kort": "Helmond"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400315",
			"UICCode": "8400315",
			"UICCdCode": "118400315",
			"cdCode": 315,
			"code": "HMN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9222129,
			"lng": 5.6737254,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hemmen-Dodewaard",
				"middel": "Hemmen-Dodew.",
				"kort": "Hemmen-D"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HMN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400316",
			"UICCode": "8400316",
			"UICCdCode": "118400316",
			"cdCode": 316,
			"code": "HGL",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2616653442383,
			"lng": 6.79388904571533,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hengelo",
				"middel": "Hengelo",
				"kort": "Hengelo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HGL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "11"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400317",
			"UICCode": "8400317",
			"UICCdCode": "118400317",
			"cdCode": 317,
			"code": "HK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4952774047852,
			"lng": 4.68694448471069,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heemskerk",
				"middel": "Heemskerk",
				"kort": "Heemskerk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400319",
			"UICCode": "8400319",
			"UICCdCode": "118400319",
			"cdCode": 319,
			"code": "HT",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.69048,
			"lng": 5.29362,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "'s-Hertogenbosch",
				"middel": "'s-Hertogenbosch",
				"kort": "Den Bosch"
			},
			"synoniemen": [
				"Den Bosch",
				"Hertogenbosch ('s)"
			],
			"nearbyMeLocationId": {
				"value": "HT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "6a"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "7a"
				},
				{
					"spoorNummer": "7b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400320",
			"UICCode": "8400320",
			"UICCdCode": "118400320",
			"cdCode": 320,
			"code": "HTO",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.700553894043,
			"lng": 5.3183331489563,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "'s-Hertogenbosch Oost",
				"middel": "'s-Hertogenb. O.",
				"kort": "Dn Bosch O"
			},
			"synoniemen": [
				"Hertogenbosch Oost ('s)",
				"Den Bosch Oost"
			],
			"nearbyMeLocationId": {
				"value": "HTO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400322",
			"UICCode": "8400322",
			"UICCdCode": "118400322",
			"cdCode": 322,
			"code": "HVS",
			"ingangsDatum": "2022-01-06",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2258338928223,
			"lng": 5.18194437026978,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hilversum",
				"middel": "Hilversum",
				"kort": "Hilversum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HVS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400323",
			"UICCode": "8400323",
			"UICCdCode": "118400323",
			"cdCode": 323,
			"code": "HNP",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9464903,
			"lng": 5.423063,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hindeloopen",
				"middel": "Hindeloopen",
				"kort": "Hindeloopn"
			},
			"synoniemen": [
				"Hylpen"
			],
			"nearbyMeLocationId": {
				"value": "HNP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400324",
			"UICCode": "8400324",
			"UICCdCode": "118400324",
			"cdCode": 324,
			"code": "HVSM",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2380561828613,
			"lng": 5.17388868331909,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hilversum Media Park",
				"middel": "Media Park",
				"kort": "Media Park"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HVSM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400326",
			"UICCode": "8400326",
			"UICCdCode": "118400326",
			"cdCode": 326,
			"code": "HB",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9055557250977,
			"lng": 5.93055534362793,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoensbroek",
				"middel": "Hoensbroek",
				"kort": "Hoensbroek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400327",
			"UICCode": "8400327",
			"UICCdCode": "118400327",
			"cdCode": 327,
			"code": "HOR",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1777763366699,
			"lng": 5.17916679382324,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hollandsche Rading",
				"middel": "Holl. Rading",
				"kort": "Hol Rading"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HOR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400328",
			"UICCode": "8400328",
			"UICCdCode": "118400328",
			"cdCode": 328,
			"code": "HON",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2838897705078,
			"lng": 6.42027759552002,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Holten",
				"middel": "Holten",
				"kort": "Holten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HON",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400005",
			"UICCode": "8400329",
			"UICCdCode": "118400329",
			"cdCode": 329,
			"code": "HIL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3025016784668,
			"lng": 4.56555557250977,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hillegom",
				"middel": "Hillegom",
				"kort": "Hillegom"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HIL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400330",
			"UICCode": "8400330",
			"UICCdCode": "118400330",
			"cdCode": 330,
			"code": "HGV",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7338905334473,
			"lng": 6.47361087799072,
			"radius": 300,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Hoogeveen",
				"middel": "Hoogeveen",
				"kort": "Hoogeveen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HGV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400331",
			"UICCode": "8400331",
			"UICCdCode": "118400331",
			"cdCode": 331,
			"code": "HGZ",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1598181316756,
			"lng": 6.77075386047363,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Hoogezand-Sappemeer",
				"middel": "Hoogezand-Sap.",
				"kort": "Hoogezand"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HGZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400332",
			"UICCode": "8400332",
			"UICCdCode": "118400332",
			"cdCode": 332,
			"code": "HFD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2933349609375,
			"lng": 4.70055532455444,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoofddorp",
				"middel": "Hoofddorp",
				"kort": "Hoofddorp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HFD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400334",
			"UICCode": "8400334",
			"UICCdCode": "118400334",
			"cdCode": 334,
			"code": "HKS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6905555725098,
			"lng": 5.18388891220093,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoogkarspel",
				"middel": "Hoogkarspel",
				"kort": "Hoogkrspl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HKS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400010",
			"UICCode": "8400335",
			"UICCdCode": "118400335",
			"cdCode": 335,
			"code": "HTNC",
			"ingangsDatum": "2010-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.01701,
			"lng": 5.17949,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Houten Castellum",
				"middel": "Castellum",
				"kort": "Castellum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HTNC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400336",
			"UICCode": "8400336",
			"UICCdCode": "118400336",
			"cdCode": 336,
			"code": "HNK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6536102294922,
			"lng": 5.08555555343628,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoorn Kersenboogerd",
				"middel": "Kersenboogerd",
				"kort": "Hoorn Kers"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HNK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400337",
			"UICCode": "8400337",
			"UICCdCode": "118400337",
			"cdCode": 337,
			"code": "HN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6447219848633,
			"lng": 5.05555534362793,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoorn",
				"middel": "Hoorn",
				"kort": "Hoorn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400338",
			"UICCode": "8400338",
			"UICCdCode": "118400338",
			"cdCode": 338,
			"code": "EGH",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8905563354492,
			"lng": 6.04500007629395,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Eygelshoven",
				"middel": "Eygelshoven",
				"kort": "Eygelshov"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EGH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400339",
			"UICCode": "8400339",
			"UICCdCode": "118400339",
			"cdCode": 339,
			"code": "HRT",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4263877868652,
			"lng": 6.04222202301025,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Horst-Sevenum",
				"middel": "Horst-Sevenum",
				"kort": "Horst-Sev"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HRT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400340",
			"UICCode": "8400340",
			"UICCdCode": "118400340",
			"cdCode": 340,
			"code": "HTN",
			"ingangsDatum": "2010-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.03402,
			"lng": 5.16821,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Houten",
				"middel": "Houten",
				"kort": "Houten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400341",
			"UICCode": "8400341",
			"UICCdCode": "118400341",
			"cdCode": 341,
			"code": "SGL",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8733329772949,
			"lng": 5.79722213745117,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Houthem-St. Gerlach",
				"middel": "Houthem-St Gerl.",
				"kort": "Houthem-St"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SGL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400353",
			"UICCode": "8400353",
			"UICCdCode": "118400353",
			"cdCode": 353,
			"code": "KPN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5597229003906,
			"lng": 5.92166662216186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kampen",
				"middel": "Kampen",
				"kort": "Kampen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KPN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400354",
			"UICCode": "8400354",
			"UICCdCode": "118400354",
			"cdCode": 354,
			"code": "BZL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4808349609375,
			"lng": 3.95611119270325,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kapelle-Biezelinge",
				"middel": "Kapelle-Biezel.",
				"kort": "Kapelle-Bi"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BZL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400355",
			"UICCode": "8400355",
			"UICCdCode": "118400355",
			"cdCode": 355,
			"code": "KRD",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8616676330566,
			"lng": 6.05749988555908,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kerkrade Centrum",
				"middel": "Kerkrade C.",
				"kort": "Kerkrade C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KRD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400359",
			"UICCode": "8400359",
			"UICCdCode": "118400359",
			"cdCode": 359,
			"code": "KTR",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9313869,
			"lng": 5.5833465,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kesteren",
				"middel": "Kesteren",
				"kort": "Kesteren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KTR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400360",
			"UICCode": "8400360",
			"UICCdCode": "118400360",
			"cdCode": 360,
			"code": "KPNZ",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5331,
			"lng": 5.91309,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kampen Zuid",
				"middel": "Kampen Zuid",
				"kort": "Kampen Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KPNZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400361",
			"UICCode": "8400361",
			"UICCdCode": "118400361",
			"cdCode": 361,
			"code": "KBK",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1780548095703,
			"lng": 6.08361101150513,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Klarenbeek",
				"middel": "Klarenbeek",
				"kort": "Klarenbk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KBK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400362",
			"UICCode": "8400362",
			"UICCdCode": "118400362",
			"cdCode": 362,
			"code": "KMR",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8663902282715,
			"lng": 5.8905553817749,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Klimmen-Ransdaal",
				"middel": "Klimmen-Ransdaal",
				"kort": "Klimmen-R"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KMR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400363",
			"UICCode": "8400363",
			"UICCdCode": "118400363",
			"cdCode": 363,
			"code": "KZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.458610534668,
			"lng": 4.80555534362793,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Koog aan de Zaan",
				"middel": "Koog a.d. Zaan",
				"kort": "Koog Zaan"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400364",
			"UICCode": "8400364",
			"UICCdCode": "118400364",
			"cdCode": 364,
			"code": "ZZS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.469165802002,
			"lng": 4.80499982833862,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zaandijk Zaanse Schans",
				"middel": "Zaanse Schans",
				"kort": "Zaanse S."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZZS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400366",
			"UICCode": "8400366",
			"UICCdCode": "118400366",
			"cdCode": 366,
			"code": "KMW",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9028197,
			"lng": 5.4106913,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Koudum-Molkwerum",
				"middel": "Koudum-Molkwerum",
				"kort": "Koudum-M"
			},
			"synoniemen": [
				"Koudum-Molkwar"
			],
			"nearbyMeLocationId": {
				"value": "KMW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400367",
			"UICCode": "8400367",
			"UICCdCode": "118400367",
			"cdCode": 367,
			"code": "KBD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4333343505859,
			"lng": 4.11694431304932,
			"radius": 250,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Krabbendijke",
				"middel": "Krabbendijke",
				"kort": "Krabbendke"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KBD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400368",
			"UICCode": "8400368",
			"UICCdCode": "118400368",
			"cdCode": 368,
			"code": "KMA",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.49511,
			"lng": 4.75417,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Krommenie-Assendelft",
				"middel": "Krommenie-Ass.",
				"kort": "Krommenie"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KMA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400369",
			"UICCode": "8400369",
			"UICCdCode": "118400369",
			"cdCode": 369,
			"code": "KW",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1617362,
			"lng": 6.7220882,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kropswolde",
				"middel": "Kropswolde",
				"kort": "Kropswolde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400370",
			"UICCode": "8400370",
			"UICCdCode": "118400370",
			"cdCode": 370,
			"code": "KRG",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4650001525879,
			"lng": 4.03722238540649,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Kruiningen-Yerseke",
				"middel": "Kruiningen-Y.",
				"kort": "Kruiningen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KRG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400030",
			"UICCode": "8400379",
			"UICCdCode": "118400379",
			"cdCode": 379,
			"code": "YPB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0552787780762,
			"lng": 4.39222240447998,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Haag Ypenburg",
				"middel": "Ypenburg",
				"kort": "Ypenburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "YPB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400380",
			"UICCode": "8400380",
			"UICCdCode": "118400380",
			"cdCode": 380,
			"code": "LAA",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0786094665527,
			"lng": 4.34277772903442,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Den Haag Laan v NOI",
				"middel": "Laan v NOI",
				"kort": "Laan v NOI"
			},
			"synoniemen": [
				"Den Haag Laan van NOI",
				"Laan van Nieuw Oost Indië",
				"Laan van NOI"
			],
			"nearbyMeLocationId": {
				"value": "LAA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400382",
			"UICCode": "8400382",
			"UICCdCode": "118400382",
			"cdCode": 382,
			"code": "ZLW",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.6911125183105,
			"lng": 4.66305541992188,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Lage Zwaluwe",
				"middel": "Lage Zwaluwe",
				"kort": "Lage Zwalu"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZLW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400384",
			"UICCode": "8400384",
			"UICCdCode": "118400384",
			"cdCode": 384,
			"code": "LDL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1469459533691,
			"lng": 4.49249982833862,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Leiden Lammenschans",
				"middel": "Lammenschans",
				"kort": "Leiden Lam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LDL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400386",
			"UICCode": "8400386",
			"UICCdCode": "118400386",
			"cdCode": 386,
			"code": "LDM",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8947219848633,
			"lng": 5.09138870239258,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Leerdam",
				"middel": "Leerdam",
				"kort": "Leerdam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400387",
			"UICCode": "8400387",
			"UICCdCode": "118400387",
			"cdCode": 387,
			"code": "LW",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1958351135254,
			"lng": 5.79222202301025,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Leeuwarden",
				"middel": "Leeuwarden",
				"kort": "Leeuwarden"
			},
			"synoniemen": [
				"Ljouwert"
			],
			"nearbyMeLocationId": {
				"value": "LW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6b"
				},
				{
					"spoorNummer": "8"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400388",
			"UICCode": "8400388",
			"UICCdCode": "118400388",
			"cdCode": 388,
			"code": "HDE",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4091682,
			"lng": 5.893611,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "'t Harde",
				"middel": "'t Harde",
				"kort": "'t Harde"
			},
			"synoniemen": [
				"Harde ('t)"
			],
			"nearbyMeLocationId": {
				"value": "HDE",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400389",
			"UICCode": "8400389",
			"UICCdCode": "118400389",
			"cdCode": 389,
			"code": "LWC",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2021808,
			"lng": 5.8422968,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Leeuwarden Camminghaburen",
				"middel": "Camminghaburen",
				"kort": "Camminghab"
			},
			"synoniemen": [
				"Ljouwert Camminghaburen"
			],
			"nearbyMeLocationId": {
				"value": "LWC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400390",
			"UICCode": "8400390",
			"UICCdCode": "118400390",
			"cdCode": 390,
			"code": "LEDN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1661109924316,
			"lng": 4.48166656494141,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Leiden Centraal",
				"middel": "Leiden C.",
				"kort": "Leiden C"
			},
			"synoniemen": [
				"Leiden CS",
				"Leiden"
			],
			"nearbyMeLocationId": {
				"value": "LEDN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "5a"
				},
				{
					"spoorNummer": "5b"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "8a"
				},
				{
					"spoorNummer": "8b"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "9a"
				},
				{
					"spoorNummer": "9b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400394",
			"UICCode": "8400394",
			"UICCdCode": "118400394",
			"cdCode": 394,
			"code": "LLS",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5077781677246,
			"lng": 5.47277784347534,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Lelystad Centrum",
				"middel": "Lelystad C.",
				"kort": "Lelystad C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LLS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400395",
			"UICCode": "8400395",
			"UICCdCode": "118400395",
			"cdCode": 395,
			"code": "LTV",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.01188,
			"lng": 6.59641,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Lichtenvoorde-Groenlo",
				"middel": "Lichtenvoorde-G.",
				"kort": "Lichtenv-G"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LTV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400399",
			"UICCode": "8400399",
			"UICCdCode": "118400399",
			"cdCode": 399,
			"code": "LC",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1666679382324,
			"lng": 6.42638874053955,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Lochem",
				"middel": "Lochem",
				"kort": "Lochem"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400400",
			"UICCode": "8400400",
			"UICCdCode": "118400400",
			"cdCode": 400,
			"code": "HWZB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.385935,
			"lng": 4.747165,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Halfweg-Zwanenburg",
				"middel": "Halfweg-Zw.",
				"kort": "Halfweg-Zw"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HWZB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400403",
			"UICCode": "8400403",
			"UICCdCode": "118400403",
			"cdCode": 403,
			"code": "LP",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3347145,
			"lng": 6.7472625,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Loppersum",
				"middel": "Loppersum",
				"kort": "Loppersum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400087",
			"UICCode": "8400404",
			"UICCdCode": "118400404",
			"cdCode": 404,
			"code": "HRLW",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.896667,
			"lng": 5.952222,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Heerlen Woonboulevard",
				"middel": "Hrl Woonblvd",
				"kort": "Heerlen W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HRLW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400405",
			"UICCode": "8400405",
			"UICCdCode": "118400405",
			"cdCode": 405,
			"code": "LTN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.085277557373,
			"lng": 5.62444448471069,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Lunteren",
				"middel": "Lunteren",
				"kort": "Lunteren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400093",
			"UICCode": "8400407",
			"UICCdCode": "118400407",
			"cdCode": 407,
			"code": "EMNZ",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7488663746914,
			"lng": 6.87478065490722,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Emmen Zuid",
				"middel": "Emmen Zuid",
				"kort": "Emmen Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "EMNZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400417",
			"UICCode": "8400417",
			"UICCdCode": "118400417",
			"cdCode": 417,
			"code": "MRN",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0641670227051,
			"lng": 5.36999988555908,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Maarn",
				"middel": "Maarn",
				"kort": "Maarn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MRN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400419",
			"UICCode": "8400419",
			"UICCdCode": "118400419",
			"cdCode": 419,
			"code": "MAS",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1352767944336,
			"lng": 5.03361129760742,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Maarssen",
				"middel": "Maarssen",
				"kort": "Maarssen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MAS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400424",
			"UICCode": "8400424",
			"UICCdCode": "118400424",
			"cdCode": 424,
			"code": "MT",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8502769470215,
			"lng": 5.70555543899536,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Maastricht",
				"middel": "Maastricht",
				"kort": "Maastricht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "5a"
				},
				{
					"spoorNummer": "5b"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400426",
			"UICCode": "8400426",
			"UICCdCode": "118400426",
			"cdCode": 426,
			"code": "MTR",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8386116027832,
			"lng": 5.71722221374512,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Maastricht Randwyck",
				"middel": "Randwyck",
				"kort": "Randwyck"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MTR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400427",
			"UICCode": "8400427",
			"UICCdCode": "118400427",
			"cdCode": 427,
			"code": "MG",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1296368,
			"lng": 5.7131996,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Mantgum",
				"middel": "Mantgum",
				"kort": "Mantgum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400428",
			"UICCode": "8400428",
			"UICCdCode": "118400428",
			"cdCode": 428,
			"code": "MRB",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5094451904297,
			"lng": 6.57527780532837,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Mariënberg",
				"middel": "Mariënberg",
				"kort": "Mariënberg"
			},
			"synoniemen": [
				"Marienberg"
			],
			"nearbyMeLocationId": {
				"value": "MRB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8400430",
			"UICCode": "8400430",
			"UICCdCode": "118400430",
			"cdCode": 430,
			"code": "MTH",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1607232,
			"lng": 6.7402989,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Martenshoek",
				"middel": "Martenshoek",
				"kort": "Martenshk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MTH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400088",
			"UICCode": "8400432",
			"UICCdCode": "118400432",
			"cdCode": 432,
			"code": "MZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.304986,
			"lng": 5.629796,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Maarheeze",
				"middel": "Maarheeze",
				"kort": "Maarheeze"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400433",
			"UICCode": "8400433",
			"UICCdCode": "118400433",
			"cdCode": 433,
			"code": "HGLG",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.261667,
			"lng": 6.767778,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hengelo Gezondheidspark",
				"middel": "Hengelo Gezondh.",
				"kort": "Gezondhprk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HGLG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400434",
			"UICCode": "8400434",
			"UICCdCode": "118400434",
			"cdCode": 434,
			"code": "MES",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.882879392551,
			"lng": 5.75099945068359,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Meerssen",
				"middel": "Meerssen",
				"kort": "Meerssen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MES",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400435",
			"UICCode": "8400435",
			"UICCdCode": "118400435",
			"cdCode": 435,
			"code": "MP",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6908340454102,
			"lng": 6.19750022888184,
			"radius": 300,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Meppel",
				"middel": "Meppel",
				"kort": "Meppel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400436",
			"UICCode": "8400436",
			"UICCdCode": "118400436",
			"cdCode": 436,
			"code": "MDB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4947204589844,
			"lng": 3.61722230911255,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Middelburg",
				"middel": "Middelburg",
				"kort": "Middelburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MDB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400104",
			"UICCode": "8400438",
			"UICCdCode": "118400438",
			"cdCode": 438,
			"code": "HBZM",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.82944,
			"lng": 4.815663,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hardinxveld Blauwe Zoom",
				"middel": "Blauwe Zoom",
				"kort": "Blauwe Zm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HBZM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400077",
			"UICCode": "8400446",
			"UICCdCode": "118400446",
			"cdCode": 446,
			"code": "MMLH",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.766262,
			"lng": 5.879133,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Mook-Molenhoek",
				"middel": "Molenhoek",
				"kort": "Mook-Molen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MMLH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400449",
			"UICCode": "8400449",
			"UICCdCode": "118400449",
			"cdCode": 449,
			"code": "MTN",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.87087,
			"lng": 5.71774,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Maastricht Noord",
				"middel": "Maastricht Noord",
				"kort": "Maastr. N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400450",
			"UICCode": "8400450",
			"UICCdCode": "118400450",
			"cdCode": 450,
			"code": "AMPO",
			"ingangsDatum": "2012-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.342778,
			"lng": 5.151944,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Almere Poort",
				"middel": "Poort",
				"kort": "Poort"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMPO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400016",
			"UICCode": "8400451",
			"UICCdCode": "118400451",
			"cdCode": 451,
			"code": "NML",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.863154,
			"lng": 5.859625,
			"radius": 200,
			"naderenRadius": 500,
			"namen": {
				"lang": "Nijmegen Lent",
				"middel": "Lent",
				"kort": "Lent"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NML",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400452",
			"UICCode": "8400452",
			"UICCdCode": "118400452",
			"cdCode": 452,
			"code": "NDB",
			"ingangsDatum": "2009-02-18",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2802772521973,
			"lng": 5.15694427490234,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Naarden-Bussum",
				"middel": "Naarden-Bussum",
				"kort": "Naarden-Bu"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NDB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400454",
			"UICCode": "8400454",
			"UICCdCode": "118400454",
			"cdCode": 454,
			"code": "NA",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7186126708984,
			"lng": 6.84861087799072,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Nieuw Amsterdam",
				"middel": "Nw. Amsterdam",
				"kort": "Nw A'dam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "SNELTREIN_STATION"
		},
		{
			"EVACode": "8400455",
			"UICCode": "8400455",
			"UICCdCode": "118400455",
			"cdCode": 455,
			"code": "NWK",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9652786254883,
			"lng": 4.61694431304932,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nieuwerkerk a/d IJssel",
				"middel": "Nieuwerkerk",
				"kort": "Nieuwerkrk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NWK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400457",
			"UICCode": "8400457",
			"UICCdCode": "118400457",
			"cdCode": 457,
			"code": "NSCH",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1844,
			"lng": 7.19937,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Bad Nieuweschans",
				"middel": "Bad Nieuweschans",
				"kort": "Nweschans"
			},
			"synoniemen": [
				"Nieuweschans"
			],
			"nearbyMeLocationId": {
				"value": "NSCH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400460",
			"UICCode": "8400460",
			"UICCdCode": "118400460",
			"cdCode": 460,
			"code": "NVP",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2588882446289,
			"lng": 4.64555549621582,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nieuw Vennep",
				"middel": "Nieuw Vennep",
				"kort": "Nw Vennep"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NVP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400466",
			"UICCode": "8400466",
			"UICCdCode": "118400466",
			"cdCode": 466,
			"code": "NS",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3708343505859,
			"lng": 5.78527784347534,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nunspeet",
				"middel": "Nunspeet",
				"kort": "Nunspeet"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400467",
			"UICCode": "8400467",
			"UICCdCode": "118400467",
			"cdCode": 467,
			"code": "NH",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9194450378418,
			"lng": 5.89277791976929,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nuth",
				"middel": "Nuth",
				"kort": "Nuth"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400468",
			"UICCode": "8400468",
			"UICCdCode": "118400468",
			"cdCode": 468,
			"code": "NMH",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8269462585449,
			"lng": 5.86749982833862,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nijmegen Heyendaal",
				"middel": "Nm Heyendaal",
				"kort": "Heyendaal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NMH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400469",
			"UICCode": "8400469",
			"UICCdCode": "118400469",
			"cdCode": 469,
			"code": "NKK",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2222213745117,
			"lng": 5.49388885498047,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Nijkerk",
				"middel": "Nijkerk",
				"kort": "Nijkerk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NKK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400470",
			"UICCode": "8400470",
			"UICCdCode": "118400470",
			"cdCode": 470,
			"code": "NM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8436126708984,
			"lng": 5.85222244262695,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nijmegen",
				"middel": "Nijmegen",
				"kort": "Nijmegen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "35"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400472",
			"UICCode": "8400472",
			"UICCdCode": "118400472",
			"cdCode": 472,
			"code": "NVD",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.366111,
			"lng": 6.462,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nijverdal",
				"middel": "Nijverdal",
				"kort": "Nijverdal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NVD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400475",
			"UICCode": "8400475",
			"UICCdCode": "118400475",
			"cdCode": 475,
			"code": "NMD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8241653442383,
			"lng": 5.79555559158325,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nijmegen Dukenburg",
				"middel": "Dukenburg",
				"kort": "Dukenburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NMD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400109",
			"UICCode": "8400477",
			"UICCdCode": "118400477",
			"cdCode": 477,
			"code": "NMGO",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8273,
			"lng": 5.822722,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Nijmegen Goffert",
				"middel": "Goffert",
				"kort": "Goffert"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "NMGO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400480",
			"UICCode": "8400480",
			"UICCdCode": "118400480",
			"cdCode": 480,
			"code": "OBD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.6780548095703,
			"lng": 4.90722227096558,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Obdam",
				"middel": "Obdam",
				"kort": "Obdam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OBD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400482",
			"UICCode": "8400482",
			"UICCdCode": "118400482",
			"cdCode": 482,
			"code": "OT",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5822219848633,
			"lng": 5.19416666030884,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Oisterwijk",
				"middel": "Oisterwijk",
				"kort": "Oisterwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400483",
			"UICCode": "8400483",
			"UICCdCode": "118400483",
			"cdCode": 483,
			"code": "ODZ",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3063888549805,
			"lng": 6.93472242355347,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Oldenzaal",
				"middel": "Oldenzaal",
				"kort": "Oldenzaal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ODZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400486",
			"UICCode": "8400486",
			"UICCdCode": "118400486",
			"cdCode": 486,
			"code": "OST",
			"ingangsDatum": "2005-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3347206115723,
			"lng": 6.11305570602417,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Olst",
				"middel": "Olst",
				"kort": "Olst"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400487",
			"UICCode": "8400487",
			"UICCdCode": "118400487",
			"cdCode": 487,
			"code": "OMN",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5094451904297,
			"lng": 6.41583347320557,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Ommen",
				"middel": "Ommen",
				"kort": "Ommen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OMN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8400489",
			"UICCode": "8400489",
			"UICCdCode": "118400489",
			"cdCode": 489,
			"code": "OTB",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9949989318848,
			"lng": 5.84000015258789,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Oosterbeek",
				"middel": "Oosterbeek",
				"kort": "Oosterbeek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OTB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400490",
			"UICCode": "8400490",
			"UICCdCode": "118400490",
			"cdCode": 490,
			"code": "HVL",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.16652,
			"lng": 5.45718,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hoevelaken",
				"middel": "Hoevelaken",
				"kort": "Hoevelaken"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HVL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400494",
			"UICCode": "8400494",
			"UICCdCode": "118400494",
			"cdCode": 494,
			"code": "OP",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9261615,
			"lng": 5.6371145,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Opheusden",
				"middel": "Opheusden",
				"kort": "Opheusden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400495",
			"UICCode": "8400495",
			"UICCdCode": "118400495",
			"cdCode": 495,
			"code": "O",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.7655563354492,
			"lng": 5.53222227096558,
			"radius": 525,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Oss",
				"middel": "Oss",
				"kort": "Oss"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "O",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400496",
			"UICCode": "8400496",
			"UICCdCode": "118400496",
			"cdCode": 496,
			"code": "OW",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.758056640625,
			"lng": 5.50555562973022,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Oss West",
				"middel": "Oss West",
				"kort": "Oss W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400101",
			"UICCode": "8400497",
			"UICCdCode": "118400497",
			"cdCode": 497,
			"code": "SDTB",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.829722,
			"lng": 4.743333,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sliedrecht Baanhoek",
				"middel": "Baanhoek",
				"kort": "Baanhoek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SDTB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400498",
			"UICCode": "8400498",
			"UICCdCode": "118400498",
			"cdCode": 498,
			"code": "ODB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.587776184082,
			"lng": 4.53333330154419,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Oudenbosch",
				"middel": "Oudenbosch",
				"kort": "Oudenbosch"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ODB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400046",
			"UICCode": "8400499",
			"UICCdCode": "118400499",
			"cdCode": 499,
			"code": "PMW",
			"ingangsDatum": "2007-12-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4965906325416,
			"lng": 4.93562936782836,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Purmerend Weidevenne",
				"middel": "Weidevenne",
				"kort": "Weidevenne"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PMW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400501",
			"UICCode": "8400501",
			"UICCdCode": "118400501",
			"cdCode": 501,
			"code": "OVN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3911094665527,
			"lng": 4.6061110496521,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Overveen",
				"middel": "Overveen",
				"kort": "Overveen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "OVN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400505",
			"UICCode": "8400505",
			"UICCdCode": "118400505",
			"cdCode": 505,
			"code": "RSW",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.039722442627,
			"lng": 4.31916666030884,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rijswijk",
				"middel": "Rijswijk",
				"kort": "Rijswijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RSW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400506",
			"UICCode": "8400506",
			"UICCdCode": "118400506",
			"cdCode": 506,
			"code": "PMO",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5113906860352,
			"lng": 4.96833324432373,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Purmerend Overwhere",
				"middel": "Overwhere",
				"kort": "Overwhere"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PMO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400507",
			"UICCode": "8400507",
			"UICCdCode": "118400507",
			"cdCode": 507,
			"code": "RTA",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9519462585449,
			"lng": 4.55361127853394,
			"radius": 260,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Rotterdam Alexander",
				"middel": "Alexander",
				"kort": "Alexander"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RTA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400508",
			"UICCode": "8400508",
			"UICCdCode": "118400508",
			"cdCode": 508,
			"code": "PMR",
			"ingangsDatum": "2011-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5030555725098,
			"lng": 4.95361089706421,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Purmerend",
				"middel": "Purmerend",
				"kort": "Purmerend"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PMR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400509",
			"UICCode": "8400509",
			"UICCdCode": "118400509",
			"cdCode": 509,
			"code": "PT",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2649993896484,
			"lng": 5.57527780532837,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Putten",
				"middel": "Putten",
				"kort": "Putten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "PT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400513",
			"UICCode": "8400513",
			"UICCdCode": "118400513",
			"cdCode": 513,
			"code": "RAT",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3916664123535,
			"lng": 6.27750015258789,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Raalte",
				"middel": "Raalte",
				"kort": "Raalte"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RAT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400515",
			"UICCode": "8400515",
			"UICCdCode": "118400515",
			"cdCode": 515,
			"code": "RVS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.7941665649414,
			"lng": 5.63583326339722,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Ravenstein",
				"middel": "Ravenstein",
				"kort": "Ravenstein"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RVS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400517",
			"UICCode": "8400517",
			"UICCdCode": "118400517",
			"cdCode": 517,
			"code": "RHN",
			"ingangsDatum": "2003-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.958610534668,
			"lng": 5.57833337783814,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rhenen",
				"middel": "Rhenen",
				"kort": "Rhenen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RHN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400518",
			"UICCode": "8400518",
			"UICCdCode": "118400518",
			"cdCode": 518,
			"code": "RV",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.2832191665301,
			"lng": 6.07895851135253,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Reuver",
				"middel": "Reuver",
				"kort": "Reuver"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400519",
			"UICCode": "8400519",
			"UICCdCode": "118400519",
			"cdCode": 519,
			"code": "RH",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0101,
			"lng": 6.0314,
			"radius": 260,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Rheden",
				"middel": "Rheden",
				"kort": "Rheden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400520",
			"UICCode": "8400520",
			"UICCdCode": "118400520",
			"cdCode": 520,
			"code": "AMRI",
			"ingangsDatum": "2017-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3419456481934,
			"lng": 6.66666650772095,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Almelo de Riet",
				"middel": "de Riet",
				"kort": "de Riet"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AMRI",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400521",
			"UICCode": "8400521",
			"UICCdCode": "118400521",
			"cdCode": 521,
			"code": "RB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.422779083252,
			"lng": 4.16111087799072,
			"radius": 250,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rilland-Bath",
				"middel": "Rilland-Bath",
				"kort": "Rilland-Ba"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400523",
			"UICCode": "8400523",
			"UICCdCode": "118400523",
			"cdCode": 523,
			"code": "RM",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.1930541992188,
			"lng": 5.9941668510437,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Roermond",
				"middel": "Roermond",
				"kort": "Roermond"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400524",
			"UICCode": "8400524",
			"UICCdCode": "118400524",
			"cdCode": 524,
			"code": "RS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.7147216796875,
			"lng": 5.36805534362793,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rosmalen",
				"middel": "Rosmalen",
				"kort": "Rosmalen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400525",
			"UICCode": "8400525",
			"UICCdCode": "118400525",
			"cdCode": 525,
			"code": "RD",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.421262,
			"lng": 6.7587,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Roodeschool",
				"middel": "Roodeschool",
				"kort": "Roodeschl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400526",
			"UICCode": "8400526",
			"UICCdCode": "118400526",
			"cdCode": 526,
			"code": "RSD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5402793884277,
			"lng": 4.45833349227905,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Roosendaal",
				"middel": "Roosendaal",
				"kort": "Roosendaal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RSD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400529",
			"UICCode": "8400529",
			"UICCdCode": "118400529",
			"cdCode": 529,
			"code": "RTB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9202766418457,
			"lng": 4.48888874053955,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rotterdam Blaak",
				"middel": "Blaak",
				"kort": "Blaak"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RTB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400530",
			"UICCode": "8400530",
			"UICCdCode": "118400530",
			"cdCode": 530,
			"code": "RTD",
			"ingangsDatum": "2017-02-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9249992370605,
			"lng": 4.46888875961304,
			"radius": 525,
			"naderenRadius": 1000,
			"namen": {
				"lang": "Rotterdam Centraal",
				"middel": "Rotterdam C.",
				"kort": "Rotterdm C"
			},
			"synoniemen": [
				"Rotterdam CS",
				"Rotterdam"
			],
			"nearbyMeLocationId": {
				"value": "RTD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "11"
				},
				{
					"spoorNummer": "12"
				},
				{
					"spoorNummer": "13"
				},
				{
					"spoorNummer": "14"
				},
				{
					"spoorNummer": "15"
				},
				{
					"spoorNummer": "16"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400531",
			"UICCode": "8400531",
			"UICCdCode": "118400531",
			"cdCode": 531,
			"code": "RTN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9422225952148,
			"lng": 4.48166656494141,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rotterdam Noord",
				"middel": "Rotterdam Noord",
				"kort": "Rotterdm N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400533",
			"UICCode": "8400533",
			"UICCdCode": "118400533",
			"cdCode": 533,
			"code": "RTZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9044456481934,
			"lng": 4.51027774810791,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rotterdam Zuid",
				"middel": "Rotterdam Zuid",
				"kort": "Rotterdm Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RTZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400015",
			"UICCode": "8400534",
			"UICCdCode": "118400534",
			"cdCode": 534,
			"code": "RTST",
			"ingangsDatum": "2007-12-09",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": false,
			"land": "NL",
			"lat": 51.8938903808594,
			"lng": 4.51972198486328,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rotterdam Stadion",
				"middel": "R'dam Stadion",
				"kort": "Stadion"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RTST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "FACULTATIEF_STATION"
		},
		{
			"EVACode": "8400537",
			"UICCode": "8400537",
			"UICCdCode": "118400537",
			"cdCode": 537,
			"code": "RL",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0810888,
			"lng": 6.4492656,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Ruurlo",
				"middel": "Ruurlo",
				"kort": "Ruurlo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400538",
			"UICCode": "8400538",
			"UICCdCode": "118400538",
			"cdCode": 538,
			"code": "RSN",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3122215270996,
			"lng": 6.52027797698975,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Rijssen",
				"middel": "Rijssen",
				"kort": "Rijssen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RSN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400542",
			"UICCode": "8400542",
			"UICCdCode": "118400542",
			"cdCode": 542,
			"code": "RLB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8800010681152,
			"lng": 4.53138875961304,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Rotterdam Lombardijen",
				"middel": "Lombardijen",
				"kort": "Lombardije"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RLB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400543",
			"UICCode": "8400543",
			"UICCdCode": "118400543",
			"cdCode": 543,
			"code": "SPTN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4338874816895,
			"lng": 4.63250017166138,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Santpoort Noord",
				"middel": "Santpoort Noord",
				"kort": "Santprt N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SPTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400544",
			"UICCode": "8400544",
			"UICCdCode": "118400544",
			"cdCode": 544,
			"code": "SPTZ",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4197235107422,
			"lng": 4.63138866424561,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Santpoort Zuid",
				"middel": "Santpoort Zuid",
				"kort": "Santprt Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SPTZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400547",
			"UICCode": "8400547",
			"UICCdCode": "118400547",
			"cdCode": 547,
			"code": "SWD",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.29113,
			"lng": 6.5404,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sauwerd",
				"middel": "Sauwerd",
				"kort": "Sauwerd"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SWD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400548",
			"UICCode": "8400548",
			"UICCdCode": "118400548",
			"cdCode": 548,
			"code": "LG",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8963890075684,
			"lng": 6.01916646957398,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Landgraaf",
				"middel": "Landgraaf",
				"kort": "Landgraaf"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400549",
			"UICCode": "8400549",
			"UICCdCode": "118400549",
			"cdCode": 549,
			"code": "SGN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7844429016113,
			"lng": 4.80527782440186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Schagen",
				"middel": "Schagen",
				"kort": "Schagen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SGN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400551",
			"UICCode": "8400551",
			"UICCdCode": "118400551",
			"cdCode": 551,
			"code": "SDA",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1655362,
			"lng": 6.9777775,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Scheemda",
				"middel": "Scheemda",
				"kort": "Scheemda"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SDA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400553",
			"UICCode": "8400553",
			"UICCdCode": "118400553",
			"cdCode": 553,
			"code": "SDM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9212438128032,
			"lng": 4.4089937210083,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Schiedam Centrum",
				"middel": "Schiedam C.",
				"kort": "Schiedam C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400554",
			"UICCode": "8400554",
			"UICCdCode": "118400554",
			"cdCode": 554,
			"code": "SN",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.9391670227051,
			"lng": 5.87444448471069,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Schinnen",
				"middel": "Schinnen",
				"kort": "Schinnen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400555",
			"UICCode": "8400555",
			"UICCdCode": "118400555",
			"cdCode": 555,
			"code": "SOG",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.856388092041,
			"lng": 5.87222242355347,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Schin op Geul",
				"middel": "Schin op Geul",
				"kort": "Schin op G"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SOG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400561",
			"UICCode": "8400561",
			"UICCdCode": "118400561",
			"cdCode": 561,
			"code": "SHL",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3094444274902,
			"lng": 4.76194429397583,
			"radius": 2800,
			"naderenRadius": 3200,
			"namen": {
				"lang": "Schiphol Airport",
				"middel": "Schiphol Airport",
				"kort": "Schiphol",
				"festive": "Schiphol Airport ✈"
			},
			"synoniemen": [
				"Amsterdam Airport"
			],
			"nearbyMeLocationId": {
				"value": "SHL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400564",
			"UICCode": "8400564",
			"UICCdCode": "118400564",
			"cdCode": 564,
			"code": "STD",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.0016670227051,
			"lng": 5.85861110687256,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sittard",
				"middel": "Sittard",
				"kort": "Sittard"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "20"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400565",
			"UICCode": "8400565",
			"UICCdCode": "118400565",
			"cdCode": 565,
			"code": "SDT",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8297233581543,
			"lng": 4.77833318710327,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sliedrecht",
				"middel": "Sliedrecht",
				"kort": "Sliedrecht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SDT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400566",
			"UICCode": "8400566",
			"UICCdCode": "118400566",
			"cdCode": 566,
			"code": "SK",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.0328688,
			"lng": 5.6523969,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Sneek",
				"middel": "Sneek",
				"kort": "Sneek"
			},
			"synoniemen": [
				"Snits"
			],
			"nearbyMeLocationId": {
				"value": "SK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400567",
			"UICCode": "8400567",
			"UICCdCode": "118400567",
			"cdCode": 567,
			"code": "ST",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1733322143555,
			"lng": 5.30999994277954,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Soest",
				"middel": "Soest",
				"kort": "Soest"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400569",
			"UICCode": "8400569",
			"UICCdCode": "118400569",
			"cdCode": 569,
			"code": "SD",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1836128234863,
			"lng": 5.30000019073486,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Soestdijk",
				"middel": "Soestdijk",
				"kort": "Soestdijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400570",
			"UICCode": "8400570",
			"UICCdCode": "118400570",
			"cdCode": 570,
			"code": "HVSP",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2161102294922,
			"lng": 5.18722200393677,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Hilversum Sportpark",
				"middel": "Sportpark",
				"kort": "Sportpark"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "HVSP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400571",
			"UICCode": "8400571",
			"UICCdCode": "118400571",
			"cdCode": 571,
			"code": "STZ",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1652793884277,
			"lng": 5.30305576324463,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Soest Zuid",
				"middel": "Soest Zuid",
				"kort": "Soest Z"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400572",
			"UICCode": "8400572",
			"UICCdCode": "118400572",
			"cdCode": 572,
			"code": "SBK",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.94327,
			"lng": 5.850529,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Spaubeek",
				"middel": "Spaubeek",
				"kort": "Spaubeek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SBK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400574",
			"UICCode": "8400574",
			"UICCdCode": "118400574",
			"cdCode": 574,
			"code": "SKND",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.0409319,
			"lng": 5.6631808,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sneek Noord",
				"middel": "Sneek Noord",
				"kort": "Sneek N"
			},
			"synoniemen": [
				"Snits Noard"
			],
			"nearbyMeLocationId": {
				"value": "SKND",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400575",
			"UICCode": "8400575",
			"UICCdCode": "118400575",
			"cdCode": 575,
			"code": "STV",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.8865535,
			"lng": 5.3600212,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Stavoren",
				"middel": "Stavoren",
				"kort": "Stavoren"
			},
			"synoniemen": [
				"Starum"
			],
			"nearbyMeLocationId": {
				"value": "STV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400576",
			"UICCode": "8400576",
			"UICCdCode": "118400576",
			"cdCode": 576,
			"code": "STM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3262092,
			"lng": 6.6875551,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Stedum",
				"middel": "Stedum",
				"kort": "Stedum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "STM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400578",
			"UICCode": "8400578",
			"UICCdCode": "118400578",
			"cdCode": 578,
			"code": "SWK",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.7915109924316,
			"lng": 6.11455576324463,
			"radius": 300,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Steenwijk",
				"middel": "Steenwijk",
				"kort": "Steenwijk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SWK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400582",
			"UICCode": "8400582",
			"UICCdCode": "118400582",
			"cdCode": 582,
			"code": "SRN",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.0613899230957,
			"lng": 5.86305570602417,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Susteren",
				"middel": "Susteren",
				"kort": "Susteren"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SRN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400583",
			"UICCode": "8400583",
			"UICCdCode": "118400583",
			"cdCode": 583,
			"code": "SM",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.23582,
			"lng": 6.03228,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Swalmen",
				"middel": "Swalmen",
				"kort": "Swalmen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400591",
			"UICCode": "8400591",
			"UICCdCode": "118400591",
			"cdCode": 591,
			"code": "TG",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.33894,
			"lng": 6.14253,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Tegelen",
				"middel": "Tegelen",
				"kort": "Tegelen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400592",
			"UICCode": "8400592",
			"UICCdCode": "118400592",
			"cdCode": 592,
			"code": "TBG",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9224549,
			"lng": 6.3642466,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Terborg",
				"middel": "Terborg",
				"kort": "Terborg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TBG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400594",
			"UICCode": "8400594",
			"UICCdCode": "118400594",
			"cdCode": 594,
			"code": "TBU",
			"ingangsDatum": "2010-12-12",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.564985,
			"lng": 5.051778,
			"radius": 300,
			"naderenRadius": 500,
			"namen": {
				"lang": "Tilburg Universiteit",
				"middel": "Tilburg Uni.",
				"kort": "Tilburg Un"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TBU",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400596",
			"UICCode": "8400596",
			"UICCdCode": "118400596",
			"cdCode": 596,
			"code": "TL",
			"ingangsDatum": "2014-04-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8894462585449,
			"lng": 5.42222213745117,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Tiel",
				"middel": "Tiel",
				"kort": "Tiel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400597",
			"UICCode": "8400597",
			"UICCdCode": "118400597",
			"cdCode": 597,
			"code": "TB",
			"ingangsDatum": "2015-03-18",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5605545043945,
			"lng": 5.08361101150513,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Tilburg",
				"middel": "Tilburg",
				"kort": "Tilburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400021",
			"UICCode": "8400598",
			"UICCdCode": "118400598",
			"cdCode": 598,
			"code": "TBR",
			"ingangsDatum": "2003-12-14",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.5736122131348,
			"lng": 4.99444437026978,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Tilburg Reeshof",
				"middel": "Reeshof",
				"kort": "Reeshof"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TBR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400037",
			"UICCode": "8400599",
			"UICCdCode": "118400599",
			"cdCode": 599,
			"code": "TWL",
			"ingangsDatum": "2006-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2377777099609,
			"lng": 6.09861087799072,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Twello",
				"middel": "Twello",
				"kort": "Twello"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TWL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400036",
			"UICCode": "8400600",
			"UICCdCode": "118400600",
			"cdCode": 600,
			"code": "TPSW",
			"ingangsDatum": "2007-04-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8738899230957,
			"lng": 5.39222240447998,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Tiel Passewaaij",
				"middel": "Passewaaij",
				"kort": "Passewaaij"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "TPSW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400102",
			"UICCode": "8400603",
			"UICCdCode": "118400603",
			"cdCode": 603,
			"code": "SSH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.215278,
			"lng": 4.517222,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Sassenheim",
				"middel": "Sassenheim",
				"kort": "Sassenheim"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "SSH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400606",
			"UICCode": "8400606",
			"UICCdCode": "118400606",
			"cdCode": 606,
			"code": "UTVR",
			"ingangsDatum": "2016-08-22",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.078889,
			"lng": 5.121667,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Vaartsche Rijn",
				"middel": "Vaartsche Rijn",
				"kort": "VaartscheR"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTVR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400607",
			"UICCode": "8400607",
			"UICCdCode": "118400607",
			"cdCode": 607,
			"code": "UTLR",
			"ingangsDatum": "2018-05-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.09896,
			"lng": 5.06523,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Leidsche Rijn",
				"middel": "Leidsche Rijn",
				"kort": "LeidscheRn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTLR",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400039",
			"UICCode": "8400613",
			"UICCdCode": "118400613",
			"cdCode": 613,
			"code": "UTZL",
			"ingangsDatum": "2008-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.103055,
			"lng": 5.09,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Zuilen",
				"middel": "Zuilen",
				"kort": "Zuilen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTZL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400022",
			"UICCode": "8400614",
			"UICCdCode": "118400614",
			"cdCode": 614,
			"code": "UTT",
			"ingangsDatum": "2003-12-14",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1000753,
			"lng": 5.0439547,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Terwijde",
				"middel": "Terwijde",
				"kort": "Terwijde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400615",
			"UICCode": "8400615",
			"UICCdCode": "118400615",
			"cdCode": 615,
			"code": "UTG",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5216674804687,
			"lng": 4.70166683197022,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Uitgeest",
				"middel": "Uitgeest",
				"kort": "Uitgeest"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400617",
			"UICCode": "8400617",
			"UICCdCode": "118400617",
			"cdCode": 617,
			"code": "UHZ",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.4099568,
			"lng": 6.6748869,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Uithuizen",
				"middel": "Uithuizen",
				"kort": "Uithuizen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UHZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400618",
			"UICCode": "8400618",
			"UICCdCode": "118400618",
			"cdCode": 618,
			"code": "UHM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.4145845,
			"lng": 6.7202975,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Uithuizermeeden",
				"middel": "Uithuizermeeden",
				"kort": "Uithuizerm"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UHM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400619",
			"UICCode": "8400619",
			"UICCdCode": "118400619",
			"cdCode": 619,
			"code": "UST",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.4014742,
			"lng": 6.6093776,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Usquert",
				"middel": "Usquert",
				"kort": "Usquert"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400620",
			"UICCode": "8400620",
			"UICCdCode": "118400620",
			"cdCode": 620,
			"code": "UTO",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1100006103516,
			"lng": 5.12472200393677,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Overvecht",
				"middel": "Overvecht",
				"kort": "Overvecht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400621",
			"UICCode": "8400621",
			"UICCdCode": "118400621",
			"cdCode": 621,
			"code": "UT",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0888900756836,
			"lng": 5.11027765274048,
			"radius": 525,
			"naderenRadius": 1550,
			"namen": {
				"lang": "Utrecht Centraal",
				"middel": "Utrecht C.",
				"kort": "Utrecht C"
			},
			"synoniemen": [
				"Utrecht CS",
				"Utrecht"
			],
			"nearbyMeLocationId": {
				"value": "UT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "11"
				},
				{
					"spoorNummer": "12"
				},
				{
					"spoorNummer": "14"
				},
				{
					"spoorNummer": "15"
				},
				{
					"spoorNummer": "18"
				},
				{
					"spoorNummer": "19"
				},
				{
					"spoorNummer": "20"
				},
				{
					"spoorNummer": "21"
				}
			],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8400623",
			"UICCode": "8400623",
			"UICCdCode": "118400623",
			"cdCode": 623,
			"code": "UTLN",
			"ingangsDatum": "2016-06-08",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0655555725098,
			"lng": 5.14416646957397,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Lunetten",
				"middel": "Lunetten",
				"kort": "Lunetten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "UTLN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400027",
			"UICCode": "8400624",
			"UICCdCode": "118400624",
			"cdCode": 624,
			"code": "UTM",
			"ingangsDatum": "2023-10-18",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": false,
			"land": "NL",
			"lat": 52.087776184082,
			"lng": 5.13138866424561,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Utrecht Maliebaan",
				"middel": "Maliebaan",
				"kort": "Maliebaan"
			},
			"synoniemen": [
				"Spoorwegmuseum"
			],
			"nearbyMeLocationId": {
				"value": "UTM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400627",
			"UICCode": "8400627",
			"UICCdCode": "118400627",
			"cdCode": 627,
			"code": "VNDC",
			"ingangsDatum": "2001-06-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0200004577637,
			"lng": 5.54861116409302,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Veenendaal Centrum",
				"middel": "Veenendaal C.",
				"kort": "Veenendl C"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VNDC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400628",
			"UICCode": "8400628",
			"UICCdCode": "118400628",
			"cdCode": 628,
			"code": "VNDW",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0280570983887,
			"lng": 5.53138875961304,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Veenendaal West",
				"middel": "Veenendaal West",
				"kort": "Veenendl W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VNDW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400632",
			"UICCode": "8400632",
			"UICCdCode": "118400632",
			"cdCode": 632,
			"code": "VK",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8697204589844,
			"lng": 5.83222198486328,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Valkenburg",
				"middel": "Valkenburg",
				"kort": "Valkenburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_SNELTREIN_STATION"
		},
		{
			"EVACode": "8400635",
			"UICCode": "8400635",
			"UICCdCode": "118400635",
			"cdCode": 635,
			"code": "VSV",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.937257,
			"lng": 6.458839,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Varsseveld",
				"middel": "Varsseveld",
				"kort": "Varsseveld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VSV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400095",
			"UICCode": "8400636",
			"UICCdCode": "118400636",
			"cdCode": 636,
			"code": "VDM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.10324,
			"lng": 6.88475,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Veendam",
				"middel": "Veendam",
				"kort": "Veendam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VDM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400637",
			"UICCode": "8400637",
			"UICCdCode": "118400637",
			"cdCode": 637,
			"code": "KLP",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0458335876465,
			"lng": 5.57388877868652,
			"radius": 300,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Veenendaal-De Klomp",
				"middel": "De Klomp",
				"kort": "De Klomp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "KLP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400638",
			"UICCode": "8400638",
			"UICCdCode": "118400638",
			"cdCode": 638,
			"code": "FWD",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2351834,
			"lng": 5.9886615,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Feanwâlden",
				"middel": "Feanwâlden",
				"kort": "Feanwâlden"
			},
			"synoniemen": [
				"Feanwalden"
			],
			"nearbyMeLocationId": {
				"value": "FWD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400640",
			"UICCode": "8400640",
			"UICCdCode": "118400640",
			"cdCode": 640,
			"code": "VP",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9947204589844,
			"lng": 5.98027801513672,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Velp",
				"middel": "Velp",
				"kort": "Velp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400644",
			"UICCode": "8400644",
			"UICCdCode": "118400644",
			"cdCode": 644,
			"code": "VL",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.3636093139648,
			"lng": 6.17277765274048,
			"radius": 525,
			"naderenRadius": 1000,
			"namen": {
				"lang": "Venlo",
				"middel": "Venlo",
				"kort": "Venlo"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "4a"
				},
				{
					"spoorNummer": "4b"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400646",
			"UICCode": "8400646",
			"UICCdCode": "118400646",
			"cdCode": 646,
			"code": "VRY",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.526568099007,
			"lng": 6.01417779922485,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Venray",
				"middel": "Venray",
				"kort": "Venray"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VRY",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400647",
			"UICCode": "8400647",
			"UICCdCode": "118400647",
			"cdCode": 647,
			"code": "VLB",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.59193,
			"lng": 5.99714,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vierlingsbeek",
				"middel": "Vierlingsbeek",
				"kort": "Vierlingsb"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VLB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400651",
			"UICCode": "8400651",
			"UICCdCode": "118400651",
			"cdCode": 651,
			"code": "VTN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.103056,
			"lng": 5.007404,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vleuten",
				"middel": "Vleuten",
				"kort": "Vleuten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VTN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400652",
			"UICCode": "8400652",
			"UICCdCode": "118400652",
			"cdCode": 652,
			"code": "VS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4458351135254,
			"lng": 3.59527778625488,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vlissingen",
				"middel": "Vlissingen",
				"kort": "Vlissingen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400653",
			"UICCode": "8400653",
			"UICCdCode": "118400653",
			"cdCode": 653,
			"code": "VSS",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.4647216796875,
			"lng": 3.59527778625488,
			"radius": 250,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vlissingen Souburg",
				"middel": "Souburg",
				"kort": "Souburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VSS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400655",
			"UICCode": "8400655",
			"UICCdCode": "118400655",
			"cdCode": 655,
			"code": "VH",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.2244453430176,
			"lng": 4.4844446182251,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Voorhout",
				"middel": "Voorhout",
				"kort": "Voorhout"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400656",
			"UICCode": "8400656",
			"UICCdCode": "118400656",
			"cdCode": 656,
			"code": "VDL",
			"ingangsDatum": "2022-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 50.8872222900391,
			"lng": 5.93027782440186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Voerendaal",
				"middel": "Voerendaal",
				"kort": "Voerendaal"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VDL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400658",
			"UICCode": "8400658",
			"UICCdCode": "118400658",
			"cdCode": 658,
			"code": "VB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0666656494141,
			"lng": 4.3594446182251,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Voorburg",
				"middel": "Voorburg",
				"kort": "Voorburg"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400659",
			"UICCode": "8400659",
			"UICCdCode": "118400659",
			"cdCode": 659,
			"code": "VST",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1252784729004,
			"lng": 4.43249988555908,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Voorschoten",
				"middel": "Voorschoten",
				"kort": "Voorschtn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VST",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400661",
			"UICCode": "8400661",
			"UICCdCode": "118400661",
			"cdCode": 661,
			"code": "VD",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1071949,
			"lng": 6.3170457,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vorden",
				"middel": "Vorden",
				"kort": "Vorden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400664",
			"UICCode": "8400664",
			"UICCdCode": "118400664",
			"cdCode": 664,
			"code": "VZ",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.40203,
			"lng": 6.60041,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vriezenveen",
				"middel": "Vriezenveen",
				"kort": "Vriezenvn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400666",
			"UICCode": "8400666",
			"UICCdCode": "118400666",
			"cdCode": 666,
			"code": "VHP",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4571921,
			"lng": 6.5696679,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vroomshoop",
				"middel": "Vroomshoop",
				"kort": "Vroomshoop"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VHP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400667",
			"UICCode": "8400667",
			"UICCdCode": "118400667",
			"cdCode": 667,
			"code": "VG",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.6555557250977,
			"lng": 5.29194450378418,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Vught",
				"middel": "Vught",
				"kort": "Vught"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VG",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400038",
			"UICCode": "8400668",
			"UICCdCode": "118400668",
			"cdCode": 668,
			"code": "VEM",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1575012207031,
			"lng": 6.14361095428467,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Voorst-Empe",
				"middel": "Voorst-Empe",
				"kort": "Voorst-E"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VEM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400674",
			"UICCode": "8400674",
			"UICCdCode": "118400674",
			"cdCode": 674,
			"code": "WADN",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0550003051758,
			"lng": 4.64833354949951,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Waddinxveen Noord",
				"middel": "Waddinxveen N.",
				"kort": "Waddinxv N"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WADN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400675",
			"UICCode": "8400675",
			"UICCdCode": "118400675",
			"cdCode": 675,
			"code": "WAD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0441665649414,
			"lng": 4.6497220993042,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Waddinxveen",
				"middel": "Waddinxveen",
				"kort": "Waddinxvn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WAD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400677",
			"UICCode": "8400677",
			"UICCdCode": "118400677",
			"cdCode": 677,
			"code": "WADT",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.02725,
			"lng": 4.6491,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Waddinxveen Triangel",
				"middel": "Triangel",
				"kort": "Triangel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WADT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400679",
			"UICCode": "8400679",
			"UICCdCode": "118400679",
			"cdCode": 679,
			"code": "WFM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3908431,
			"lng": 6.5671364,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Warffum",
				"middel": "Warffum",
				"kort": "Warffum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WFM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400684",
			"UICCode": "8400684",
			"UICCdCode": "118400684",
			"cdCode": 684,
			"code": "WT",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.2486114501953,
			"lng": 5.70361089706421,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Weert",
				"middel": "Weert",
				"kort": "Weert"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "3a"
				},
				{
					"spoorNummer": "3b"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400685",
			"UICCode": "8400685",
			"UICCdCode": "118400685",
			"cdCode": 685,
			"code": "WP",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3127784729004,
			"lng": 5.04305553436279,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Weesp",
				"middel": "Weesp",
				"kort": "Weesp"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400686",
			"UICCode": "8400686",
			"UICCdCode": "118400686",
			"cdCode": 686,
			"code": "WL",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9578065,
			"lng": 6.213844,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wehl",
				"middel": "Wehl",
				"kort": "Wehl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400103",
			"UICCode": "8400688",
			"UICCdCode": "118400688",
			"cdCode": 688,
			"code": "WTV",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.96286,
			"lng": 5.9695,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Westervoort",
				"middel": "Westervoort",
				"kort": "Westervrt"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WTV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400690",
			"UICCode": "8400690",
			"UICCdCode": "118400690",
			"cdCode": 690,
			"code": "WZ",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4541664123535,
			"lng": 6.00250005722046,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wezep",
				"middel": "Wezep",
				"kort": "Wezep"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WZ",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400691",
			"UICCode": "8400691",
			"UICCdCode": "118400691",
			"cdCode": 691,
			"code": "WDN",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3613891601562,
			"lng": 6.59166669845581,
			"radius": 260,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wierden",
				"middel": "Wierden",
				"kort": "Wierden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WDN",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400696",
			"UICCode": "8400696",
			"UICCdCode": "118400696",
			"cdCode": 696,
			"code": "WS",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1392377,
			"lng": 7.035101,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Winschoten",
				"middel": "Winschoten",
				"kort": "Winschoten"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WS",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400697",
			"UICCode": "8400697",
			"UICCdCode": "118400697",
			"cdCode": 697,
			"code": "WSM",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.3300994,
			"lng": 6.5202905,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Winsum",
				"middel": "Winsum",
				"kort": "Winsum"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WSM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400698",
			"UICCode": "8400698",
			"UICCdCode": "118400698",
			"cdCode": 698,
			"code": "WW",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9677307,
			"lng": 6.7155181,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Winterswijk",
				"middel": "Winterswijk",
				"kort": "Winterswk"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400013",
			"UICCode": "8400700",
			"UICCdCode": "118400700",
			"cdCode": 700,
			"code": "WWW",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.97453,
			"lng": 6.70417,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Winterswijk West",
				"middel": "Winterswijk West",
				"kort": "Wintersw W"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WWW",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400702",
			"UICCode": "8400702",
			"UICCdCode": "118400702",
			"cdCode": 702,
			"code": "WD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0849990844727,
			"lng": 4.89361095428467,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Woerden",
				"middel": "Woerden",
				"kort": "Woerden"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400704",
			"UICCode": "8400704",
			"UICCdCode": "118400704",
			"cdCode": 704,
			"code": "WF",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0055541992188,
			"lng": 5.7936110496521,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wolfheze",
				"middel": "Wolfheze",
				"kort": "Wolfheze"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WF",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400705",
			"UICCode": "8400705",
			"UICCdCode": "118400705",
			"cdCode": 705,
			"code": "WV",
			"ingangsDatum": "2023-12-10",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.8808326721191,
			"lng": 6.00361108779907,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Wolvega",
				"middel": "Wolvega",
				"kort": "Wolvega"
			},
			"synoniemen": [
				"Wolvege"
			],
			"nearbyMeLocationId": {
				"value": "WV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400706",
			"UICCode": "8400706",
			"UICCdCode": "118400706",
			"cdCode": 706,
			"code": "WK",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.9724864,
			"lng": 5.4564285,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Workum",
				"middel": "Workum",
				"kort": "Workum"
			},
			"synoniemen": [
				"Warkum"
			],
			"nearbyMeLocationId": {
				"value": "WK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400707",
			"UICCode": "8400707",
			"UICCdCode": "118400707",
			"cdCode": 707,
			"code": "WM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4891662597656,
			"lng": 4.79222202301025,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wormerveer",
				"middel": "Wormerveer",
				"kort": "Wormerveer"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400710",
			"UICCode": "8400710",
			"UICCdCode": "118400710",
			"cdCode": 710,
			"code": "WC",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8116683959961,
			"lng": 5.73083353042603,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Wijchen",
				"middel": "Wijchen",
				"kort": "Wijchen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WC",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400711",
			"UICCode": "8400711",
			"UICCdCode": "118400711",
			"cdCode": 711,
			"code": "WH",
			"ingangsDatum": "2005-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3902778625488,
			"lng": 6.1405553817749,
			"radius": 200,
			"naderenRadius": 1600,
			"namen": {
				"lang": "Wijhe",
				"middel": "Wijhe",
				"kort": "Wijhe"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "WH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8400722",
			"UICCode": "8400722",
			"UICCdCode": "118400722",
			"cdCode": 722,
			"code": "IJT",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.0146614,
			"lng": 5.6160801,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "IJlst",
				"middel": "IJlst",
				"kort": "IJlst"
			},
			"synoniemen": [
				"Drylts"
			],
			"nearbyMeLocationId": {
				"value": "IJT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400728",
			"UICCode": "8400728",
			"UICCdCode": "118400728",
			"cdCode": 728,
			"code": "ZDK",
			"ingangsDatum": "2011-05-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4566650390625,
			"lng": 4.82027769088745,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zaandam Kogerveld",
				"middel": "Kogerveld",
				"kort": "Kogerveld"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZDK",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400731",
			"UICCode": "8400731",
			"UICCdCode": "118400731",
			"cdCode": 731,
			"code": "ZD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.4388885498047,
			"lng": 4.81361103057861,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zaandam",
				"middel": "Zaandam",
				"kort": "Zaandam"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400732",
			"UICCode": "8400732",
			"UICCdCode": "118400732",
			"cdCode": 732,
			"code": "ZBM",
			"ingangsDatum": "1990-01-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.8088874816895,
			"lng": 5.26333332061768,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zaltbommel",
				"middel": "Zaltbommel",
				"kort": "Zaltbommel"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZBM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400733",
			"UICCode": "8400733",
			"UICCdCode": "118400733",
			"cdCode": 733,
			"code": "ZVT",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.3752784729004,
			"lng": 4.53277778625488,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zandvoort aan Zee",
				"middel": "Zandvoort",
				"kort": "Zandvoort"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZVT",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400734",
			"UICCode": "8400734",
			"UICCdCode": "118400734",
			"cdCode": 734,
			"code": "ZA",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.920056,
			"lng": 5.7228408,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zetten-Andelst",
				"middel": "Zetten-Andelst",
				"kort": "Zetten-And"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZA",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400735",
			"UICCode": "8400735",
			"UICCdCode": "118400735",
			"cdCode": 735,
			"code": "ZV",
			"ingangsDatum": "2021-12-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.9230537414551,
			"lng": 6.07194423675537,
			"radius": 260,
			"naderenRadius": 800,
			"namen": {
				"lang": "Zevenaar",
				"middel": "Zevenaar",
				"kort": "Zevenaar"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZV",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400737",
			"UICCode": "8400737",
			"UICCdCode": "118400737",
			"cdCode": 737,
			"code": "ZVB",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.64042,
			"lng": 4.60904,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zevenbergen",
				"middel": "Zevenbergen",
				"kort": "Zevenbergn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZVB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400740",
			"UICCode": "8400740",
			"UICCdCode": "118400740",
			"cdCode": 740,
			"code": "ZTMO",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0463905334473,
			"lng": 4.49277782440186,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zoetermeer Oost",
				"middel": "Zoetermeer Oost",
				"kort": "Zoetermr O"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZTMO",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400741",
			"UICCode": "8400741",
			"UICCdCode": "118400741",
			"cdCode": 741,
			"code": "ZTM",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.0475006103516,
			"lng": 4.47722244262695,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zoetermeer",
				"middel": "Zoetermeer",
				"kort": "Zoetermeer"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZTM",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400742",
			"UICCode": "8400742",
			"UICCdCode": "118400742",
			"cdCode": 742,
			"code": "ZB",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.1596122800056,
			"lng": 6.8679141998291,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zuidbroek",
				"middel": "Zuidbroek",
				"kort": "Zuidbroek"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZB",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_STOPTREIN_STATION"
		},
		{
			"EVACode": "8400743",
			"UICCode": "8400743",
			"UICCdCode": "118400743",
			"cdCode": 743,
			"code": "ZH",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.2486292,
			"lng": 6.4062361,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zuidhorn",
				"middel": "Zuidhorn",
				"kort": "Zuidhorn"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400744",
			"UICCode": "8400744",
			"UICCdCode": "118400744",
			"cdCode": 744,
			"code": "ZP",
			"ingangsDatum": "2014-04-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.1452789306641,
			"lng": 6.19416666030884,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zutphen",
				"middel": "Zutphen",
				"kort": "Zutphen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZP",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "2a"
				},
				{
					"spoorNummer": "2b"
				},
				{
					"spoorNummer": "3"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400745",
			"UICCode": "8400745",
			"UICCdCode": "118400745",
			"cdCode": 745,
			"code": "DWE",
			"ingangsDatum": "2020-09-01",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 53.24817,
			"lng": 6.03463,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "De Westereen",
				"middel": "De Westereen",
				"kort": "Westereen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DWE",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400746",
			"UICCode": "8400746",
			"UICCdCode": "118400746",
			"cdCode": 746,
			"code": "ZLSH",
			"ingangsDatum": "2020-05-13",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.52764,
			"lng": 6.05146,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zwolle Stadshagen",
				"middel": "Stadshagen",
				"kort": "Stadshagen"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZLSH",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8400747",
			"UICCode": "8400747",
			"UICCdCode": "118400747",
			"cdCode": 747,
			"code": "ZL",
			"ingangsDatum": "2025-06-03",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 52.5047225952148,
			"lng": 6.09194421768188,
			"radius": 525,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zwolle",
				"middel": "Zwolle",
				"kort": "Zwolle"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZL",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "1a"
				},
				{
					"spoorNummer": "1b"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				},
				{
					"spoorNummer": "5"
				},
				{
					"spoorNummer": "6"
				},
				{
					"spoorNummer": "7"
				},
				{
					"spoorNummer": "8"
				},
				{
					"spoorNummer": "9"
				},
				{
					"spoorNummer": "10"
				},
				{
					"spoorNummer": "12"
				},
				{
					"spoorNummer": "13"
				},
				{
					"spoorNummer": "14"
				},
				{
					"spoorNummer": "15"
				},
				{
					"spoorNummer": "16"
				}
			],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8400752",
			"UICCode": "8400752",
			"UICCdCode": "118400752",
			"cdCode": 752,
			"code": "ZWD",
			"ingangsDatum": "2024-12-15",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": true,
			"heeftVertrektijden": true,
			"land": "NL",
			"lat": 51.814998626709,
			"lng": 4.64166688919067,
			"radius": 200,
			"naderenRadius": 1200,
			"namen": {
				"lang": "Zwijndrecht",
				"middel": "Zwijndrecht",
				"kort": "Zwijndrcht"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ZWD",
				"type": "stationV2"
			},
			"sporen": [
				{
					"spoorNummer": "1"
				},
				{
					"spoorNummer": "2"
				},
				{
					"spoorNummer": "3"
				},
				{
					"spoorNummer": "4"
				}
			],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8500010",
			"UICCode": "8500010",
			"UICCdCode": "118500010",
			"code": "BASELS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.5474,
			"lng": 7.58956,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Basel SBB",
				"middel": "Basel SBB",
				"kort": "Basel SBB"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BASELS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8500301",
			"UICCode": "8500301",
			"UICCdCode": "118500301",
			"code": "CHRH",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.5512679,
			"lng": 7.7894991,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Rheinfelden",
				"middel": "Rheinfelden",
				"kort": "Rheinfelde"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHRH",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8500305",
			"UICCode": "8500305",
			"UICCdCode": "118500305",
			"code": "CHFR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.5070781,
			"lng": 8.0103831,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Frick",
				"middel": "Frick",
				"kort": "Frick"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHFR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8500309",
			"UICCode": "8500309",
			"UICCdCode": "118500309",
			"code": "CHBR",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.4811263,
			"lng": 8.206427,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Brugg AG",
				"middel": "Brugg AG",
				"kort": "Brugg AG"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHBR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8500320",
			"UICCode": "8500320",
			"UICCdCode": "118500320",
			"code": "CHST",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.5417756,
			"lng": 7.9438987,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Stein-Säckingen",
				"middel": "Stein-Säckingen",
				"kort": "Stein-Säck"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHST",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8503000",
			"UICCode": "8503000",
			"UICCdCode": "118503000",
			"code": "ZUE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.37819,
			"lng": 8.5392,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Zürich HB",
				"middel": "Zürich HB",
				"kort": "Zürich HB"
			},
			"synoniemen": [
				"Zurich"
			],
			"nearbyMeLocationId": {
				"value": "ZUE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8503504",
			"UICCode": "8503504",
			"UICCdCode": "118503504",
			"code": "BADENZ",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 47.47638,
			"lng": 8.30772,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Baden (CH)",
				"middel": "Baden (CH)",
				"kort": "Baden (CH)"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BADENZ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8509000",
			"UICCode": "8509000",
			"UICCdCode": "118509000",
			"code": "CHUR",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 46.853333,
			"lng": 9.528333,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Chur",
				"middel": "Chur",
				"kort": "Chur"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHUR",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8509002",
			"UICCode": "8509002",
			"UICCdCode": "118509002",
			"code": "LANDQ",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "CH",
			"lat": 46.96722,
			"lng": 9.5538,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Landquart",
				"middel": "Landquart",
				"kort": "Landquart"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LANDQ",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8601318",
			"UICCode": "8600083",
			"UICCdCode": "118600083",
			"code": "DKDI",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "DK",
			"lat": 55.490841,
			"lng": 94.81528,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Kolding St.",
				"middel": "Kolding St.",
				"kort": "Kolding St"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DKDI",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8601899",
			"UICCode": "8600100",
			"UICCdCode": "118600100",
			"code": "DPAB",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "DK",
			"lat": 54.824251,
			"lng": 93.58803,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Padborg St.",
				"middel": "Padborg St.",
				"kort": "Padborg St"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DPAB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8601770",
			"UICCode": "8600512",
			"UICCdCode": "118600512",
			"code": "ODENS",
			"ingangsDatum": "2024-12-31",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "DK",
			"lat": 55.24359,
			"lng": 10.23719,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Odense",
				"middel": "Odense",
				"kort": "Odense"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ODENS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8601979",
			"UICCode": "8600611",
			"UICCdCode": "118600611",
			"code": "RINGS",
			"ingangsDatum": "2024-03-22",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "DK",
			"lat": 55.609444,
			"lng": 13.000833,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Ringsted",
				"middel": "Ringsted",
				"kort": "Ringsted"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "RINGS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8601309",
			"UICCode": "8600626",
			"UICCdCode": "118600626",
			"code": "DKOPHA",
			"ingangsDatum": "2025-10-02",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "DK",
			"lat": 55.672722,
			"lng": 12.564617,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "København Hovedb.",
				"middel": "København H.",
				"kort": "København"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "DKOPHA",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8704949",
			"UICCode": "8722326",
			"UICCdCode": "118722326",
			"code": "LILLEE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 50.639444,
			"lng": 3.074722,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lille Europe",
				"middel": "Lille Europe",
				"kort": "Lille E."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LILLEE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700014",
			"UICCode": "8727100",
			"UICCdCode": "118727100",
			"code": "PARIS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 48.87977,
			"lng": 2.35575,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Paris-Nord",
				"middel": "Paris-Nord",
				"kort": "Paris-Nord"
			},
			"synoniemen": [
				"Parijs"
			],
			"nearbyMeLocationId": {
				"value": "PARIS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8704997",
			"UICCode": "8727149",
			"UICCdCode": "118727149",
			"code": "ACDG",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 49.004048,
			"lng": 2.571133,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Airport Charles de Gaulle",
				"middel": "Airport deGaulle",
				"kort": "Airport dG"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ACDG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "KNOOPPUNT_INTERCITY_STATION"
		},
		{
			"EVACode": "8700030",
			"UICCode": "8728600",
			"UICCdCode": "118728600",
			"code": "LILLE",
			"ingangsDatum": "2024-03-22",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 50.635556,
			"lng": 3.072222,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lille Flandres",
				"middel": "Lille Flandres",
				"kort": "Lille F."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LILLE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8704918",
			"UICCode": "8731896",
			"UICCdCode": "118731896",
			"code": "AVTGV",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 43.92194,
			"lng": 4.78604,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Avignon TGV",
				"middel": "Avignon TGV",
				"kort": "Avignon"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AVTGV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "MEGA_STATION"
		},
		{
			"EVACode": "8704980",
			"UICCode": "8731901",
			"UICCdCode": "118731901",
			"code": "AIXTGV",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 43.5228190773429,
			"lng": 5.44531345367431,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aix-en-Provence TGV",
				"middel": "Aix-en-Provence",
				"kort": "Aix-en-Pro"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AIXTGV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8705722",
			"UICCode": "8738264",
			"UICCdCode": "118738264",
			"code": "MARNE",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 48.86826,
			"lng": 2.78218,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Marne-la-Vallée-Chessy",
				"middel": "Marne-la-Vallée",
				"kort": "Marne-la-V"
			},
			"synoniemen": [
				"Marne-la-Vallee-Chessy",
				"Disneyland Parijs"
			],
			"nearbyMeLocationId": {
				"value": "MARNE",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8700105",
			"UICCode": "8767133",
			"UICCdCode": "118767133",
			"code": "LOURD",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 43.100556,
			"lng": -0.041666,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Lourdes",
				"middel": "Lourdes",
				"kort": "Lourdes"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LOURD",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700055",
			"UICCode": "8774100",
			"UICCdCode": "118774100",
			"code": "CHAMB",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.57127,
			"lng": 5.91953,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Chambéry",
				"middel": "Chambéry",
				"kort": "Chambéry"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "CHAMB",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700128",
			"UICCode": "8774164",
			"UICCdCode": "118774164",
			"code": "ALBERT",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.67302,
			"lng": 6.38306,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Albertville",
				"middel": "Albertville",
				"kort": "Albertv."
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "ALBERT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700129",
			"UICCode": "8774172",
			"UICCdCode": "118774172",
			"code": "MOUT",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.48664,
			"lng": 6.53105,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Moutiers-Salins-Brides",
				"middel": "Moutiers-Salins",
				"kort": "Moutiers-S"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MOUT",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		},
		{
			"EVACode": "8700431",
			"UICCode": "8774176",
			"UICCdCode": "118774176",
			"code": "AIME",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.55438,
			"lng": 6.64869,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Aime-la-Plagne",
				"middel": "Aime-la-Plagne",
				"kort": "Aime-la-Pl"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "AIME",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700444",
			"UICCode": "8774177",
			"UICCdCode": "118774177",
			"code": "LANDRY",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.57414,
			"lng": 6.73378,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Landry",
				"middel": "Landry",
				"kort": "Landry"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "LANDRY",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700130",
			"UICCode": "8774179",
			"UICCdCode": "118774179",
			"code": "BOURG",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 45.61918,
			"lng": 6.77167,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Bourg-St-Maurice",
				"middel": "Bourg-St-Maurice",
				"kort": "Bourg-StM"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "BOURG",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8700074",
			"UICCode": "8775100",
			"UICCdCode": "118775100",
			"code": "MARS",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 43.30381,
			"lng": 5.38195,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Marseille-St-Charles",
				"middel": "Marseille-St-C",
				"kort": "Marseille"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "MARS",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "INTERCITY_STATION"
		},
		{
			"EVACode": "8704943",
			"UICCode": "8776302",
			"UICCdCode": "118776302",
			"code": "VALTGV",
			"ingangsDatum": "2018-12-16",
			"heeftFaciliteiten": true,
			"heeftReisassistentie": false,
			"heeftVertrektijden": true,
			"land": "F",
			"lat": 44.9278,
			"lng": 4.89321,
			"radius": 0,
			"naderenRadius": 0,
			"namen": {
				"lang": "Valence TGV",
				"middel": "Valence TGV",
				"kort": "ValenceTGV"
			},
			"synoniemen": [],
			"nearbyMeLocationId": {
				"value": "VALTGV",
				"type": "stationV2"
			},
			"sporen": [],
			"stationType": "STOPTREIN_STATION"
		}
	]
}

  return data.payload.reduce((acc: Record<string,number>, station) => {
    acc[station.land] = (acc[station.land] || 0)+ 1;
    return acc;
  }, {})
}
  }

