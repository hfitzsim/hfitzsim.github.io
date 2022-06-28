import { Component, OnInit, Input } from '@angular/core';
import { Mountain } from '../mountain';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MountainService } from '../services/mountain.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-comparison-matrix',
  templateUrl: './comparison-matrix.component.html',
  styleUrls: ['./comparison-matrix.component.css']
})
export class ComparisonMatrixComponent implements OnInit {
  chevronLeft = faChevronLeft;

  mountains: Mountain[] = [];
  @Input() mountain: Mountain | undefined;
  selectedMountain0 = this.mountains[0];
  selectedMountain1 = this.mountains[1];

  constructor(
    private location: Location,
    private mountainService: MountainService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getMountains();
  }

  getMountains(): void {
    this.mountainService.getMountains()
      .subscribe(mountains => this.mountains = mountains)
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


