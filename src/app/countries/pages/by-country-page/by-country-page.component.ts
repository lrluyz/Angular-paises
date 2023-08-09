import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countriesList: Country[] = [];

  constructor(private countryService: CountriesService){}

  public searchByCountry(term: string): void{
    this.countryService.searchCountry(term)
                       .subscribe(c => {
                          this.countriesList = c;
                       });
  }

}
