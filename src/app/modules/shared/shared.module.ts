import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    FormsModule,

    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
