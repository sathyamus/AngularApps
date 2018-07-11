import { Component } from '@angular/core';
// import { USER_DATA } from './data/mocks';
import { User } from './model/user';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: User[];

  isAuthenticated = false;

  constructor(private dataService: DataService, private authService : AuthService ) {
    // FIX ME : not working 
    this.isAuthenticated = this.authService.isAuthenticated();
   }

  ngOnInit() {
    console.log("on ngOnInit from parent");
    //this.users = USER_DATA;

    // this.users = this.dataService.getUserData();

    // this.dataService.getJSonData()
    // .subscribe(
    //   data => this.users = data,
    //   err => console.log(err),
    //   () => console.log("Completed")
    // );

    this.dataService.getApiData().subscribe(
      data => this.users = data);

    firebase.initializeApp({
      apiKey: "AIzaSyACa_o6hpMxPpzQcsx0jUKgirtnTiEZmEE",
      authDomain: "sathya-angular-app.firebaseapp.com"
    });
  }

  ngOnChanges() {
    console.log("on ngOnChanges from parent");
  }

  // user = {
  //   firstName : "S",
  //   lastName : "N",
  //   dob : new Date("Mar 09 1945"),
  //   income : 50000,
  //   isWorking : true,
  //   company : "SN Systems",
  //   votes: 210,
  //   image: 'assets/images/sathyams.png'
  // }

}
