/**
 * Created by rmathew on 6/29/2016.
 */
import {Hero} from "./hero"

describe("Hero", () => {
    const hero: Hero = {
        id: 1,
        name: "Ronny"
    }

    it("has name Ronny", () => {
        expect(hero.name).toEqual("Ronny");
    });
    it("has id 1", () => {
        expect(hero.id).toEqual(1);
    })

})