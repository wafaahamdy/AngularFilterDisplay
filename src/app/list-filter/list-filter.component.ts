import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import list from '../../assets/data.json';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

 Clist = list;
 filters = [] ; 
 err ="" ;
 

  constructor() { }

  ngOnInit(): void {
  
  }

  addFilter(fvalue , fkey){
  this.err = "" ;
   if (_.indexOf(this.filters , fvalue) == -1)
     this.filters.push(fvalue) ;
     else this.err = "Filter with value - "+ fvalue +" -  already found" ;
   } 


  delfilter(i){
    this.filters.splice(i,1)
  }

  clearFilter() {
    this.filters = [] ;
  }
  
}
