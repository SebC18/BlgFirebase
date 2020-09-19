import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {
@Input('appareilName') appareilName: string;
@Input('appareilStatus') appareilStatus :string;

  constructor(){ }

  getStatus(){
    return this.appareilStatus;
  }
}
