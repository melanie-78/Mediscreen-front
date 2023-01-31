import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NoteService} from "../services/note.service";
import {Note} from "../model/note.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Patient} from "../model/patient.model";

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit{
  id! :string;
  note! : Note;
  updateNoteFormGroup!: FormGroup;

  constructor(private route: ActivatedRoute, private noteService: NoteService, private fb: FormBuilder, private router: Router) {
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.noteService.getNoteById(this.id).subscribe({
      next: (note) => {
        this.note = note;
        this.updateNoteFormGroup = this.fb.group({
          observation: this.fb.control(this.note.observation)
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleSaveNote() {
    let n: Note = this.updateNoteFormGroup.value;
    n.id=this.note.id;
    n.patId=this.note.patId;
    n.patName=this.note.patName;
    this.noteService.updateNote(n.id,n).subscribe({
      next: data => {
        alert("Note has been successfully updated");
        this.router.navigateByUrl("/patients");
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

