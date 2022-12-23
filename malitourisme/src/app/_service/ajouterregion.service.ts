import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AjouterregionService {

  API_REGION = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  //METHODE PERMETTANT D AJOUTER UNE REGION
  ajoutRegion(nomRegion: any, imageRegion: any, codeRegion: any, description: any, superficie: any, nomPay: any, population: any, langue: any, activite: any): Observable<any> {
    let data = new FormData();
    data.append('file', imageRegion);
    data.append('nomregions', nomRegion);
    data.append('coderegion', codeRegion);
    data.append('activiterregion', activite);
    data.append('superficieregion', superficie);
    data.append('languemregion', langue);
    data.append('description', description);
    data.append('population', population);

    return this.http.post(this.API_REGION + `/projet/odk/Regions/ajouterRegion/${nomPay}`, data)
  }


  //METHODE PERMETTANT DE RECUPERER LA LISTE DES PAYS
  listPays(): Observable<any> {
    return this.http.get(this.API_REGION + `/projet/odk/Pays/liste`);
  }


  //METHODE PERMETTANT DE RECUPERER LA LISTE DES REGION
  listRegion(): Observable<any> {
    return this.http.get(this.API_REGION + `/projet/odk/Regions/liste`)
  }

  //METHODE PERMETTANT DE RECUPERER UNE REGION PAR SON ID
  listRegionParID(idRegion: any): Observable<any> {
    return this.http.get(this.API_REGION + `/projet/odk/Regions/uneRegion/${idRegion}`)
  }

}
