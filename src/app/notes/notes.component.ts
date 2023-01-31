import {Component, OnInit} from '@angular/core';
import {Note} from "../model/note.model";
import {catchError, Observable, throwError} from "rxjs";
import {NoteService} from "../services/note.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  patId! : number;
  notes! : Observable<Array<Note>>;
  errorMessage! : string;

  constructor(private noteService : NoteService, private route : ActivatedRoute, private router : Router) {
    this.patId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.notes= this.noteService.getNotesPatient(this.patId).pipe(
      catchError (err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleAddNotes() {
    this.router.navigateByUrl("/new-note/"+this.patId);
  }

  handleUpdateNote(n : Note) {
    this.router.navigateByUrl("/update-note/"+n.id);
  }
}
