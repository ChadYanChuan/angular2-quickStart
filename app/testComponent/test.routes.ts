import { provideRouter, RouterConfig }  from '@angular/router';

import { testComponent } from './testComponent';
import { testComponentA } from './test.Component';

export const testRoutes: RouterConfig = [
 
  {
    path:'test',
    component:testComponent
  },
  {
  	path:'testA',
  	component:testComponentA
  }
];