import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mountains: Mountain[] = [];

  constructor(private mountainService: MountainService) { }

  ngOnInit(): void {
    this.getTopMountains();
  }

  getTopMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains.slice(0,10));
  }

}
