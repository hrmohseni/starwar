import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleList, PeopleListItem } from '../mock/mock-people'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText:string='';
  peopleList:PeopleListItem[]=PeopleList;

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  redirectToPage( item:PeopleListItem){
    
    this._router.navigate(['/people/']);
  }
}
