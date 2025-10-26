import { Component, inject, ViewEncapsulation, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StationsList } from '../../../../libs/components';
import { StoringKaart } from '../../../../libs/components';
import { NsApiService } from 'libs/api';
import { Station } from 'libs/models';
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
  private nsApiService = inject(NsApiService)

  // alle NL stations opvragen van ns-api service;
  private stations$: Observable<Station[]> = this.nsApiService.getStationsNamen() || [];
  // omzetten naar signal om geen lifecycle methods te hoeven gebruiken in child component
  protected stationsData: Signal<Station[]> = toSignal(this.stations$, {initialValue:[]});
  // communiceer geselecteerde station naar storingKaart component
  protected selectedStation: Station = {naam:'', cdCode: 0};

  protected title = 'StationsWatch';

  onStationSelected(station: Station) {
    this.selectedStation = station;
  }

}
