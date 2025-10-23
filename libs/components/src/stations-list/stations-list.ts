import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  Signal,
  signal,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Station } from '../../../models';

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
  @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;
  @Input() stations!: Signal<Station[]>;
  @Output() stationNaamSelected: EventEmitter<Station | null> = new EventEmitter<Station | null>();
  
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
  buildstationsIndex(stations: Station[]) {
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

  /**
   * trackBy functie voor de for loop in de template
   *
   * @protected
   * @param {?number} [index] 
   * @param {?Station} [station] 
   * @returns {number} 
   */
  protected trackBycdCode(index?: number, station?: Station): number {
    return station?.cdCode ?? -1;
  }

  selectStation(station: Station, index: number) {
    this.selectedLineIndex = this.selectedLineIndex === -1 ? index :
    this.selectedLineIndex === index ? -1 : index;
 
    const payLoad = this.selectedLineIndex === index ? station : null;
    this.stationNaamSelected.emit(payLoad);

    console.log(`this.selectedLineIndex: ${this.selectedLineIndex}`);
    console.log(`Station: ${station.naam}`);
  }
}
