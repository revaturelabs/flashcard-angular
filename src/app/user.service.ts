import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ng2-cookies';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions, Headers} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) { }

  login(loginData: {username: string, password: string}) {
    this.http.post('http://localhost:8086/login', JSON.stringify(loginData), {
      'headers': new HttpHeaders({'Content-Type': 'application/json'})
    })
      .subscribe(data => {
        this.cookieService.set('access_token', JSON.stringify(data));
        this.router.navigate(['/home']);
      }, _ => this.router.navigate(['/login/error']));
  }
  checkCredentials() {
    if (!this.cookieService.get('access_token')) {
      this.router.navigate(['/login']);
    }
  }

}
