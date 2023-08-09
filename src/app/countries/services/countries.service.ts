import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  public searchCapital(capital: String): Observable<Country[]>{
    const url: string = `${this.apiURL}/capital/${capital}`;
    
    return this.http
              .get<Country[]>(url)
              .pipe(
                catchError(() => of([]))
              );
  }

  public searchCountry(country: string): Observable<Country[]>{
    const url: string = `${this.apiURL}/name/${country}`;
    
    return this.http
              .get<Country[]>(url)
              .pipe(
                catchError(() => of([]))
              );
  }

  public searchRegion(region: string): Observable<Country[]>{
    const url: string = `${this.apiURL}/region/${region}`;
    
    return this.http
              .get<Country[]>(url)
              .pipe(
                catchError(() => of([]))
              );
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const url: string = `${this.apiURL}/alpha/${code}`;
    
    return this.http
              .get<Country[]>(url)
              .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => of(null))
              );
  }

}
