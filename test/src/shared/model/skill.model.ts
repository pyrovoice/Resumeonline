export enum SkillType{
    Skill,
    Language,
    Default
}

export class Skill {
    name: string = "";
    displayedExperienceText: string = ""
    experienceInyear: number = 0;
    skillType: SkillType = SkillType.Default

    constructor(_name: string, _experienceInyear: number, _displayedExperienceText: string = "", _skillType: SkillType = SkillType.Default ) {
        this.name = _name
        this.experienceInyear = _experienceInyear
        this.displayedExperienceText = _displayedExperienceText != "" ? _displayedExperienceText : String(_experienceInyear)
        this.skillType = _skillType != SkillType.Default ? _skillType : SkillType.Default
    }
}