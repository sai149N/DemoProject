import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practise';

  constructor(
    private router: Router,
  ) {

  }
  ngOnInit() {
    let token = localStorage.getItem('LoginID');
    if (token == undefined) {
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/']);
    }
  }
}
