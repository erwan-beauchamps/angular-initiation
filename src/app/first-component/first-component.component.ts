import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public isShowed: boolean = false;
  public list: string[] = ["First Element", "Second Element", "Third Element"];

  constructor() { }

  ngOnInit(): void {
  }

  display(): void {
    this.isShowed = !this.isShowed;
  }

}
