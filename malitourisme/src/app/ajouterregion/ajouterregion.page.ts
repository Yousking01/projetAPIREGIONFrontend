import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AjouterregionService } from '../_service/ajouterregion.service';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-ajouterregion',
  templateUrl: './ajouterregion.page.html',
  styleUrls: ['./ajouterregion.page.scss'],
})
export class AjouterregionPage implements OnInit {

  //DECLARATION DES VARIABLE POUR L'AJOUT DES REGIONS
  nomPay : any;
  nomRegion: any;
  codeRegion: any;
  activite:any;
  superficie:any;
  population:any;
  description:any;
  imageRegion:any;
  langue:any;

  //VARIABLE CONTENANT LA LISTE DES PAYS
  ListePays:any
  
  constructor( private regionService: AjouterregionService) { }

  ngOnInit() {

    //RECUPERATION DE LA LISTE DES PAYS
    this.regionService.listPays().subscribe(data =>{
      this.ListePays = data;
      console.log(data);
    })


  }

  // insertion d'image
  // takePhoto() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  
  //   this.camera.getPicture(options).then((imageData) => {
  //     // Convertir l'image en binaire et l'afficher dans l'élément <img>
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.photo = base64Image;
  //   }, (err) => {
  //     // Gestion des erreurs
  //   });
  // }
  // J'espère que cela vous aidera à importer la bibliothèque de prise de photo dans votre page Angular ! N'hésitez pas à me poser des questions si vous avez besoin de plus d'informations.
  
  
  //METHODE PERMETTANT DE RECUPERER L IMAGE DE LA REGION
  recupereImage(event:any){
    this.imageRegion = event.target["files"][0];
    console.log(this.imageRegion)
  }

  //METHODE PERMETTANT D AJOUTER UNE REGION
  ajoutRegion(){
    this.regionService.ajoutRegion(this.nomRegion,this.imageRegion,this.codeRegion,this.description,this.superficie,this.nomPay,this.population,this.langue,this.activite).subscribe(data => {
      console.log(data);
    })
  }
  
  
  
  
}
