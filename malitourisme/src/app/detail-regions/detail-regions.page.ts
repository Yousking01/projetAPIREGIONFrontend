import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjouterregionService } from '../_service/ajouterregion.service';
import { DetailRegionsService } from '../_service/detail-regions.service';

@Component({
  selector: 'app-detail-regions',
  templateUrl: './detail-regions.page.html',
  styleUrls: ['./detail-regions.page.scss'],
})
export class DetailRegionsPage implements OnInit {

  //VARIABLE CONTENANT L'ID DE LA REGION
  idRegion : any

  //VARIABLE CONTENANT LA REGION RECUPERER
  Region: any;

  //LES VARIABLES CORRESPONDANT AUX INFORMATIONS DE LA REGION

  nomRegion:any;
  descriptionRegion:any;
  superficieRegion:any;
  langueRegion:any;
  activiteRegion:any;
  population:any;
  imagesRegion:any
  //VARIABLE CONTENANT LA VALEUR DE COMMENTAIRE
  objet:any;
  description:any;
  user: any;
//variable contenant la liste des regions
listecommentaire:any;

  constructor(private regionService: AjouterregionService, private route: ActivatedRoute , private detailService: DetailRegionsService )  { }

  ngOnInit() {

    //RECUPERATION DE L'ID DE LA REGION ET AFFECTATION DANS LA VARIABLE IDREGION
    this.idRegion = this.route.snapshot.params['id']
    console.log(this.idRegion);

    //RECUPERATION D'UNE REGION PAR SON ID
    this.regionService.listRegionParID(this.idRegion).subscribe(data =>{
      this.Region = data;
      this.nomRegion = data.nomregions;
      this.descriptionRegion = data.description;
      this.superficieRegion = data.superficieregion;
      this.langueRegion = data.languemregion;
      this.activiteRegion = data.activiterregion;
      this.population = data.population;
      this.imagesRegion = data.images
      console.log(data);
    })

    this.user = localStorage.getItem("username");
    console.log(this.user);


    //recuperer la liste des commentaires
    this.detailService.listecommentaire().subscribe(data =>{
      this.listecommentaire = data;
      console.log(data);
    })

  }
  // addComment() {
  //   this.http.post('http://localhost:8080/comments', this.comment).subscribe(response => {
  //     console.log(response);
  //   });
  // }
  addCommentaire() {
    this.detailService.ajouterCommentaire(this.objet,this.description, this.idRegion, this.user).subscribe( data=> {
      // handle the response
      console.log(data);
    });
  }

}
