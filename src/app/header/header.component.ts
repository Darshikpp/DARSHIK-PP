import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrowIcon = faAngleDown;
  dropdownShow1:boolean = false;
  dropdownShow2:boolean = false;
  dropdownShow3:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  dropdown1(){
    this.dropdownShow1 = !this.dropdownShow1; 
    this.dropdownShow3 = false; 
    this.dropdownShow2 = false; 
  }
  dropdown2(){
    this.dropdownShow2 = !this.dropdownShow2; 
    this.dropdownShow1 = false; 
    this.dropdownShow3 = false; 
  }
  dropdown3(){
    this.dropdownShow3 = !this.dropdownShow3;
    this.dropdownShow1 = false; 
    this.dropdownShow2 = false; 
  }

}
