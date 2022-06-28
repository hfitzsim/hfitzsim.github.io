import { Component, Input, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MountainService } from '../services/mountain.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.css']
})
export class MountainDetailComponent implements OnInit {
  chevronLeft = faChevronLeft;

  @Input() mountain: Mountain | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private mountainService: MountainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMountain();
  }

  getMountain(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mountainService.getMountain(id)
      .subscribe(mountain => this.mountain = mountain);
  }

  goBack(): void {
    this.location.back();
  }
}
