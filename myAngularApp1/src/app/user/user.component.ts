import { Component, Input } from '@angular/core';

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

    @Input('title') title : string;

    moreInfo(user) {
        alert(`${user.firstName} ${user.lastName} is working With ${user.company}` );
    }

    user = {
        firstName : "S",
        lastName : "N",
        dob : new Date("Mar 09 1945"),
        income : 50000,
        isWorking : true,
        company : "SN Systems",
        votes: 210,
        image: 'assets/images/sathyams.png'
    }

}