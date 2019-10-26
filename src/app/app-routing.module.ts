import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';


const routes: Routes = [
  // { path: 'Home', component: AppComponent, pathMatch: 'full' },
  // { path: 'Home', component: HomeComponent },
  { path: 'modal', component: ModalComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
