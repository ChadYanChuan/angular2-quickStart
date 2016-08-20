import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroComponent/hero-detail.component.html',
  styleUrls: ['app/css/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;
//ActivatedRoute 已激活的路由 params 可观察对象
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
