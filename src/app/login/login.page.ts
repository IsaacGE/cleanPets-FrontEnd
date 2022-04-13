import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RoutesServiceService } from '../services/routes-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public routerService:RoutesServiceService, public authService:AuthService) { }

  ngOnInit() {
  }

}
