import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    console.log("on ngOnInit from parent");
  }

  ngOnChanges() {
    console.log("on ngOnChanges from parent");
}
}
