import { Injectable } from '@angular/core';
import { Stroller } from '../interfaces/stroller';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { AuthServiceService } from '../auth/auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class StrollerServiceService {
 
  private dbPathData = '/data';
  strollersRef: AngularFireList<Stroller> //Да се провери!!!!

  constructor(public db: AngularFireDatabase) { 
    this.strollersRef = db.list(this.dbPathData);
  }

  getStrollers(): AngularFireList<Stroller> {
    return this.strollersRef;
  }

  getStroller(id:string) {
    const data = this.db.object(this.dbPathData + `/${id}`);
    return data;
   
  }


}
