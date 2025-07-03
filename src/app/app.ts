import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperCaseDirecties } from './directives/app.directive';
import { Truncate } from "./pipe/app.pipe";
import { LogDecorator } from './decorator/log.decorator';
import { AppSubject } from './service/app.service';
import { Form } from './form/form';
import { Skill } from './skill/skill';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Truncate,
    UpperCaseDirecties, ReactiveFormsModule, Skill],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  phoneNumber!: string
  protected title = 'csr_app';
  trueTitle = {
    color: 'green',
    weight: 500
  }
  falseTitle = {
    color: 'red',
    weight: 500
  }
  constructor(private sub: AppSubject) {
    this.sub.updateData(1)
  }

  @LogDecorator('functions')
  sumOfNumber(a: number, b: number) {
    return a + b
  }
  @LogDecorator('number count')
  getNumber() {
    const da = this.sub.numberCount().subscribe(res => {
      console.log(res)
      return res
    })
    return da
  }

}
