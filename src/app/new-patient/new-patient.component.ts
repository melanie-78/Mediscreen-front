import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {Patient} from "../model/patient.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit{
  newPatientFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, private router: Router) {
  }

  ngOnInit() : void {
    this.newPatientFormGroup = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      birthDate: this.fb.control(null, Validators.required),
      type: this.fb.control(null, Validators.required),
      address: this.fb.control(null),
      number: this.fb.control(null),
    });
  }

  handleSavePatient() {
    let patient: Patient = this.newPatientFormGroup.value;
    this.patientService.savePatient(patient).subscribe({
      next: data => {
        alert("Patient has been successfully saved");
        this.router.navigateByUrl("/patients");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
