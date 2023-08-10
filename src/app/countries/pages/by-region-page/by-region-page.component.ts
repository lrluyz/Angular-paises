import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit{

  public countriesList: Country[] = [];
  public regionsList: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    this.countriesList = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  public searchByRegion(region: Region): void{
    
    this.selectedRegion = region;
    
    this.countryService.searchRegion(region)
                       .subscribe(c => {
                          this.countriesList = c;
                       });
  }

}
