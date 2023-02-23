
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {provideRouter, Routes} from "@angular/router";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadComponent: () => import('src/app/home.component'), data: { breadcrumb: 'Home page' } },
    { path: 'about', loadComponent: () => import('src/app/about.component'), data: { breadcrumb: 'About Page' } }
]

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideRouter(routes),
    ]
}).catch(err => console.error(err));
