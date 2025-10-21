export type StationUitgebreid = {
	"EVACode": string;
	"UICCode": string;
	"UICCdCode": string;
	"cdCode": number;
	"code": string;
	"ingangsDatum": string;
	"heeftFaciliteiten": boolean;
	"heeftReisassistentie": boolean;
	"heeftVertrektijden": boolean;
	"land": 'NL' | 'DE' | "B";
	"lat": number;
	"lng": number;
	"radius": number;
	"naderenRadius": number;
	"namen": {
		"lang": string;
		"middel": string;
		"kort": string
	};
	"synoniemen": string[];
	"nearbyMeLocationId": {
		"value": string;
		"type": string
	};
	"sporen": {"spoorNummer": '1' | '2' | '3' | '4'}[]
	"stationType": string
}

export type StationData = {
	"payload": StationUitgebreid[];
}
