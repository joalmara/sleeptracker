import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TabsPage } from './tabs.page'
import { HomePage} from "../home/home.page";
import {Sleepy} from "../sleepy/sleepy.page";
import { VisualPage } from "../visual/visual.page";

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
          {
            path: 'HomePage',
            outlet: 'HomePage',
            component: HomePage

          },
          {
              path: 'Sleepy',
              outlet: 'Sleepy',
              component: Sleepy

          },
          {
              path: 'VisualPage',
              outlet: 'VisualPage',
              component: VisualPage

          }
      ]

    },
    {
      path: '',
      redirectTo: '/tabs/(HomePage:HomePage)',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
