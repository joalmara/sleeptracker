import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { EndPagePage } from './end-page/end-page.page';

import { DeviceMotion } from '@ionic-native/device-motion/ngx';

@NgModule({
  declarations: [AppComponent, EndPagePage],
  entryComponents: [EndPagePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ChartsModule],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
