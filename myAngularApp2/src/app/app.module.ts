import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  // Components, Directives, Pipes 
  declarations: [
    AppComponent, UserComponent, HighlightDirective

  ],
  // Modules
  imports: [
    BrowserModule, FormsModule
  ],
  // Services
  providers: [],
  bootstrap: [AppComponent] // to load the components in index.html (main page)
})
export class AppModule { }
