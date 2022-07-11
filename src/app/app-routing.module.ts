import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReferenceComponent } from './reference/reference.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"skills",component:SkillsComponent},
  {path:"reference",component:ReferenceComponent},
  {path:"services",component:ServicesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
