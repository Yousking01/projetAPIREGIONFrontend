import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjouterregionService } from '../_service/ajouterregion.service';

@Component({
  selector: 'app-listedesregions',
  templateUrl: './listedesregions.page.html',
  styleUrls: ['./listedesregions.page.scss'],
})
export class ListedesregionsPage implements OnInit {

  //VARIABLE CONTENANT LA LISTE DES REGIONS
  listeRegion: any

  //Variable contenant url du detail region
  url = "/detail-regions"

  constructor(private router: Router, private route: ActivatedRoute, private regionService: AjouterregionService) { }

  navigateToPage(){
    this.router.navigate(['/ajouterregion']);
  }
  ngOnInit() {

    //RECUPERATION DE LA LISTE DES REGION
    this.regionService.listRegion().subscribe(data =>{
      this.listeRegion = data;
      console.log(data);
    })
  }

}
