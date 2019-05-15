import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualPage } from './visual.page';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: VisualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [VisualPage]
})
export class VisualPageModule {}
