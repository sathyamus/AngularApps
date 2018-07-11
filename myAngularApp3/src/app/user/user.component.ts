import { Component, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
    selector: 'app-user',
    // template: `<h3> User component Loaded !!! <h3>`,
    templateUrl: './user.component.html',
    // styles: [`
    //     h3 {
    //         color: lightblue;
    //     }
    // `]
    styleUrls: ['./user.component.css']
})

export class UserComponent {

    @Input('title') title: string;
    @Input('users') users: User[];

    myClasses = {
        myBorder: true,
        myText: false
    }

    moreInfo(user) {
        alert(`${user.firstName} ${user.lastName} is working With ${user.company}`);
        this.myClasses.myText = true;
        this.myClasses.myBorder = false;
    }

    constructor() {
        console.log("calling constructor");
    }

    ngOnInit() {
        console.log("on ngOnInit");
    }

    ngOnChanges() {
        console.log("on ngOnChanges");
    }

    // ngAfterContentInit() {
    //     console.log("on ngAfterContentInit");
    // }

    // ngAfterContentChecked() {
    //     console.log("on ngAfterContentChecked");
    // }

    // ngAfterViewInit() {
    //     console.log("on ngAfterViewInit");
    // }

    // ngAfterViewChecked() {
    //     console.log("on ngAfterViewChecked");
    // }

    // ngOnDestroy() {
    //     console.log("on ngOnDestroy");
    // }

    // user = {
    //     firstName : "S",
    //     lastName : "N",
    //     dob : new Date("Mar 09 1945"),
    //     income : 50000,
    //     isWorking : true,
    //     company : "SN Systems",
    //     votes: 210,
    //     image: 'assets/images/sathyams.png'
    // }

}