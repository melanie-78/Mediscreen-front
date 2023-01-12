import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients : any
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8080/patients").subscribe({
      next : (data)=>{
        this.patients=data;
      },
      error: err=> {
        console.log("err");
      }
    });
  }
}
