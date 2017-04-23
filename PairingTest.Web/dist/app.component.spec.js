"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/http");
const testing_2 = require("@angular/http/testing");
const app_component_service_1 = require("./app.component.service");
describe("AppComponent", () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [
                app_component_service_1.AppComponentService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: (backend, options) => new http_1.Http(backend, options),
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                }
            ],
            imports: [
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent
            ]
        });
        testing_1.TestBed.compileComponents();
    });
    it("should create the app", testing_1.async(() => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
