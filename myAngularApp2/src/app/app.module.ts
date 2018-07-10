import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DataService} from './services/data.service';

@NgModule({
  // Components, Directives, Pipes 
  declarations: [
    AppComponent, UserComponent, HighlightDirective, UnlessDirective, PipeDemoComponent, CountryCodePipe, FilterPipe, LoginComponent, RegisterComponent

  ],
  // Modules
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  // Services
  providers: [DataService],
  bootstrap: [AppComponent] // to load the components in index.html (main page)
})
export class AppModule { }
