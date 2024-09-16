import { Skill } from 'src/shared/model/skill.model';
import { SkillService } from './../../shared/service/skill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.scss']
})
export class SkillFilterComponent implements OnInit {
  skills: Skill[] = []
  constructor(private skillService: SkillService) {
    this.skills = skillService.getSkillList()
  }

  ngOnInit(): void {
  }

}
