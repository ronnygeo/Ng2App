import {Component, OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from "../services/hero.service";


@Component({
    selector: "hero-detail-view",
    template: `<label *ngIf="hero">{{hero.name}}</label><button (click)="goBack()">Back</button>`
})
export class HeroDetailComponent implements OnInit{
    hero: Hero;
    constructor(private heroService: HeroService, private routeParams: RouteParams) {}

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id).then(hero=>this.hero=hero);
    }

    goBack() {
        window.history.back();
    }


}