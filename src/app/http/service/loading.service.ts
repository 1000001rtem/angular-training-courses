import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isShow = false;

  constructor() {
  }

  show(): void {
    this.isShow = true;
  }

  hide(): void {
    this.isShow = false;
  }
}
