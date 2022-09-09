import { AllUniversitiesComponent } from './components/all-universities/all-universities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnivInfoComponent } from './components/univ-info/univ-info.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:AllUniversitiesComponent },
  { path:'university/:id', component:UnivInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
