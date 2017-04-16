import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { HomePage } from '../home/home';
import { Register } from '../register/register';

import { User } from '../../models/user';
import { Session } from '../../config/session';

import { LoginService } from '../../providers/login-service'

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  loading: Loading;
	form: FormGroup;
	user = {email: '', password: ''};
	session = new Session;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private formBuilder: FormBuilder,private loginService: LoginService) {

  	this.initForm()
  }

   login(){
  	this.showLoading()
  	this.user = this.form.value
		this.loginService.signIn(this.user.email, this.user.password).subscribe(user => {
			let currentUser = user.user
      currentUser.token = user.token
     
  		//console.log("criando login")
  		this.session.create(user)
  		this.loading.dismiss()
  		this.navCtrl.setRoot(HomePage);
		}, erro =>{
	  	console.log(erro)
  		this.loading.dismiss()
			this.showAlertError('Email ou senha invalidos')
		})
	  	//console.log(this.session)
	  	//console.log(this.user)
  }

  register(){
  	this.navCtrl.push(Register)
  }

  showAlertError(message) {
  let alert = this.alertCtrl.create({
      title: 'Falha no login',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Efetuando login"
    });
    this.loading.present();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]]
		});
  }

}
