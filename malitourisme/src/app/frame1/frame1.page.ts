import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frame1',
  templateUrl: './frame1.page.html',
  styleUrls: ['./frame1.page.scss'],
})
export class Frame1Page implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) { }


  navigateToPage(){
    this.router.navigate(['/seconnecter']);
  }
  navigateToPagee(){
    this.router.navigate(['/signup']);
  }
  navigateToPageee(){
    this.router.navigate(['/accueil']);
  }
  ngOnInit() {
  }

}
