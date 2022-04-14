import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent {

  panelOpenState = false;

  students: any[] = [];
  departments: any[] = [];

  constructor(private httpClient:HttpClient){
    this.httpClient.get<any>('http://localhost:8080/api/v1/department/get')
    .subscribe((e)=>{
      console.log(e)
      this.departments = e;
    });

    this.httpClient.get<any>('http://localhost:8080/api/v1/student/get')
    .subscribe((e)=>{
      console.log(e)
      this.students = e;
    });

  }

}
