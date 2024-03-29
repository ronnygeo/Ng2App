"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("../services/hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = "Heroes Ng App!";
        this.hero = "HEROOOOO!!!";
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (data) { _this.heroes = data; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: "my-heroes",
            template: "<!--<input [(ngModel)]=\"hero\" placeholder=\"name\" />-->\n                <hero-detail-view [hero]=\"selectedHero\"></hero-detail-view>\n                <h1>{{title}}</h1>\n                <ul>\n                <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">{{hero.name}}</li>\n</ul>",
            styles: [".selected {background-color: yellow;}"],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map