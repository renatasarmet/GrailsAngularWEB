import { Component } from '@angular/core';
import { JWTService } from './services/jwt.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private jwtService: JWTService, private router: Router) {}

  logout() {
    this.jwtService.logout();
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
