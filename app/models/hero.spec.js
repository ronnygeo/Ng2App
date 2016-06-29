"use strict";
describe("Hero", function () {
    var hero = {
        id: 1,
        name: "Ronny"
    };
    it("has name Ronny", function () {
        expect(hero.name).toEqual("Ronny");
    });
    it("has id 1", function () {
        expect(hero.id).toEqual(1);
    });
});
//# sourceMappingURL=hero.spec.js.map