import { Component, inject, ViewEncapsulation, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StationsList } from '../../../../libs/components';
import { StoringKaart } from '../../../../libs/components';
import { NsApiService } from 'libs/api';
import { Station, StationsStoring } from 'libs/models';
import { Observable } from 'rxjs';
import { toSignal} from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterModule, StationsList, StoringKaart],
  selector: 'ns-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
})
export class App {
  protected title = 'StationsWatch';
  private nsApiService = inject(NsApiService)
  // data ophalen doro ns-api service;
  private stations$: Observable<Station[]> = this.nsApiService.getStationsNamen() || [];
  // omzetten naar signal om geen lifecycle methods te hoeven gebruiken in child component
  protected stations: Signal<Station[]> = toSignal(this.stations$, {initialValue:[]});
  protected selectedStation: Station | null= null;
  protected alleStationsStoringen: StationsStoring[] = [];

  onStationSelected(station: Station | null) {
    console.log(`Geselecteerd station in App component: ${station ? station.naam : '-- geen --' }`);
    this.selectedStation = station || null;
  }

  onStationsStoring(stationsStoring: StationsStoring){
   if (!stationsStoring.isBestaandeStoring) {
    this.alleStationsStoringen.unshift(stationsStoring);
  } else {
    // muteer bestaande object
    this.alleStationsStoringen = this.alleStationsStoringen.map(station => station.station.cdCode === stationsStoring.station.cdCode ? stationsStoring : station);
  }
 }
}
