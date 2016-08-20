"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var heroes_component_1 = require('../heroComponent/heroes.component');
var hero_detail_component_1 = require('../heroComponent/hero-detail.component');
var test_routes_1 = require('../testComponent/test.routes');
// 仪表盘路由
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        //带参数的路由
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
].concat(test_routes_1.testRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map