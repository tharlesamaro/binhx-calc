import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BinToHexPage } from './bin-to-hex';

@NgModule({
  declarations: [
    BinToHexPage,
  ],
  imports: [
    IonicPageModule.forChild(BinToHexPage),
  ],
})
export class BinToHexPageModule {}
