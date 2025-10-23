import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Station, StationsStoring } from 'libs/models';

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
  @Input('stationsStoringen') stationsStoringen: StationsStoring[] = [];
  @Input('selectedStation') selectedStation: Station | null = null;
  @Output('stationsStoring') stationsStoring: EventEmitter<StationsStoring> = new EventEmitter<StationsStoring>()

  protected storingDatum?: Date; 
  protected storingTitel: string = ''; 
  protected storingType: string = ''; 
  protected storingOmschrijving: string = '';
  protected message: string = '';

  opslaanStation(){
    if (this.selectedStation && this.storingTitel.length && this.storingDatum && this.storingOmschrijving.length && this.storingType.length) {
      const stationsStoring = {
        station: this.selectedStation,
        storingTitel: this.storingTitel,
        storingDatum: this.storingDatum,
        storingType: this.storingType,
        storingOmschrijving: this.storingOmschrijving  
      }
      
      this.stationsStoring.emit(stationsStoring)
      
      this.message = `De storing op station ${this.selectedStation.naam} is geregistreerd`;

        this.selectedStation = null;
        this.storingTitel = '';
        this.storingDatum = undefined;
        this.storingType = '';
        this.storingOmschrijving = '';  

      this.selectedStation = null;
    }
  }

    /**
   * trackBy functie voor de for loop in de template
   *
   * @protected
   * @param {?number} [index] 
   * @param {?Station} [station] 
   * @returns {number} 
   */
  protected trackBycdCode(index?: number, station?: StationsStoring): number {
    return station?.station.cdCode ?? -1;
  }

  bewerkStationStoring(stationStoring: StationsStoring){
    this.isBestaandeStoring = true
    this.storingDatum = stationStoring.storingDatum;
    this.storingTitel = stationStoring.storingTitel;
    this.storingOmschrijving = stationStoring.storingOmschrijving;
    this.storingType = stationStoring.storingType;
    this.selectedStation = stationStoring.station;
  }
}
