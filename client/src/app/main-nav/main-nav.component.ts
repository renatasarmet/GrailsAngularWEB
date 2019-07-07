import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JWTService } from '../services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  username = null;
  role = null;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  constructor(private breakpointObserver: BreakpointObserver, private jwtService: JWTService, private router: Router) { }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.jwtService.logout();
    this.username = this.jwtService.getUsername();
    this.role = this.jwtService.getRole();
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {
    var logged = localStorage.getItem('access_token') !== null;
    if(logged){
      this.username = this.jwtService.getUsername();
      this.role = this.jwtService.getRole();
    } else {
      this.username = null
      this.role = null
    }
    return logged;
  }
}
