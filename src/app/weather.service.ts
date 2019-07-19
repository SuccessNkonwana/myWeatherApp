import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    //return this.httpClient.get(`https://api.apixu.com/v1/current.json?key=9720ed03e296405e814134515191507&q=${city}`);
    // return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=a6cef6b4ba5fc693969548b9f10b4650');
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=a6cef6b4ba5fc693969548b9f10b4650');
  }
}
