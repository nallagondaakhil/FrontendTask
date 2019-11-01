import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about/about.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component:AboutComponent },
  { path: 'works', component: WorksComponent},
  { path: '**', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
