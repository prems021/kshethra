

import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './dashboard/auth.guard';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsertableComponent } from './dashboard/usertable.component';
export const routes: Route[] = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'usertable', component: UsertableComponent,canActivate: [AuthGuard]}
  
      
    
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });