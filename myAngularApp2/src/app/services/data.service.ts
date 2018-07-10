import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';

@Injectable()
export class DataService {
    getUserData() {
        return USER_DATA;
    }

    getJSonData() {
        return this.http.get("assets/data/user-data.json")
        .map( response =>  <User[]> response.json().userdata)
    }

    getApiData() {
        return this.httpClient.get<User[]>("https://fir-soc-gen.firebaseio.com/userdata.json");
    }
    constructor(private http : Http, private httpClient : HttpClient) {}
}
