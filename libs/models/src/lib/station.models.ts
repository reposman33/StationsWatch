export type Station = {
  naam: string;
  cdCode: number;
}

export type Landcode = "NL" | "D" | "B" | "F" | "CH" | "A" | "I" | "S" | "PL" | "CZ" | "DK" | "D" | "GB" | "H";

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
	"land": Landcode;
	"lat": number;
	"lng": number;
	"radius": number;
	"naderenRadius": number;
	"namen": {
		"lang": string;
		"middel": string;
		"kort": string;
	};
	"synoniemen": string[];
	"nearbyMeLocationId": {
		"value": string;
		"type": string;
	};
	"sporen": {"spoorNummer": '1' | '2' | '3' | '4'}[]
	"stationType": string;
}

export type StationData = {
	"payload": StationUitgebreid[];
}

export type StationsStoring = {
	isBestaandeStoring: boolean;
  station: Station,
  storingTitel: string;
  storingDatum: Date;
  storingType: string;
  storingOmschrijving: string;
}