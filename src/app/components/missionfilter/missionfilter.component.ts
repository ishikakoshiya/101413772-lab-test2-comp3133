import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MissionFilterComponent {
  filterYear: string = '';
  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange() {
    this.filterChanged.emit(this.filterYear);
  }
}
