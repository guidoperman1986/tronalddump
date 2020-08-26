import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagElement, Embedded } from '../models/tag.model';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TronaldService {
  url = "https://tronalddump.io/";

  constructor(private http:HttpClient) { 


  }

  search(value:string){    
    return this.http.get(this.url+'search/quote?query='+value)
                    .pipe(
                      map((data:any)=>data._embedded.quotes),
                      tap(data=>console.log(data))
                    )
  }

  tag(value:string){
    return this.http.get<Embedded>(this.url+'tag')
                    .pipe(
                      map(data=>data._embedded)
                    );
  }

  meme(){
    return this.http.get(this.url+'random/meme',{responseType: 'blob'});
  }

}
