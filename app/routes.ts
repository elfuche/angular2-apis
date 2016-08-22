import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { UserComponent } from './user.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'users', component: UserComponent }
];

export const routing = RouterModule.forRoot(appRoutes);