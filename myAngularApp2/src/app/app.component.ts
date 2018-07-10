import { Component } from '@angular/core';
import { USER_DATA } from './data/mocks';
import { User } from './model/user';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users : User[];


  constructor(private dataService : DataService) {}

  ngOnInit() {
    console.log("on ngOnInit from parent");
    //this.users = USER_DATA;
    this.users = this.dataService.getUserData();
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
