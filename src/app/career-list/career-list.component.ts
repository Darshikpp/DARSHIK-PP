import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../data.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {
  careerDatas:any = [];

  constructor(private http:HttpClient, private ds:DataService) { }
 
  ngOnInit(): void {
    this.careerList();
  }

  careerList(){
    this.ds.careerList().subscribe((result:any) => {
      // console.log(result.careers);
      this.careerDatas = result.careers;
    })

  }



}
