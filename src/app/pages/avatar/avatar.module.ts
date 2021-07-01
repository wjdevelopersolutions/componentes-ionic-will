import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar.page';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AvatarRoutingModule } from './avatar-routing.module';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AvatarRoutingModule,
    ComponentesModule
  ],
  exports: [],
  providers: []
})
export class AvatarModule {}
