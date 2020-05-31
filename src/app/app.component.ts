import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  isSubmitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log("Submitted", form)
    this.user = form.value
    this.isSubmitted= true;
    form.reset()
  }
}
