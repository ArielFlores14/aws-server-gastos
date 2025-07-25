import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
        {
        path: 'menu',
        component: Menu
        
    }
];