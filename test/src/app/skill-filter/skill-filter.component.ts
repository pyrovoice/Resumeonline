import { Skill, SkillType } from 'src/shared/model/skill.model';
import { SkillService } from './../../shared/service/skill.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.scss']
})
export class SkillFilterComponent {
  skills: Skill[] = []
  displayedColumns: string[] = ['name', 'experienceInyear'];
  dataSourceSkill
  dataSourceLanguage
  @ViewChild(MatSort) skillSort: MatSort = new MatSort;

  private search = new BehaviorSubject('');
  private destroy = new Subject<void>();

  constructor(private skillService: SkillService) {
    this.skills = skillService.getSkillList()
    this.dataSourceSkill = new MatTableDataSource(this.skills.filter(s => s.skillType === SkillType.Skill));
    this.dataSourceLanguage = new MatTableDataSource(this.skills.filter(s => s.skillType === SkillType.Language));

    this.search.pipe(
      // debounce for 300ms
      debounceTime(300),
      // only emit if the value has actually changed
      distinctUntilChanged(),
      // unsubscribe when the provided observable emits (clean up)
      takeUntil(this.destroy)
    ).subscribe((search) => this.updateTables(search));
  }

  ngAfterViewInit() {
    this.addSort()
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onInput(value: string): void {
    this.search.next(value);
  }

  updateTables(term: string = "") {
    this.dataSourceSkill = new MatTableDataSource(this.skills.filter(s => s.skillType === SkillType.Skill).filter(s => term == "" || s.name.toLowerCase().includes(term)));
    this.dataSourceLanguage = new MatTableDataSource(this.skills.filter(s => s.skillType === SkillType.Language).filter(s => term == "" || s.name.toLowerCase().includes(term)));
    this.addSort()
  }
  
  addSort() {
    this.dataSourceSkill.sort = this.skillSort;
  }
}
