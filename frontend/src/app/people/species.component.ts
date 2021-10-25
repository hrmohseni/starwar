import {Component,  Input} from '@angular/core';
import { Species } from '@app/models/species';

@Component({
  selector: 'species-list',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesListComponent {

  @Input()
  species: Species[] | undefined;

}