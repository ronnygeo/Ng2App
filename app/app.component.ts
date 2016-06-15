import {Component} from "@angular/core";
import {Hero} from "./models/hero";
import {HeroDetailComponent} from "./components/hero-detail.component"

let HEROES: Hero[] = [
    {id: 1, name: "Ronny"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Alex"},
    {id: 4, name: "Ken"},
    {id: 5, name: "Wolverine"},
];

@Component({
    selector: "my-app",
    template: `<!--<input [(ngModel)]="hero" placeholder="name" />-->
                <hero-detail-view [hero]="selectedHero"></hero-detail-view>
                <h1>{{title}}</h1>
                <ul>
                <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">{{hero.name}}</li>
</ul>`,
    styles: [`.selected {background-color: yellow;}`],
    directives: [HeroDetailComponent]
})
export class AppComponent {
    title = "Heroes Ng App!";
    hero = "HEROOOOO!!!";
    selectedHero: Hero;
    public heroes = HEROES;

    public onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}