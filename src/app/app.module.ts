import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { Cs1Page } from '../pages/cs1/cs1';
import { CalculoPage } from '../pages/calculo/calculo';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { ComPage } from '../pages/com/com';
import { RoboticaPage } from '../pages/robotica/robotica';
import { PappsPage } from '../pages/papps/papps';
import { PyePage } from '../pages/pye/pye';
import { MiPage } from '../pages/mi/mi';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    Cs1Page,
    CalculoPage,
    DibujoPage,
    ComPage,
    RoboticaPage,
    PyePage,
    PappsPage,
    MiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    Cs1Page,
    CalculoPage,
    DibujoPage,
    ComPage,
    RoboticaPage,
    PyePage,
    PappsPage,
    MiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
