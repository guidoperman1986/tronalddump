import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit, OnDestroy {
  url = "https://tronalddump.io/";

  constructor(private router:Router) { 
    
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    
  }

  reload(url){
    location.reload()
    
  }

}
