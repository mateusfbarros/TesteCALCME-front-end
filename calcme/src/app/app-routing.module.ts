import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ReadAllComponent } from './components/read-all/read-all.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent
  },
  {
    path: 'listAll',
    component: ReadAllComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
