import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SomethingComponent } from './something/something.component';
import { NatureHomeComponent } from './homebuttoncomponents/nature-home/nature-home.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'something', component: SomethingComponent},
  {path: 'naturehome', component:  NatureHomeComponent },
  {path: 'contact', component: ContactUsFormComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
