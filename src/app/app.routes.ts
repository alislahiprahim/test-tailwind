import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'menu', component: MenuComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
