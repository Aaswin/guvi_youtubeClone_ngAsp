import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit 
{
  loginForm!: FormGroup;
  constructor(public authService: AuthService,private route: ActivatedRoute,
      private router: Router, private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control('',[Validators.required]),
  });
  }
  get f() { return this.loginForm.controls; }
  async ForgotSubmit()
  {
    this.authService.ForgotPassword(this.loginForm.controls['username'].value);
    this.router.navigate(['login']);
    console.log('password verfication sent');
  }

}
