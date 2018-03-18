import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HexToBinPage } from './hex-to-bin';

@NgModule({
  declarations: [
    HexToBinPage,
  ],
  imports: [
    IonicPageModule.forChild(HexToBinPage),
  ],
})
export class HexToBinPageModule {}
