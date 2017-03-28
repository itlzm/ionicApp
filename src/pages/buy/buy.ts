import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {ModalContentPage} from '../modal/modal-content';

@Component({
  selector: 'page-about',
  templateUrl: 'buy.html'
})
export class BuyPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}
