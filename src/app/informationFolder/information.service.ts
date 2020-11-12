import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from './information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(public httpClient: HttpClient) { }

  getInformations(){
    return this.httpClient.get<Information[]>("../assets/information.json");
  }

}