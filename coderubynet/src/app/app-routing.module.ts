import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EventComponent } from './event/event.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'details/:id', component: DetailsComponent },
  {path: 'event', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
