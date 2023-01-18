import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientsComponent} from "./patients/patients.component";
import {NewPatientComponent} from "./new-patient/new-patient.component";
import {UpdatePatientComponent} from "./update-patient/update-patient.component";

const routes: Routes = [
  {path : "patients", component: PatientsComponent},
  {path : "new-patient", component: NewPatientComponent},
  {path : "update-patient/:id", component: UpdatePatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
