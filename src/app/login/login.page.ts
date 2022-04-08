import { Component, OnInit } from '@angular/core';
import { RoutesServiceService } from '../services/routes-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public routerService:RoutesServiceService) { }

  ngOnInit() {
  }

}
