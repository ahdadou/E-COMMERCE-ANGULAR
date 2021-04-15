import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from '../../share/user.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void{
   this.myForm = this.fb.group({
     username: ['', []],
     password: ['', []],
   });
  }

  login(): any{
    this.userService.login(this.myForm.value)
    .subscribe(
      p => {
        this.router.navigate(['admin/home']);
      },
      e => {
        this.error = true;
        this.myForm.reset();
      }
    );

  }


}
