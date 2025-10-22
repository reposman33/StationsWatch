import { Component, inject, ViewEncapsulation, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomList } from '../../../../libs/components';
import { StoringKaart } from '../../../../libs/components';
import { NsApiService } from 'libs/api';
import { Station } from 'libs/models';
import { Observable } from 'rxjs';
import { toSignal} from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterModule, CustomList, StoringKaart],
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

  onStationSelected(station: Station | null) {
    console.log(`Geselecteerd station in App component: ${station ? station.naam : '-- geen --' }`);
  }
}
