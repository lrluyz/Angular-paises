import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesModule } from '../../countries.module';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{
  
  public country?: Country; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountriesService,
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => 
          this.countryService
            .searchCountryByAlphaCode(id)
        )
      ).subscribe(country => {
        if(!country){
          return this.router.navigateByUrl('');
        }

        this.country = country;

        return;
      });
  }

  /* 
    // !Una opcion para hacer el codigo
   ngOnInit(): void {
    this.activatedRoute.params
      //! Asi para los dos primeros console.log
      //!.subscribe((params: any) => {
      //* Preferible esta por ser mas limpia  tener solo 1 parametro
      .subscribe(({id}) => {
        //console.log({params: params.id});
        //console.log({params: params['id']});
        //console.log({params: id});
        this.searchCountry(id);
        
      });
  }

  public searchCountry(code: string){
    this.countryService
          .searchCountryByAlphaCode(code)
          .subscribe(country => {
            console.log({country});
          });
  }
 */
}
