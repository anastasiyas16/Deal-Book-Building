import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {NavLink} from "../navigation-link";
import {Router} from "@angular/router";
import {SigninDialogComponent} from "../../../shared/signin/signin-dialog.component";
import {MdDialog} from "@angular/material";


@Component({
  selector: 'oas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public navLinks: NavLink[] = [
    {label: "HOME", path: ""},
    {label: "CREDITS", path: "/credits"}
  ];
  @Output()
  public sidenavToggleEvent: EventEmitter<string> = new EventEmitter();
  public searchQuery: string = '';

  constructor(private router: Router, public dialog: MdDialog) {}

  ngOnInit() {}

  ngOnDestroy() {}

  public sendSignalToToggleSideNav() {
    this.sidenavToggleEvent.emit("Toggle");
  }

  onSearchChange(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  onSearch() {
    this.router.navigate(['/search'], {queryParams: {query: this.searchQuery}});
  }

  onSearchReset() {
    this.searchQuery = '';
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SigninDialogComponent, {
      // width: '70vw',
      // height: '50vh',
      data: { email: "g-sari@g-sari.com", name: "Gökhan Sari" } // share data with the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
