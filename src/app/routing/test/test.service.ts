import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class TestService {
  count = 0;

  constructor() {
  }

  getCount(): number {
    return this.count;
  }
}
