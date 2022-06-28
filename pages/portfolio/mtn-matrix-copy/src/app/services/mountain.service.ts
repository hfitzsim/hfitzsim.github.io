import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mountain } from '../mountain';
import { MOUNTAINS } from '../mock-mountains';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor() { }

  getMountains(): Observable<Mountain[]> {
    const mountains = of(MOUNTAINS);
    return mountains;
  }

  getMountain(id: number): Observable<Mountain> {
    const mountain = MOUNTAINS.find(m => m.id === id)!;
    return of(mountain);
  }
}
