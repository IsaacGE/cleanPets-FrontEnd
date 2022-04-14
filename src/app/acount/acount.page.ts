import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RoutesServiceService } from '../services/routes-service.service';


@Component({
  selector: 'app-acount',
  templateUrl: './acount.page.html',
  styleUrls: ['./acount.page.scss'],
})
export class AcountPage implements OnInit {

  constructor(public authService:AuthService, public routerService:RoutesServiceService) {

  }

  ngOnInit() {
  }

}
