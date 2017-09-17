import {Component, OnInit} from '@angular/core';
import {LocalStorage} from "ngx-webstorage";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'oas-settings-sidenav',
  templateUrl: './settings-sidenav.component.html',
  styleUrls: ['./settings-sidenav.component.scss']
})
export class SettingsSidenavComponent implements OnInit {

  public themes = [{name: "Default theme", value: "0"}, {name: "Dark theme", value: "1"}, {
    name: "Light theme",
    value: "2"
  }];
  public selectedTheme: string;
  @LocalStorage("lightTheme", true)
  private lightTheme: boolean;
  @LocalStorage()
  private darkTheme: boolean;

  constructor(public snackBar: MdSnackBar) {
    this.openSnackBar("Welcome to the Angular material starter kit!" , "Okey")
  }

  ngOnInit() {
    if (this.darkTheme) {
      this.selectedTheme = "1";
    } else if (this.lightTheme) {
      this.selectedTheme = "2";
    } else {
      this.selectedTheme = "0";
    }
  }

  public changeTheme() {
    if (this.selectedTheme == "0") {
      this.lightTheme = false;
      this.darkTheme = false;
    } else if (this.selectedTheme == "1") {
      this.lightTheme = false;
      this.darkTheme = true;
    } else if (this.selectedTheme == "2") {
      this.lightTheme = true;
      this.darkTheme = false;
    }
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 0,
    });
  }

}
