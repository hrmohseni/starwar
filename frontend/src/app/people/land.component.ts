import {Component,  Input} from '@angular/core';
import { Plant } from '@app/models/plant';

@Component({
  selector: 'plant-view',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent {

  @Input()
    plant: Plant | undefined;

}