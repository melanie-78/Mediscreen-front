import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NoteService} from "../services/note.service";
import {ReportService} from "../services/report.service";
import {Report} from "../model/report.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  patId! : number;
  report! : Report;

  constructor(private route: ActivatedRoute, private reportService: ReportService) {
    this.patId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.reportService.getAssessmentById(this.patId).subscribe({
      next: report=>{
        this.report= report;
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
