import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=your appid');
  }
  
}
