import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarComponent } from './avatar.page';

const routes: Routes = [
  { path: '', component: AvatarComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarRoutingModule {}
