import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ByCapitalPageComponent } from 'src/app/countries/pages/by-capital-page/by-capital-page.component';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

/*   public constructor(searchService: SearchService){

  } */

  @Input()
  public placeholder: string = '';

  @Output()
  public onValueEmitter = new EventEmitter<string>();

  public emitterValue(searchValue: string): void{
    this.onValueEmitter.emit(searchValue);
  }

}
