import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  @Input()
  public placeholder: string = '';

  @Input()
  public initialTerm: string = '';

  @Output()
  public onValueEmitter = new EventEmitter<string>();

  @Output()
  public onDebaunceEmitter = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>(); 
  private debouncerSubscription?: Subscription; 

  public ngOnInit(): void {

    //this.debouncerSubscription = this.debouncer;

    this.debouncer
      .pipe(
        debounceTime(1000)
      ).subscribe(value => {
        this.onDebaunceEmitter.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  public emitterValue(searchValue: string): void{
    this.onValueEmitter.emit(searchValue);
  }

  public onKeyPress(searchTerm: string): void{
    this.debouncer.next(searchTerm);
  }

}
