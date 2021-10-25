import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { People } from '@app/models/people';

@Injectable({ providedIn: 'root' })
export class PeopleService {
    constructor(private http: HttpClient) { }
    getPeopleByID(id: number) {
        return this.http.get<People>(`${environment.apiUrl}people/${id}`);
    }
}
