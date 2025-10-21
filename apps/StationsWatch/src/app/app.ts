import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomList } from '../../../../libs/components';

@Component({
  imports: [RouterModule, CustomList],
  selector: 'ns-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class App {
  protected title = 'StationsWatch';
}
