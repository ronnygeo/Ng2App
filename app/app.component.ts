/**
 * Created by rmathew on 6/22/2016.
 */
import {Component} from "@angular/core";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {HeroService} from "./services/hero.service";
import {HeroesComponent} from "./components/heroes.component";
import {DashboardComponent} from "./components/dashboard.component";
import {HeroDetailComponent} from "./components/hero-detail.component";

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
<a [routerLink]="['Heroes']">Heroes</a>
<a [routerLink]="['Dashboard']">Dashboard</a>
<router-outlet></router-outlet>`,
    directives: [HeroesComponent, ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})
@RouteConfig([{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
}, {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
}, {
    path: '/hero/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
}])
export class AppComponent {
title = "Tour of Heroes";
}