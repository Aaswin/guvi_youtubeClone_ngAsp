import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public authService: AuthService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  async LogOutSubmit()
  {
        this.authService.SignOut();
        this.router.navigate(['login']);
        console.log('logged out');
  }
  async HomeSubmit()
  {
        this.router.navigate(['videoSearch']);
        console.log('home');
  }
}
