import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeComponent } from './components/meme/meme.component';
import { TagComponent } from './components/tag/tag.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'meme', component:MemeComponent},
  {path:'tag', component:TagComponent},
  {path:'search', component:SearchComponent},
  {path:'', component:MemeComponent},
  {path:'**', component:MemeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
