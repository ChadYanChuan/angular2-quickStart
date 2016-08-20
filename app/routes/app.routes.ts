import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroComponent/heroes.component';
import { HeroDetailComponent } from '../heroComponent/hero-detail.component';
import { testRoutes } from '../testComponent/test.routes';

// 仪表盘路由
const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',//重定向
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    //带参数的路由
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  ...testRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/