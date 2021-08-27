import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSecond: number = 2;

  constructor(
    private _teacherService: TeacherService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerTeacher() {
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.birthDate ||
      !this.registerData.subjectId ||
      !this.registerData.codeProfessional
    ) {
      console.log("Process failed: Incomplete Data");
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._teacherService.registerTeacher(this.registerData).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/registerCourse']);
          this.message = 'Successfull teacher registration';
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
