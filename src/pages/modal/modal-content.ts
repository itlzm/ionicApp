import {Component} from '@angular/core';

import {Platform, NavParams, ViewController,Keyboard} from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html'
})

export class ModalContentPage {
  character;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: '',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'River Folk'},
          {title: 'Alter Ego', note: 'Smeagol'}
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'Shire Folk'},
          {title: 'Weapon', note: 'Sting'}
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'Shire Folk'},
          {title: 'Nickname', note: 'Sam'}
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }
}

export class MyClass {
  constructor(public keyboard: Keyboard) {
    this.keyboard.onClose(this.closeCallback);
  }
  closeCallback() {
    // call what ever functionality you want on keyboard close
    console.log('Closing time');
  }
}
