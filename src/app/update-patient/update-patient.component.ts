import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {Patient} from "../model/patient.model";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-edit-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  id!: number;
  patient!: Patient;
  updatePatientFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, private router: Router,private  route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.patientService.getPatient(this.id).subscribe({
      next: (patient)=>{
        this.patient=patient;
        this.updatePatientFormGroup = this.fb.group({
          firstName: this.fb.control(this.patient.firstName, Validators.required),
          lastName: this.fb.control(this.patient.lastName, Validators.required),
          birthDate: this.fb.control(this.patient.birthDate, Validators.required),
          type: this.fb.control(this.patient.type, Validators.required),
          address: this.fb.control(this.patient.address),
          number: this.fb.control(this.patient.number)
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleEditPatient() {
    let p: Patient = this.updatePatientFormGroup.value;
    p.id=this.patient.id;
    this.patientService.updatePatient(p.id,p).subscribe({
      next: data => {
        alert("Patient has been successfully updated");
        this.router.navigateByUrl("/patients");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
