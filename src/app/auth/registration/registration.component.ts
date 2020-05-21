import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      dfb: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      cfmpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }

  // get f() { return this.myForm.controls; }



  savedata(data) {
    console.log(this.myForm);
    console.log(data);
  }

}
