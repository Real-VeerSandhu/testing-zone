import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  ducks = 0;

  constructor() { }

  ngOnInit() {
  }

  addDucks() {
    this.ducks = this.ducks + 1;
  }

  deleteDucks() {
    if (this.ducks >= 1) {
    this.ducks = this.ducks - 1;
    } else {
      console.log('There are no ducks to delete');
    }
  }
}