import { AppareilService } from './../services/appareil.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {
@Input('appareilName') appareilName: string;
@Input('appareilStatus') appareilStatus :string;
@Input('indexOfAppareil') indexOfAppareil:number;
@Input('id') id : number;

  constructor(private appareilService: AppareilService){ }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
  
  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if (this.appareilStatus === 'allumé')
      {
        return 'green';
      }
    else if (this.appareilStatus === 'éteint')
      {
        return 'red';
      }
  }
}
