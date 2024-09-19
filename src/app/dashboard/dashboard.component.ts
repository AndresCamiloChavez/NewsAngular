import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../shared/side-menu/side-menu.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
  imports:[ RouterModule, SideMenuComponent ]
})
export default class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
