import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const ROUTES: Routes = [
    /* {path: '', component: HomePageComponent}, */
    {path: 'about', component: AboutPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'countries', 
     loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)},
    {path: '**', redirectTo: 'countries/byCapital'}, 
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
