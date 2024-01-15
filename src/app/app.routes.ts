import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', data: { animation: 'HomePage' } },
    { path: 'menu', component: MenuComponent, pathMatch: 'full', data: { animation: 'MenuPage' } },
    { path: '**', redirectTo: '' }
];
