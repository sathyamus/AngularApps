import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserComponent } from './user/user.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './products/overview/overview.component';
import { SpecificationComponent } from './products/specification/specification.component';
import { EmployeeComponent } from './employee-module/employee/employee.component';


export const APP_ROUTES: Routes = [{
    path: '', //http://localhost:4200 (home page)
    redirectTo: 'login',
    pathMatch: 'full'
}, {
    path: 'login', //http://localhost:4200/login
    component: LoginComponent
}, {
    path: 'register', //http://localhost:4200/register
    component: RegisterComponent
}, {
    path: 'pipe',
    component: PipeDemoComponent
}, {
    path: 'users',
    component: UserComponent,
    canActivate: [LoginGaurdService]
}, {
    path: 'products',
    component: ProductsComponent,
    children: [
        {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
        }, {
            path: 'overview',
            component: OverviewComponent
        }, {
            path: 'spec',
            component: SpecificationComponent
        }
    ]
}, {
    path: 'employee',
    component: EmployeeComponent
}, {
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module#LazyModule'
},
{
    path: '**', //http://localhost:4200/notexist 
    redirectTo: 'login',
    pathMatch: 'full'
}]
