import { Skill } from 'src/shared/model/skill.model';
import { SkillService } from './../../shared/service/skill.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.scss']
})
export class SkillFilterComponent {
  skills: Skill[] = []
  displayedColumns: string[] = ['name', 'experienceInyear'];
  dataSource
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private skillService: SkillService) {
    this.skills = skillService.getSkillList()
    this.dataSource = new MatTableDataSource(this.skills);
    console.log(this.dataSource)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
