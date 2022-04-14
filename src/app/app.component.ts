import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userRol:String

  constructor(public authService:AuthService, private route:Router) {
    
    if (authService.loggedIn()) {
      this.userRol = localStorage.getItem('userRol')
      this.route.navigate([localStorage.getItem('userRol')])
    } else {
      this.route.navigate(['/']) 
    }
  }
}
