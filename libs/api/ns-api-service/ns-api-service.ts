import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NS_STATIONS_ENDPOINT,
  OCP_APIM_SUBSCRIPTION_KEY,
} from '../../../apps/StationsWatch/src/app/environments/.environment';
import { Station, StationData, StationUitgebreid } from '../../models';
import { map, Observable, Subject } from 'rxjs';
import { Landcode } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class NsApiService {
  private http = inject(HttpClient);
  private NS_STATIONS_ENDPOINT = NS_STATIONS_ENDPOINT;
  private OCP_APIM_SUBSCRIPTION_KEY = OCP_APIM_SUBSCRIPTION_KEY;

	// communiceer het geselecteerde station in de stationslijst naar de storingscomponent
  public nsStationsLijstSubject = new Subject<Station>();

  public selectStation(selectedStation: Station) {
    this.nsStationsLijstSubject.next(selectedStation)
  }


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

}

