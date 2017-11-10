import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class UserService {

  constructor(private cookieService: CookieService, private router: Router) { }

  checkCredentials() {
    if (!this.cookieService.get('access_token')) {
      this.router.navigate(['/login']);
    }
  }

}
