import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NS_STATIONS_ENDPOINT, OCP_APIM_SUBSCRIPTION_KEY } from '../../environments/.environment';

@Injectable({
  providedIn: 'root'
})
export class NsApiService {
  private http = inject(HttpClient);
  private NS_STATIONS_ENDPOINT = NS_STATIONS_ENDPOINT;
  private OCP_APIM_SUBSCRIPTION_KEY = OCP_APIM_SUBSCRIPTION_KEY;

  public getStationsNamen() {
    return this.http.get(
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
