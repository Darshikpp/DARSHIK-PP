import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  careerList(){
   return this.http.get('https://admin-edubex.ipixsolutions.net/api/v1/career/list')
  }
  
  whyWorkWithUs(){
    return this.http.get('https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=why-work-with-us')
  }
  perksAndBenifits(){
    return this.http.get('https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=perks-benefits')
  }
  jobOpenings(){
    return this.http.get('https://admin-edubex.ipixsolutions.net/api/v1/cms/pages/get?slug=career')
  }

}
