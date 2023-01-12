import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {catchError, Observable, throwError} from "rxjs";
import {Patient} from "../model/patient.model";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Observable<Array<Patient>>;
  errorMessage! : string;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patients = this.patientService.getPatients().pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
}
