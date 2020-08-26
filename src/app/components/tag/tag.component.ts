import { Component, OnInit } from '@angular/core';
import { TronaldService } from '../../services/tronald.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  tags:any[]=[];

  constructor(private tronald:TronaldService) { }

  ngOnInit() {
    this.tronald.tag('').subscribe((tags:any)=>{
      for (let tag in tags){
        this.tags.push(...tags[tag]);
      }
      
    });
  }

  buscarTag(tag){
    fetch(tag.href)
      .then(data=>data.text())
      .then(html=>{
        console.log(html);
        //document.open();
        //document.write(html);
        //document.close();
      })
  }

}
