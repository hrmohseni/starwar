import {Component,  Input} from '@angular/core';
import { Film } from '@app/models/film';

@Component({
  selector: 'film-list',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmListComponent {

  @Input()
    Films: Film[] | undefined;

}