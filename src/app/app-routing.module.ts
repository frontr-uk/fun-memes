import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemesListComponent } from './containers/memes-list/memes-list.component';

const routes: Routes = [
  {
    path: 'memes',
    component: MemesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
