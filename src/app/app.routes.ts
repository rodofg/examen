import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { Register } from './pages/register/register';
import { Products } from './pages/products/products';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'inicio',component:Start},
    {path:'registro',component:Register},
    {path:'productos',component:Products},
    {path:'**',redirectTo:''}

]
