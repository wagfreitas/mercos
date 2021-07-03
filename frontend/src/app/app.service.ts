import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendas } from './app.models';

export class Data {
  constructor(
    public vendas: Vendas[]
  ) {}
}

const apiURL = environment.apiURL
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root',
})

export class AppService {
  public Data = new Data(
    [], // vendas
  );
  public url = environment.url + '/assets/data/';


  constructor(public http:HttpClient) {}

  public getVendas(): Observable<Vendas[]>{
    return this.http.get<Vendas[]>(this.url + 'vendas.json');
  }

  public getPropertyById(id: any): Observable<Vendas>{
    return this.http.get<Vendas>(this.url + 'property-' + id + '.json');
  }

  public exportVendas(data) {
    console.log("aqui", data)
    return this.http.post(`${apiURL}/vendas`, data, httpOptions);
  }


}
