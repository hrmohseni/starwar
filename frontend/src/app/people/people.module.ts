import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { FilmListComponent } from './film.component';
import { LandComponent } from './land.component';
import { PeopleService } from '@app/services/people.service';
import { LoadingComponent } from '@app/shared/loading/loading.component';


@NgModule({
  declarations: [
    PeopleComponent,
    FilmListComponent,
    LandComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  providers:[
    PeopleService
  ]
})
export class PeopleModule { }
