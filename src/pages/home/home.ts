import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Session } from "../../config/session"

import { Login } from "../login/login"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	session = new Session
  constructor(public navCtrl: NavController) {

  }

  remove(){
    this.session.remove()
    this.navCtrl.setRoot(Login);
  }


}
