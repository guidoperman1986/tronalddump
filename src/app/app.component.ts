import { Component, OnInit, OnDestroy } from '@angular/core';
import { TronaldService } from './services/tronald.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'tronald';
  data:any;  
  mySubscription:any;

  constructor(private tronaldService:TronaldService, private router:Router){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //tag
    this.tronaldService.tag('algo').subscribe(data=>console.log(data));    
    
    //Meme
    this.tronaldService.meme().subscribe(data=>data=data);

  }

  ngOnDestroy(){    
  }
}
