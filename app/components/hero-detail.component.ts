import {Component, Input} from '@angular/core';
import {Hero} from '../models/hero';

@Component({
    selector: "hero-detail-view",
    template: `<label *ngIf="hero">{{hero.name}}</label>`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}