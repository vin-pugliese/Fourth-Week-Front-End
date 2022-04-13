import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatButtonToggleModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatFormFieldModule, MatButtonToggleModule]
})
export class MaterialModule { }