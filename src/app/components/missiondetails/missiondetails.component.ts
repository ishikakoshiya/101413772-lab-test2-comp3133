import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../../services/spacex.service';
import { CommonModule, NgIf } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  standalone: true,
  styleUrls: ['./missiondetails.component.css'],
  imports: [CommonModule, NgIf],
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService, private location: Location) {}
  goBack() {
    this.location.back(); 
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spaceXService.getLaunchDetails(+id).subscribe(
        (data) => {
          this.mission = data; 
          console.log('Mission Details:', this.mission);
        },
        (error) => console.error('Error fetching mission details:', error)
      );
    }
  }
}
