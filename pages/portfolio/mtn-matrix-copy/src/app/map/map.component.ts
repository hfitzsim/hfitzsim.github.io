import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../services/map.service';
import { Mountain } from '../mountain';
import { MountainService } from '../services/mountain.service';
import { Location } from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { MOUNTAINS } from '../mock-mountains';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() mountain: Mountain | undefined;

  mountains: Mountain[] = [];
  searched: string = "";
  chevronLeft=faChevronLeft;


  constructor(private mapService: MapService, private mountainService: MountainService,
    private location: Location) { }

  ngOnInit(): void {
    this.createMap();
    this.getMountains();


    //this.mapService.distanceBetween();
  }

  getMountains(): void {
    this.mountainService.getMountains()
    .subscribe(mountains => this.mountains = mountains);
  }


  goBack(): void {
    this.location.back();
  }

  createMap() {
    this.mapService.createMap();
  }

}
