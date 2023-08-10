import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit{

  public initialTerm: string = '';
  public countriesList: Country[] = [];

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    this.countriesList = this.countryService.cacheStore.byCountries.countries;
    this.initialTerm = this.countryService.cacheStore.byCountries.term;
  }

  public searchByCountry(term: string): void{
    this.countryService.searchCountry(term)
                       .subscribe(c => {
                          this.countriesList = c;
                       });
  }

}
