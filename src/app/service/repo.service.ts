import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public getKpidata=(route: string)=>{
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public getColleagues = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public getSupervisors = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public getData = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public create = (route: string, body: any) => {
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  public addKpi=(route: string, body: any)=>{
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  public update = (route: string, body: any) => {
    return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }

  public getEmpById = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public getEmpKpiById = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public delete = (route: string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
