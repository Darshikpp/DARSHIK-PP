import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas:any =[];
  benefits:any =[];
  jobOpeningsData:any =[];

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.whyWorkWithUs();
    this.perksAndBenifits();
    this.jobOpenings();
  } 

  whyWorkWithUs(){
    this.ds.whyWorkWithUs().subscribe((result:any) => {
      this.datas = result.cms;
    })

  }

  perksAndBenifits(){
    this.ds.perksAndBenifits().subscribe((result:any) => {
      this.benefits = result.cms;
    })

  }

  jobOpenings(){
    this.ds.jobOpenings().subscribe((result:any) => {
      this.jobOpeningsData = result.cms;
    })

  }

}
