import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  private readonly items: string[];

  constructor() {
    this.items = ['Apple iPhone XR', 'Samsung Galaxy S9', 'Nokia 9'];
  }

  addData(name: string): void {
    this.items.push(name);
  }

  getItems(): Array<string> {
    return this.items;
  }
}
