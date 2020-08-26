import { Component, OnInit } from '@angular/core';
import { TronaldService } from '../../services/tronald.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private tronaldService:TronaldService) { }

  ngOnInit() {
  }

  //search
  search(value:string){   
    this.tronaldService.search(value)
        .subscribe(data=>console.log(data),
        error=>console.log(error)        
        );
                                      

  }

}
