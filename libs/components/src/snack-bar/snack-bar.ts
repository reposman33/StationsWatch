import {
  ChangeDetectionStrategy, Component, inject, Inject, Optional, ViewEncapsulation,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';  

@Component({
  selector: 'ns-snack-bar',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './snack-bar.html',
  styleUrls: ['./snack-bar.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NSSnackBar {
  constructor(
    private snackBarRef: MatSnackBarRef<NSSnackBar>) { }
    
  public data = inject(MAT_SNACK_BAR_DATA)

  close(){
    this.snackBarRef.dismiss()
  }
}
