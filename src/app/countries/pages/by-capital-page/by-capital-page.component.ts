import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

  public countriesList: Country[] = [];
  public isLoading: boolean = false;
  public initialTerm: string = '';

  constructor(private countryService: CountriesService){}
  
  ngOnInit(): void {
    this.countriesList = this.countryService.cacheStore.byCapital.countries;
    this.initialTerm = this.countryService.cacheStore.byCapital.term;
  }

  public searchByCapital(term: string): void{
    
    this.isLoading = true;
    
    this.countryService.searchCapital(term)
                       .subscribe(c => {
                          this.countriesList = c;
                        
                          this.isLoading = false;
                        });
  }

}
