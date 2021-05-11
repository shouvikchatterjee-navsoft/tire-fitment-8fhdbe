import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private http: HttpClient) {}
  url = 'https://6080be3273292b0017cdbf2a.mockapi.io';

  getYears(): Observable<any> {
    const url = `${this.url}/years`;
    return this.http.get<any>(encodeURI(url), { observe: 'response' }).pipe(
      map(years => years.body.year)
    );
  }

  getMakes(): Observable<any> {
    const url = `${this.url}/makes`;
    return this.http.get<any>(encodeURI(url), { observe: 'response' }).pipe(
      map(makes => makes.body.make)
    );
  }

  getModels(): Observable<any> {
    const url = `${this.url}/models`;
    return this.http.get<any>(encodeURI(url), { observe: 'response' }).pipe(
      map(models => models.body.model)
    );
  }

  getTrims(): Observable<any> {
    const url = `${this.url}/trim`;
    return this.http.get<any>(encodeURI(url), { observe: 'response' }).pipe(
      map(trims => trims.body.trim)
    );
  }
}
