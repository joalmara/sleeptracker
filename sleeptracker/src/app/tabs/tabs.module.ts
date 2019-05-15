import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import {HomePageModule} from "../home/home.module";
import {SleepyModule} from "../sleepy/sleepy.module";
import {TabsRoutingModule} from "./tabs-routing.module";
import { VisualPageModule } from '../visual/visual.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule,
    HomePageModule,
    SleepyModule,
    VisualPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
