import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email =''; 
  password=''; 
  
  constructor(
    public loginService: LoginService,
    public router: Router, 
    public route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.loginService.logout(); 
  }

  async login(){
    await this.loginService.login(this.email, this.password);
    if(this.loginService.isLoggedIn()){
      this.goToHome();
    }
    else{
      alert('Email o contraseña incorrectos');
    }
    
  }

  goToHome(){
    this.router.navigate(["/home"]);
  }

}
