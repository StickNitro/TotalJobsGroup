import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppComponentService {
    private _options: RequestOptions = null;
    private _http: Http = null;

    constructor(http: Http) {
        this._http = http;

        const headers = new Headers({
            "Content-Type": "application/json"
        });
        this._options = new RequestOptions({ headers: headers });
    }

    GetQuestionnaire() {
        return this._http.get("http://localhost:50014/api/questions/", this._options)
            .map((res) => res.json());
    }
}