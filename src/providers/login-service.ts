import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  	baseUrl = 'http://localhost:3000';
  
	constructor(public http: Http) {

	}

	signIn(email, password){
		return this.http.post(this.baseUrl+"/signin", {email: email, password: password})
		  .map(res => res.json());
	}

	signUp(user){
		return this.http.post(this.baseUrl+"/signup", user)
		  .map(res => res.json());
	}


}
