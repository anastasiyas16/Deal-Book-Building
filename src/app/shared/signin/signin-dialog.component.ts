import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";
import {FormControl, Validators} from '@angular/forms';
import {RegexPatterns} from "../regex-patterns";

@Component({
  selector: 'oas-signin',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.scss']
})
export class SigninDialogComponent {

  public passwordMinLength = 8;
  public emailFormControl = new FormControl('', [Validators.required, Validators.pattern(RegexPatterns.EMAIL_REGEX)]);
  public passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(this.passwordMinLength)]);
  public email: string;
  public password: string;

  constructor(public dialogRef: MdDialogRef<SigninDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any) {
    this.email = data.email;
  }

  close(): void {
    this.dialogRef.close();
  }

}
