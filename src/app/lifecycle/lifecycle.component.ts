import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent {
  name: string;
  logs: string[] = [];
  showChild = true;
  @ViewChild('child') child: ChildComponent;

  constructor() {
    this.name = 'Alice';
    setTimeout(() => this.updateName(), 5000);
    setTimeout(() => this.child.changeTitle(), 10000);
    // setTimeout(() => this.hideChild(), 15000);
  }

  updateName(): void {
    this.name = 'Bob';
  }

  hideChild(): void {
    this.showChild = false;
    this.logs.push(`onDestroy`);
  }

  onLog(data): void {
    this.logs.push(data);
  }

  setName(value: string): void {
    this.name = value;
  }
}
