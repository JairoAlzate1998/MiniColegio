import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-subject',
  templateUrl: './register-subject.component.html',
  styleUrls: ['./register-subject.component.css'],
})
export class RegisterSubjectComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSecond: number = 2;

  constructor(
    private _subjectService: SubjectService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerSubject() {
    if (
      !this.registerData.code ||
      !this.registerData.name ||
      !this.registerData.hours ||
      !this.registerData.branch 
    ) {
      console.log("Process failed: Incomplete Data");
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    }else{
      this._subjectService.registerSubject(this.registerData).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/registerTeacher']);
          this.message = 'Successfull subject registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      )
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecond * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecond * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
