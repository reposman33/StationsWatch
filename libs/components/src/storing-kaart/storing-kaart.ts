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
  @Input('stationsStoringen') stationsStoringen: Station[] = [];
  @Input('selectedStation') selectedStation: Station | null = null;
  @Output('stationsStoring') stationsStoring: EventEmitter<StationsStoring> = new EventEmitter<StationsStoring>()

  protected storingDatum: string = ''; 
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
    }
  }

}
