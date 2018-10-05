import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { Cs1Page } from '../cs1/cs1';
import { CalculoPage } from '../calculo/calculo';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';
import { RoboticaPage } from '../robotica/robotica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  cs1 = Cs1Page;
  cal = CalculoPage;
  dib = DibujoPage;
  com = ComPage;
  rob = RoboticaPage;
  
  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }
  clickCS1(){
    this.navCtrl.push(this.cs1);
  }
  clickCal(){
    this.navCtrl.push(this.cal);
  }
  clickDib(){
    this.navCtrl.push(this.dib);
  }
  clickCom(){
    this.navCtrl.push(this.com);
  }
  clickRob(){
    this.navCtrl.push(this.rob);
  }
}
