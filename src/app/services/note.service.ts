import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient.model";
import {environment} from "../../environments/environment";
import {Note} from "../model/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http : HttpClient) { }

  public getNotesPatient(patId : number):Observable<Array<Note>>{
    return this.http.get<Array<Note>>(environment.backendHostNote+"/notes/"+patId);
  }

  public saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(environment.backendHostNote+"/note/add",note);
  }

  public getNoteById(id: string): Observable<Note>{
    return this.http.get<Note>(environment.backendHostNote+"/note/"+id);
  }

  public updateNote(id : string, n : Note):Observable<Note>{
    return this.http.put<Note>(environment.backendHostNote+"/note/update/"+id, n);
  }
}
