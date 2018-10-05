import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { Cs1Page } from '../cs1/cs1';
import { CalculoPage } from '../calculo/calculo';
import { DibujoPage } from '../dibujo/dibujo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  cs1 = Cs1Page;
  cal = CalculoPage;
  dib = DibujoPage;
  
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
}
