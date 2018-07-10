import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  contact_number: number = 9986699866;

  addTodo() {
    this.todos.push({
      label : "New Work",
      status : "TODO"
    })
  }


  todos = [
    {
      label: "Work 1",
      status: "TODO"
    },
    {
      label: "Work 2",
      status: "In Progress"
    },
    {
      label: "Work 3",
      status: "Review"
    },
    {
      label: "Work 4",
      status: "Done"
    }

  ]

  data = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("content display");
    }, 800);

  })

  constructor() { }

  ngOnInit() {
  }

}
