import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() title = 'Alice';
  @Output() log: EventEmitter<string> = new EventEmitter();

  changesCounter = 0;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'title') {
        const name = changes.title.currentValue;
        changesMsgs.push(`name changed to "${name}"`);
      }
    }
    this.log.emit(
      `onChanges (${this.changesCounter++}): ${changesMsgs.join('; ')}`
    );
    console.log('on change');
  }

  ngOnInit(): void {
    console.log('init');
    this.log.emit(`onInit`);
  }

  ngDoCheck(): void {
    console.log('check');
    this.log.emit(`doCheck`);
  }

  ngAfterContentInit(): void {
    this.log.emit(`afterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.log.emit('afterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log.emit(`afterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.log.emit(`afterViewChecked`);
  }

  ngOnDestroy(): void {
    this.log.emit(`onDestroy`);
  }

  changeTitle(): void {
    this.title = 'Artem';
  }
}
