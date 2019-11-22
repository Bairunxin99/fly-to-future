import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit() {
    this.title = '工作区';
  }

}
