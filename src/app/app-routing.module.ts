import { DropdownsComponent } from './pages/dropdowns/dropdowns.component';
import { ModalsComponent } from './pages/modals/modals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "modals", component: ModalsComponent },
  { path: "dropdowns", component: DropdownsComponent },
  { path: '', redirectTo: '/modals', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
