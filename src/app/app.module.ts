import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientsComponent } from './patients/patients.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NewPatientComponent } from './new-patient/new-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { NotesComponent } from './notes/notes.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsComponent,
    NewPatientComponent,
    UpdatePatientComponent,
    NotesComponent,
    NewNoteComponent,
    UpdateNoteComponent,
    ReportComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
