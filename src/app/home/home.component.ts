import { Component, OnInit } from '@angular/core';
import {MuseumListService} from '../services/museumList.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'openmuseum';
  museums : any[];


  constructor(private museumListService : MuseumListService) {

  }

  ngOnInit() {
    this.museums = this.museumListService.museums
  }


}
