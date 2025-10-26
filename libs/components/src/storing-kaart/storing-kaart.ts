import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Station, StationsStoring } from '../../../models';
import { NsApiService } from '../../../api';

@Component({
  selector: 'ns-storing-kaart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatDatepickerModule, MatRadioModule, MatListModule],
  templateUrl: './storing-kaart.html',
  styleUrls: ['./storing-kaart.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoringKaart {
  protected nsApiService = inject(NsApiService)
  protected selectedStation = signal<Station>({naam: '', cdCode: 0})

  protected stationsStoringen: StationsStoring[] = [];
  protected isNieuweStoring: boolean = true;

  protected storingDatum?: Date;
  protected storingTitel: string = ''; 
  protected storingType: string = ''; 
  protected storingOmschrijving: string = '';

  protected message: string = '';
  protected selectedLineIndex = -1;

  
  constructor() {
    this.nsApiService.nsStationsLijstSubject.subscribe((selectedStation: Station) => this.onStationSelected(selectedStation))
  }

  onStationSelected(selectedStation: Station){
      this.selectedStation.set(selectedStation);
      console.log('selectedStation:', selectedStation)
      // toon station als het al een storing heeft en anders maak het formulier leeg
      const stationsIndex = this.stationsStoringen.findIndex((storing: StationsStoring): boolean => storing.station.cdCode === this.selectedStation().cdCode);
      stationsIndex > -1 ? this.toonGeselecteerdStation(stationsIndex) : this.leegInputVelden()
  }

  opslaanStation(){
    if (this.storingTitel.length && this.storingDatum && this.storingOmschrijving.length && this.storingType.length) {

      const stationsStoring: StationsStoring = {
        isNieuw: this.isNieuweStoring,
        station: this.selectedStation(),
        storingTitel: this.storingTitel,
        storingDatum: this.storingDatum,
        storingType: this.storingType,
        storingOmschrijving: this.storingOmschrijving  
      }
    
      // wijzig bestaand station in bestaande lijst of voeg nieuw toe
      if(this.isNieuweStoring) {
        this.stationsStoringen.unshift(stationsStoring);
      } else {
        this.stationsStoringen = this.stationsStoringen.map((bestaandeStationStoring: StationsStoring): StationsStoring => 
          bestaandeStationStoring.station.naam !== stationsStoring.station.naam ? bestaandeStationStoring : stationsStoring 
        )
      }
    } else {
      console.log('niet alle velden in het storingsformulier zijn ingevuld');

    }

    this.message = `De storing op station ${this.selectedStation().naam} is ${this.isNieuweStoring ? 'geregistreerd' : 'gewijzigd'}`;
    this.leegInputVelden();
  }

    /**
   * trackBy functie voor de for loop in de template
   *
   * @protected
   * @param {?Station} [station] 
   * @returns {number} 
   */
  
  protected trackBycdCode(station: StationsStoring): number {
    return station.station.cdCode;
  }
  
  toonGeselecteerdStation(index: number) {
    this.selectedLineIndex = index;
    this.isNieuweStoring = false;
    this.selectedStation.set(this.stationsStoringen[index].station);
    this.storingDatum = this.stationsStoringen[index].storingDatum;
    this.storingTitel = this.stationsStoringen[index].storingTitel;
    this.storingType = this.stationsStoringen[index].storingType;
    this.storingOmschrijving = this.stationsStoringen[index].storingOmschrijving;
  }

  leegInputVelden() {
    this.selectedStation = this.selectedStation;
    this.storingTitel = '';
    this.storingDatum = undefined;
    this.storingType = '';
    this.storingOmschrijving = '';
    this.isNieuweStoring = true;
  }

}
