import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
  input,
  signal,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Station } from '../../../models';
import { NsApiService } from '../../../api';

/**
 * Description placeholder
 *
 * @typedef {station}
 */
type station = {
  naam: string;
  cdCode: number;
};

/**
 * Description placeholder
 *
 * @export
 * @class CustomList
 * @typedef {CustomList}
 */
@Component({
  selector: 'ns-stations-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule, MatListModule, MatButtonModule],
  templateUrl: './stations-list.html',
  styleUrls: ['./stations-list.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationsList {
  readonly stations = input([] as Station[]);
  @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;

  nsApiService = inject(NsApiService);
  
  // een index om de VirtualScrollViewport te kunnen scrollen naar een letter
  readonly stationsIndex = signal<Map<string, number>>(new Map());
  // de buttons a-z om naar de 1e entry die begint met die letter in de lijst te scrollen
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  // optie in de lijst met stations is geselecteerd
  protected selectedLineIndex: number = -1;

  constructor(){
    // gebruik effect om de index te bouwen zodra de asynchrone data aanwezig is - en niet ervoor
    effect(() => {
      this.buildstationsIndex(this.stations());
    });
  }

  /**
   * Maak een index van de entries in de scroll lijst op basis van de 1e letter van de stationnaam
   *
   * @param {Station[]} stations 
   */
  buildstationsIndex(stations: Station[] | []) {
    const index = new Map<string, number>();
    stations.map((station: Station, i: number) => {
      const firstLetter = station.naam.charAt(0).toUpperCase();
      if (!index.has(firstLetter)) {
        index.set(firstLetter, i);
      }
    });
    this.stationsIndex.set(index);
  }

  /**
   * scroll naar de 1e entry in de lijst die begint met de opgegeven letter
   *
   * @param {string} letter 
   */
  scrollToLetter(letter: string) {
    const index = this.stationsIndex().get(letter);
    if (index !== undefined && this.viewport) {
      this.viewport.scrollToIndex(index, 'smooth');
    }
  }

  protected trackBycdCode(index: number, station: Station): number {
    return station.cdCode;
  }

  selectStation(station: Station, index: number) {
    this.selectedLineIndex = index;
    this.nsApiService.selectStation(station)
  }

}
