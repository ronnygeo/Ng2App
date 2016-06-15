import {beforeEachProviders, inject} from "@angular/core/testing";
import {AppComponent} from "../../app/app.component";
describe("AppComponent", () => {
    beforeEachProviders(() => [AppComponent]);
    // it("Add heading", inject([AppComponent], (comp) => {
    //     expect(comp.text).toContain("Hello");
    // }));
})