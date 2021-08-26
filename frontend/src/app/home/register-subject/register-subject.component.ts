import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.registerData = {};
    this.message = '';
  }

  ngOnInit(): void {}

  registerSubject() {}
}
