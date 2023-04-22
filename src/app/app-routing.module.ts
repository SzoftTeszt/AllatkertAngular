import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatainkComponent } from './allataink/allataink.component';
import { UjAllatComponent } from './uj-allat/uj-allat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"allataink", component:AllatainkComponent},
  {path:"ujallat", component:UjAllatComponent},
  {path:"home", component:HomeComponent},
  {path:" ", component:HomeComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
