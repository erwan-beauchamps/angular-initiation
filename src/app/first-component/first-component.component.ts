import { SimpleServiceService } from './../simple-service.service';
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
  public list: string[] = [];
  public switchValue: string = SwitchList.FIRST;

  constructor(private simpleService: SimpleServiceService) { }

  ngOnInit(): void {
    this.list = this.simpleService.getList();
  }

  display(): void {
    this.isShowed = !this.isShowed;
  }

  changeSwitchValue(newValue: string): void {
    this.switchValue = newValue;
  }

  add(): void {
    this.simpleService.addElement("New element");
  }

  delete(): void {
    this.simpleService.deleteLastElement();
  }

}
