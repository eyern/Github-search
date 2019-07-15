import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 private username:string;
 private clientid =	'f3571dBe55e1695400825';
 private clientsecret =	'a6c2b7d8f7c691e771b19008873e1322028e97c4'; 


  constructor(private http:Http) {
  	console.log("service is now ready!");
  	this.username = 'kirandash';
  	}
  	getProfileInfo(){
  		return this.http.get("https:api.github.com/users/"	+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());	
  	}
}
