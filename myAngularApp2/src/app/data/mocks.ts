import { User } from '../model/user'

export const USER_DATA: User[] = [{

    firstName: "Sathya",
    lastName: "P",
    dob: new Date("Mar 09 1945"),
    income: 500000,
    isWorking: true,
    company: "SN Systems",
    votes: 290,
    image: 'assets/images/sathyams.png'
},
{
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("February 24 1955"),
    income: 0,
    isWorking: false,
    company: "Apple Inc",
    votes: 21290,
    image: 'assets/images/steve.jpg'

},

{
    firstName: "Jeff",
    lastName: "Bezos",
    dob: new Date("Jan 12 1964"),
    income: 14090,
    isWorking: true,
    company: "Amazon",
    votes: 29000,
    image: 'assets/images/jeff.jpg'

}
]