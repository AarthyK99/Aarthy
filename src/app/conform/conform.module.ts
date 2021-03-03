import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConformPageRoutingModule } from './conform-routing.module';

import { ConformPage } from './conform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConformPageRoutingModule
  ],
  declarations: [ConformPage]
})
export class ConformPageModule {}
