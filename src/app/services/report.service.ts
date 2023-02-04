import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Report} from "../model/report.model";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) {}

  public getAssessmentById(patId: number):Observable<Report>{
    return this.http.get<Report>(environment.backendHostReport+"/assess/patId/"+patId);
  }
}
