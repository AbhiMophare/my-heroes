import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() selectedHero!: Hero;
  constructor() {
    // console.log(this.selectedHero);
  }

  ngOnInit() {
    console.log(this.selectedHero);
  }
}
