import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';

// component imports
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, ScrollingModule, MatSliderModule],
  exports: [A11yModule, CdkStepperModule, CdkTableModule, CdkTreeModule, DragDropModule, ScrollingModule, MatSliderModule],
})
export class JhMaterialModule {}
