import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  condition = true;

  items = ['Tom', 'Bob', 'Sam', 'Bill'];
  count = 42;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.condition = !this.condition;
  }
}
