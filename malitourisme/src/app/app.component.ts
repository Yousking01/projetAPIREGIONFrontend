import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { SeconnecterPage } from './seconnecter.page';
//import { MenuPage } from './menu/menu.page';
//import { SeconnecterPage } from './seconnecter/seconnecter.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  
  //rootPage: any = MenuPage;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    //const page = new SeconnecterPage(this.router, this.route, this.http);
  }
}
