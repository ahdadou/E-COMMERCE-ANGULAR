import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/share/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  loginFaild = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): any{
    this.myform = this.fb.group({
      username: ['', []],
      password: ['', []]
    });
  }


  getLogin(): any{
   this.userService.login(this.myform.value).subscribe(
     (res) => {
      this.router.navigate(['first/home']);
     },
     (err) =>{
      this.myform.reset();
      this.loginFaild = true;

     }
   );
  }

}
