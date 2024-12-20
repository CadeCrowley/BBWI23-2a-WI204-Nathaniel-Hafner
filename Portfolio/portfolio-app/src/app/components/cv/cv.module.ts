import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CVComponent } from './cv.component';
import { CreateUpdateComponent } from './create-update/create-update.component';

@NgModule({
  declarations: [CVComponent, CreateUpdateComponent],
  imports: [CommonModule, FormsModule],
  exports: [CVComponent, CreateUpdateComponent]
})
export class CVModule {}
