import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';
import { Location } from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {
  searched: string = "";

  chevronLeft=faChevronLeft;
  mountains: Mountain[] = [];
  panelOpenState = false;
  selected=true;

  constructor(private mountainService: MountainService,
    private location: Location) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains);
  }

  goBack(): void {
    this.location.back();
  }

  filterByPass() {}

}