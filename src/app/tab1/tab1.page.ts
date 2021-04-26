import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  url = 'http://localhost:4000/api/cuentas/';
  listCuentas: any = [];
  constructor(public http: HttpClient) {}


  ngOnInit(){
    this.index();
  }

index(){
this.http.get<any>(this.url).subscribe(res=>{
console.log(res);
this.listCuentas = res;
});

}





}
