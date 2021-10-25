import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '@app/models/people';
import { PeopleService } from '@app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleId:number=0;
  
  peopleDetail: People|undefined;
  loading:boolean =false;

  constructor(
    private peopleService: PeopleService,
    private actRoute: ActivatedRoute,
    private router:Router
  ) {
    this.peopleId = this.actRoute.snapshot.queryParams.id;
    
   }

  ngOnInit(): void {
    this.getPeopleDetail();
  }
  getPeopleDetail(){
    this.loading=true;
    this.peopleService.getPeopleByID(this.peopleId)
            .subscribe(
                pmList => {
                  this.peopleDetail = pmList;
                  this.loading=false;  
                },
                error => {
                  this.router.navigate(['/home']);

                }
            );
  }

}
