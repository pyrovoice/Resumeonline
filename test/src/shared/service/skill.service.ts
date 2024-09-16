import { Injectable } from '@angular/core';
import { Skill, SkillType } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = []
  constructor() {
    this.skills.push(new Skill("Java Spring boot", 10))
    this.skills.push(new Skill("SQL (MySQL, PostgreSQL, ServerSQL)", 10))
    this.skills.push(new Skill("Javascript/Typescript (NodeJS, AngularJS, Angular, React)", 7))
    this.skills.push(new Skill("HTML5/CSS3 (Bootstrap)", 7))
    this.skills.push(new Skill("C# .NET", 3))
    this.skills.push(new Skill("GIT (github, gitlab) CD/CI", 2))
    this.skills.push(new Skill("RabbitMQ", 2))
    this.skills.push(new Skill("Agile SCRUM/Kanban", 10))
    this.skills.push(new Skill("Azure/AWS", 2))
    this.skills.push(new Skill("Elasticsearch/Logstash", 2))
    this.skills.push(new Skill("Docker, Kubernetes", 2))
    this.skills.push(new Skill("Terraform, Helm", 2))
    this.skills.push(new Skill("Agile SCRUM/Kanban", 10))
    this.skills.push(new Skill("French", 11, "Mothertongue", SkillType.Language))
    this.skills.push(new Skill("English", 10, "Fluent", SkillType.Language))
    this.skills.push(new Skill("German", 5, "Beginner (learning)", SkillType.Language))
  }

  getSkillList() {
    return this.skills;
  }
}
