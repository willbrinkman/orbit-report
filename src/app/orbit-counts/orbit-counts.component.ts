import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})





export class OrbitCountsComponent implements OnInit {

  satList: string[] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"]


  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  // satList: string[] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"]


  satCount(satType: string, sats: object[]): number {
    let satTypeCount = 0

    for (let i = 0; i < sats.length; i++) {
      // console.log(sats[i]['type'] === 'Probe')
      console.log(satType)
      if (sats[i]['type'] === satType) {

        satTypeCount += 1
      }
    }
    return satTypeCount

  }
}
