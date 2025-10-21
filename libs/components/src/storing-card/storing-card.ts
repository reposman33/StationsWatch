import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ns-storing-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './storing-card.html',
  styleUrls: ['./storing-card.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoringCard {
}
