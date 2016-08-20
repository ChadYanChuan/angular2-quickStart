import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroComponent/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/css/dashboard.component.css']
})
//初始化英雄数组
export class DashboardComponent implements OnInit {
  //创建一个 heroes属性
  heroes: Hero[] = [];
  //把HeroService  注入到构造函数中 并且把它保存在一个私有heroService 字段中
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  //在生命周期钩子中调用 服务来获取英雄列表
  ngOnInit() {
    
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
  gotoDetail(hero: Hero) {
    //1、生成路由的 链接参数数组
    let link = ['/detail', hero.id];
    //2、把这个数组传给路由器的 navigate 方法
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/