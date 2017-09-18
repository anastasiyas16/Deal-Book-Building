import { Component, OnInit } from '@angular/core';

import {Inject} from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-data-example',
  template: '<button md-button (click)="openDialog()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Flex</button>',
})
export class DialogDataExample {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DialogDataExampleDialog {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}


@Component({
  selector: 'oas-credits',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
  
})
export class DealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
