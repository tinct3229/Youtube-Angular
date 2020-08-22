import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/services/data.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../nav-bar/login/login.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  templateUrl: './subcriptions.component.html',
  styleUrls: ['./subcriptions.component.scss']
})
export class SubcriptionsComponent implements OnInit {

  constructor(public dataService:DataService,private dialog:MatDialog,
    public router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    });
}
}