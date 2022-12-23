import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailRegionsService {

  API_Commentaire = "http://localhost:8080";

  constructor(private http: HttpClient) { }



  ajouterCommentaire(objet:any, description:any, idr: any, idu: any): Observable<any> {

    let comm = {
      "objet": objet,
      "description": description,
      "regions": {
        "id_regions": idr
      }
      // "users": {
      //   "id": idu
      // }

    }
    return this.http.post(`http://localhost:8080/projet/odk/Commentaire/creer/${idu}`,comm);
  }

  //Methode permettant de recupérer la liste de commentaire
  listecommentaire(): Observable<any>{
    return this.http.get(this.API_Commentaire + `/projet/odk/Commentaire/lister`);
  }
}
