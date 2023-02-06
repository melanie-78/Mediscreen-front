import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NoteService} from "../services/note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Patient} from "../model/patient.model";
import {Note} from "../model/note.model";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit{
  patId! : number
  newNoteFormGroup! : FormGroup;

  constructor(private fb : FormBuilder, private noteService : NoteService, private patientService : PatientService, private router : Router, private route: ActivatedRoute) {
    this.patId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.newNoteFormGroup = this.fb.group({
      observation : this.fb.control(null, Validators.required),
    });
  }

  handleSaveNote() {
    let note: Note = this.newNoteFormGroup.value;
    note.patId=this.patId;
    this.patientService.getPatient(this.patId).subscribe({
      next : data=> {
        note.patName = data.firstName;
        this.noteService.saveNote(note).subscribe({
          next: data => {
            alert("Note has been successfully saved");
            this.router.navigateByUrl("/patients");
          },
          error: err => {
            console.log(err);
          }
        });
      },
      error: err => {
        console.log(err);
      }
    })

  }
}
