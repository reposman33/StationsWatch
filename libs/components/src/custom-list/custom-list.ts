import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NsApiService } from '../../../api';
import { StationData, StationUitgebreid } from '../../../models';
import { Station } from '../../../models';
import { Observable } from 'rxjs';

type station = {
  naam: string;
  cdCode: number;
};

@Component({
  selector: 'ns-custom-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule, MatListModule, MatButtonModule],
  templateUrl: './custom-list.html',
  styleUrls: ['./custom-list.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomList implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport?: CdkVirtualScrollViewport;

  stations: Station[] = [];
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letterIndexMap: { [letter: string]: number } = {};
  private nsApiService = inject(NsApiService);

  ngOnInit() {
    this.getStationData()
      .pipe(
        map((data: StationData): Station[] =>
          data.payload
            .filter((station: StationUitgebreid): boolean => station.land === 'NL')
            .map(
              (station: StationUitgebreid): Station => ({
                naam: station.namen.lang,
                cdCode: station.cdCode,
              })
            )
        )
      )
      .subscribe((data: Station[]) => {
        this.stations = data
          .slice()
          .sort((a: Station, b: Station) =>
            a.naam.localeCompare(b.naam, 'nl', { sensitivity: 'base' })
          );
        // build the index after sorting so it's based on the sorted list
        this.buildLetterIndexMap();
      });
  }

  ngAfterViewInit() {
    this.scrollToLetter('A');
    console.log('est123ddd');
  }

  getStationData(): Observable<StationData> {
    return this.nsApiService.getStationsNamen();
  }

  buildLetterIndexMap() {
    this.letterIndexMap = {};
    for (let i = 0; i < this.stations.length; i++) {
      const name = this.stations[i].naam;
      const firstLetter = name.charAt(0).toUpperCase();
      if (!(firstLetter in this.letterIndexMap)) {
        this.letterIndexMap[firstLetter] = i;
      }
    }
  }

  scrollToLetter(letter: string) {
    const index = this.letterIndexMap[letter];
    if (index !== undefined && this.viewport) {
      this.viewport.scrollToIndex(index, 'smooth');
    }
  }

  protected trackBycdCode(index?: number, station?: Station): number {
    return station?.cdCode ?? -1;
  }
}
