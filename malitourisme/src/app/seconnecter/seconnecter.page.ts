import { Component, OnInit } from '@angular/core';
//import { IonRouterOutlet } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { AuthserviceService } from '../_service/authservice.service';
import { ICredentials } from '../_interfaces/icredentials';
import { TokenService } from '../_services/token.service';

// @Injectable({
//    providedIn: 'root',
// })
// interface ICredentials{
//   username: string,
//   password: string
// }
// interface IToken{
//   access_token: string
// }


@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.page.html',
  styleUrls: ['./seconnecter.page.scss'],
})
export class SeconnecterPage implements OnInit {
  //binding
  // username: string = '';
  // password: string = '';
  form: ICredentials = {
    username: '',
    password: ''
  }
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthserviceService,
    private tokenService: TokenService
    ) { }
  
  ngOnInit() {
  }
onSubmit(): void{
  console.log(this.form)
  this.authService.login(this.form).subscribe(
    data => { 
    console.log(data.accessToken)
    this.tokenService.saveToken(data.accessToken)
    localStorage.setItem('username',this.form.username)
  },
    err => console.log(err),
    //this.router.navigate(['/accueil'])
  );
  //this.router.navigate(['/accueil'])
  
}

}

