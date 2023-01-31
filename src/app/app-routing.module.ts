import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientsComponent} from "./patients/patients.component";
import {NewPatientComponent} from "./new-patient/new-patient.component";
import {UpdatePatientComponent} from "./update-patient/update-patient.component";
import {NotesComponent} from "./notes/notes.component";
import {NewNoteComponent} from "./new-note/new-note.component";
import {UpdateNoteComponent} from "./update-note/update-note.component";

const routes: Routes = [
  {path : "patients", component: PatientsComponent},
  {path : "new-patient", component: NewPatientComponent},
  {path : "update-patient/:id", component: UpdatePatientComponent},
  {path : "notes/:id", component: NotesComponent},
  {path : "new-note/:id", component: NewNoteComponent},
  {path : "update-note/:id", component: UpdateNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
