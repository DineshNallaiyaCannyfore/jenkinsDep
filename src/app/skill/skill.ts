import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skill',
  imports: [CommonModule, FormsModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss',
})
export class Skill {
  skills = ['java', 'c++'];
  @ViewChild('inputbox') inputbox!: ElementRef;

  constructor() {

  }
  enderedSkill(event: any,) {
    if (event.key == ' ' || event.key == 'Enter') {
      event.preventDefault();
      const text = this.inputbox.nativeElement.textContent
      console.log(text.trim());
      if (!this.skills.includes(text.trim())) {
        this.skills.push(text.trim())
        this.inputbox.nativeElement.textContent = '';
        this.inputbox.nativeElement.textContent.trim()
      }
    }
  }
  removeItem(index: number) {

    const getIndex = this.skills.findIndex((_, i) => i == index);
    this.skills.splice(getIndex, 1)

  }
}