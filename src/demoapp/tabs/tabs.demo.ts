import { Component } from '@angular/core';
import { TABS_COMPONENTS } from '../';

@Component({
  moduleId: module.id,
  selector: 'tabs-demo',
  templateUrl: './tabs.demo.html',
  directives: [ TABS_COMPONENTS ]
})
export class TabsDemoComponent { }
