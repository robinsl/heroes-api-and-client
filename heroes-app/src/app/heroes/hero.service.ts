import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get('http://localhost:3000/heroes');
  }
}
