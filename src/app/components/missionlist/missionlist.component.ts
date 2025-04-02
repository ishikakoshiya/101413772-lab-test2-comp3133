import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../services/spacex.service';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MissionFilterComponent } from "../missionfilter/missionfilter.component";



@Component({
  selector: 'app-MissionFilter',
  templateUrl: './missionlist.component.html',
  standalone: true,
  styleUrls: ['./missionlist.component.css'],
  imports: [RouterModule, CommonModule, NgFor, MissionFilterComponent],
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any[] = [];

  constructor(private spaceXService: SpaceXService, private router: Router) {}

  ngOnInit(): void {
    this.spaceXService.getAllLaunches().subscribe(
      (data) => {
        this.missions = data; 
        console.log('Missions:', this.missions); 
      },
      (error) => console.error('Error fetching missions:', error)
    );
  }

  viewDetails(missionId: number) {
    this.router.navigate(['/missiondetails', missionId]);
  }
  filterMissions(year: string) {
    this.filteredMissions = this.missions.filter(mission => mission.launch_year.includes(year));
  }
}
