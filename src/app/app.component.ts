import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';

import { Session } from '../config/session'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  session = new Session 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if(this.session.currentUser()){
         
        this.rootPage = HomePage;
        
    }else{
        
        this.rootPage = Login;

    }
  }
}

