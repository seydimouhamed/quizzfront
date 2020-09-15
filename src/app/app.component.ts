import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizz-front1';

  currentUser : User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  )
  {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  
}
