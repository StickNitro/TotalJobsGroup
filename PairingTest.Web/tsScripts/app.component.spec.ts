import { TestBed, async, inject } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BaseRequestOptions, Http, HttpModule } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { AppComponentService } from "./app.component.service";

import { } from "jasmine";

describe("AppComponent", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AppComponentService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [
                HttpModule
            ],
            declarations: [
                AppComponent
            ]
        });
        TestBed.compileComponents();
    });

    it("should create the app", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});