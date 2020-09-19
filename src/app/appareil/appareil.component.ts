import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {
  AppareilName: string = "Machine à laver";
  AppareilStatus: string = "éteint";

  constructor(){ }

  getStatus(){
    return this.AppareilStatus;
  }
}
