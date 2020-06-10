import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private router: Router
  ) {

    let registerFormControls = {
      name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      role: new FormControl()
    }

    this.registerForm = fb.group(registerFormControls);
  }

  ngOnInit(): void {
  }

  register() {
    let data = this.registerForm.value;
    data.role = [data.role];

    this.as.registerUser(data).subscribe(
      (res) => {
        this.router.navigateByUrl('/login');
      },
      (err) => {
        console.log(err);
      }
    );


  }

}
