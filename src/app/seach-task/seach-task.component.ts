import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seach-task',
  templateUrl: './seach-task.component.html',
  styleUrls: ['./seach-task.component.css']
})
export class SeachTaskComponent implements OnInit {

  @Input() searchText;

  @Output() searchTextChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateSearchModel(value) {
    this.searchText = value;
    this.searchTextChange.emit(this.searchText);
  }
}
