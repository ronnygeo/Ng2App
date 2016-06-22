import { Injectable } from '@angular/core';
import {HEROES} from './hero-mock.data';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
}