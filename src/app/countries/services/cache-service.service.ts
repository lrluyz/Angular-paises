import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheServiceService {

  constructor() { }

  public cacheStorage = {
    byCapital: { term: '', countries: []},
    byCountries: { term: '', countries: []},
    byRegion: { term: '', countries: []},
  }

}
