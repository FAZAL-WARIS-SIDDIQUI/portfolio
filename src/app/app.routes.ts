import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:"full"
    },
    {
        path:'about',
        component:AboutComponent
    }
];
