import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {catchError, Observable, throwError} from "rxjs";
import {Patient} from "../model/patient.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Observable<Array<Patient>>;
  errorMessage! : string;
  searchFormGroup! : FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchFormGroup= this.fb.group({
      keyword : this.fb.control("")
    })
    this.handleSearchPatient();
  }

  handleSearchPatient() {
    let kw=this.searchFormGroup?.value.keyword;
    this.patients=this.patientService.searchPatient(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }
}
