import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NS_STATIONS_ENDPOINT, OCP_APIM_SUBSCRIPTION_KEY } from '../../../apps/StationsWatch/src/app/environments/.environment';
import { StationData } from '../..//models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NsApiService {
  private http = inject(HttpClient);
  private NS_STATIONS_ENDPOINT = NS_STATIONS_ENDPOINT;
  private OCP_APIM_SUBSCRIPTION_KEY = OCP_APIM_SUBSCRIPTION_KEY;

  public getStationsNamen(): Observable<StationData> {
    return this.http.get<StationData>(
      this.NS_STATIONS_ENDPOINT,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': this.OCP_APIM_SUBSCRIPTION_KEY,
           'Accept': 'application/json'
        }
      }
    )
  }
}
