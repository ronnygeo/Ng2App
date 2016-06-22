import {Component, OnInit} from "@angular/core";
import {Hero} from "./models/hero";
import {HeroDetailComponent} from "./components/hero-detail.component"
import {HeroService} from "./services/hero.service";

@Component({
    selector: "my-app",
    template: `<!--<input [(ngModel)]="hero" placeholder="name" />-->
                <hero-detail-view [hero]="selectedHero"></hero-detail-view>
                <h1>{{title}}</h1>
                <ul>
                <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">{{hero.name}}</li>
</ul>`,
    styles: [`.selected {background-color: yellow;}`],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit{
    title = "Heroes Ng App!";
    hero = "HEROOOOO!!!";
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(data => {this.heroes = data;});
    }

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}