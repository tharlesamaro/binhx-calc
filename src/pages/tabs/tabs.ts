import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ConverterPage } from "../converter/converter";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConverterPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
