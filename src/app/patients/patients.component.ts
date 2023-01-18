import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Patient} from "../model/patient.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients!: Observable<Array<Patient>>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  patient!: Observable<Patient>;

  constructor(private patientService: PatientService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    })
    this.handleSearchPatient();
  }

  handleSearchPatient() {
    let kw = this.searchFormGroup.value.keyword;
    this.patients = this.patientService.searchPatient(kw).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeletePatient(p: Patient) {
    let conf = confirm("Are you sure?");
    if (!conf) return;
    this.patientService.deletePatient(p.id).subscribe({
      next: data => {
        this.patients = this.patients.pipe(
          map(data => {
            let index = data.indexOf(p);
            data.slice(index, 1)
            return data;
          })
        );
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handleUpdatePatient(p: Patient) {

    //this.patientService.getPatient(p.id).subscribe({
    //  next: data => {
    this.router.navigateByUrl("/update-patient/" + p.id);
    //},
    //error: err => {
    //console.log(err);
    // }
    //});
    //}
  }
}
