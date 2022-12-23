import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjouterregionService } from '../_service/ajouterregion.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


  //VARIABLE CONTENANT L'ID DE LA REGION
  // idRegion : any
  //VARIABLE CONTENANT LA LISTE DES REGIONS
  listeRegion: any

  //Variable contenant url du detail region
  url = "/detail-regions"

  //VARIABLE CONTENANT LA REGION RECUPERER
  // Region: any;

  //LES VARIABLES CORRESPONDANT AUX INFORMATIONS DE LA REGION

  // nomRegion:any;
  // descriptionRegion:any;
  // imagesRegion:any

  constructor(private router: Router, private route: ActivatedRoute, private regionService: AjouterregionService) { }
  
  navigateToPage(){
    this.router.navigate(['/detail-regions']);
  }
  ngOnInit() {

    // //RECUPERATION DE L'ID DE LA REGION ET AFFECTATION DANS LA VARIABLE IDREGION
    // this.idRegion = this.route.snapshot.params['id']
    // console.log(this.idRegion);


    // //RECUPERATION D'UNE REGION PAR SON ID
    // this.regionService.listRegionParID(this.idRegion).subscribe(data =>{
    //   this.Region = data;
    //   this.nomRegion = data.nomregions;
    //   this.descriptionRegion = data.description;
    //   this.imagesRegion = data.images
    //   console.log(data);
    // })

    //RECUPERATION DE LA LISTE DES REGION
    this.regionService.listRegion().subscribe(data =>{
      this.listeRegion = data;
      console.log(data);
    })
  }

}
