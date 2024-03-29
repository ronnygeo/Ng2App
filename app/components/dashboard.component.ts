/**
 * Created by rmathew on 6/22/2016.
 */
import {Component, OnInit} from '@angular/core'
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    }

    gotoDetail(hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
    }
}