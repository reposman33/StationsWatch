import {
  ChangeDetectionStrategy,
  Component,
  effect,
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { NSSnackBar } from '../../';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';

@Component({
  selector: 'ns-storing-kaart',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule  ],
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

  protected message: string = '';
  protected selectedLineIndex = -1;

  protected storingsForm = new FormGroup({
    titel: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    datum: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    type: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    beschrijving: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]})
  })

  private matSnackBar = inject(MatSnackBar)

  constructor() {
    this.nsApiService.nsStationsLijstSubject.subscribe((selectedStation: Station) => this.onStationSelected(selectedStation))
      effect(() => this.selectedStation().naam.length > 0 ? this.storingsForm.enable() : this.storingsForm.disable() )
  }

  onStationSelected(selectedStation: Station){
      this.selectedStation.set(selectedStation);
      // toon station als het al een storing heeft en anders maak het formulier leeg
      const stationsIndex = this.stationsStoringen.findIndex((storing: StationsStoring): boolean => storing.station.cdCode === this.selectedStation().cdCode);
      stationsIndex > -1 ? this.toonGeselecteerdStation(stationsIndex) : this.leegInputVelden()
  }

  opslaanStation(){
    if (this.storingsForm.valid) {
      const stationsStoring: StationsStoring = {
        isNieuw: this.isNieuweStoring,
        station: this.selectedStation(),
        storingTitel: this.storingsForm.controls.titel.value,
        storingDatum: this.storingsForm.controls.datum.value,
        storingType: this.storingsForm.controls.type.value,
        storingOmschrijving: this.storingsForm.controls.beschrijving.value  
      }    
      // wijzig bestaand station in bestaande lijst of voeg nieuw toe
      if(this.isNieuweStoring) {
        this.stationsStoringen.unshift(stationsStoring);
      } else {
        this.stationsStoringen = this.stationsStoringen.map((bestaandeStationStoring: StationsStoring): StationsStoring => 
          bestaandeStationStoring.station.naam !== stationsStoring.station.naam ? bestaandeStationStoring : stationsStoring 
        )
      }
    }

  //   this.matSnackBar.open(`De storing op station ${this.selectedStation().naam} is ${this.isNieuweStoring ? 'geregistreerd' : 'gewijzigd'}`,
  //   'OK',
  //   {
  //     duration: 4000,
  //     panelClass: 'ns-snack-bar'
  //   }
  // );
    this.matSnackBar.openFromComponent(NSSnackBar,
    {
      data: {
        message: `De storing op station ${this.selectedStation().naam} is ${this.isNieuweStoring ? 'geregistreerd' : 'gewijzigd'}`
      },
      duration: 400000,
    }
  );
  
  this.leegInputVelden();
  }

  protected trackBycdCode(station: StationsStoring): number {
    return station.station.cdCode;
  }
  
  toonGeselecteerdStation(index: number) {
    this.selectedLineIndex = index;
    this.isNieuweStoring = false;
    this.selectedStation.set(this.stationsStoringen[index].station);
    this.storingsForm.setValue({
      titel: this.stationsStoringen[index].storingTitel,
      datum: this.stationsStoringen[index].storingDatum,
      type: this.stationsStoringen[index].storingType,
      beschrijving: this.stationsStoringen[index].storingOmschrijving
    })
  }

  leegInputVelden() {
    this.storingsForm.reset()
    this.selectedLineIndex = -1
    this.isNieuweStoring = true;
  }

}
