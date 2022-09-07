import { Component, OnInit } from '@angular/core';

export enum SwitchList {
  FIRST = "first",
  SECOND = "second"
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public isShowed: boolean = false;
  public switchList = SwitchList;
  public list: string[] = ["First Element", "Second Element", "Third Element"];
  public switchValue: string = SwitchList.FIRST;

  constructor() { }

  ngOnInit(): void {
  }

  display(): void {
    this.isShowed = !this.isShowed;
  }

  changeSwitchValue(newValue: string): void {
    this.switchValue = newValue;
  }

}
