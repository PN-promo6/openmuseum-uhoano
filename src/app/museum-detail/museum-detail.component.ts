import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

museumTitle : string = "Title from museum detail component";
museumCategory : string = "Category from museum detail component"

constructor(private museumListService : MuseumListService) {

}

  ngOnInit() {
  }

}
