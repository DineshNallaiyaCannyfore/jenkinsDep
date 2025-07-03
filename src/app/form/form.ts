import { CommonModule } from '@angular/common';
import { Component, contentChild, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AppSubject } from '../service/app.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  standalone: true,
})
export class Form implements OnInit {
  searchFun: any
  searchText: string = ''

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    last: new FormControl('', [Validators.pattern(/^[0-9@#].{5,10}$/), avoidScriptTag]),
    email: new FormControl('', []),
    isCheck: new FormControl(false, []),
  })
  constructor(private sub: AppSubject) {

  }
  ngOnSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched(); // Show all errors
    }
  }
  eventChang(event: any) {
    console.log("-", event.target.value)
    this.searchFun(event.target.value)
  }

  deboncing(func: any, delay: number) {
    let timmer: any;
    return (...args: any[]) => {
      // clearTimeout(timmer);
      if (!timmer) {
        timmer = setTimeout(() => {
          func.apply(this, args);
          timmer = null
        }, delay)
      }

    }
  }

  isChanged(event: any) {
    console.log(event.target.value, this.userForm.get('isCheck')?.value)
    if (this.userForm.get('isCheck')?.value) {
      this.userForm.get('last')?.clearValidators();
      this.userForm.updateValueAndValidity();
    } else {
      this.userForm.get('last')?.setValidators([Validators.required]);
      this.userForm.updateValueAndValidity();
    }
  }
  makeSearch(text: string) {
    this.sub.searchCall(text)
  }

  ngOnInit() {
    this.searchFun = this.deboncing((value: string) => {
      this.makeSearch(value); // call your API here
    }, 300);
    this.userForm.get('name')?.statusChanges.subscribe(val => {
      console.log('Name:', val);
    });
  }

}

export function avoidScriptTag(control: AbstractControl): ValidationErrors | null {
  const hasAngleBrackets = /[<>]/.test(control.value || '');
  return hasAngleBrackets ? { specialCharNotAllowed: true } : null
}


