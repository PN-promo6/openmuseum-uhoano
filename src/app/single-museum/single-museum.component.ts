import { Component, Input, OnInit } from "@angular/core";
import { MuseumListService } from "../services/museumList.service";

@Component({
  selector: "app-single-museum",
  templateUrl: "./single-museum.component.html",
  styleUrls: ["./single-museum.component.css"],
})
export class SingleMuseumComponent implements OnInit {
  museums: any[];

  @Input() museumName: string;
  @Input() adress: string;
  @Input() zipCode: string;
  @Input() city: string;
  @Input() phone: string;
  @Input() webSite: string;
  @Input() openInfo: string;
  @Input() museumRef: string;
  @Input() museumFax: string;

  constructor(private museumListService: MuseumListService) {}

  ngOnInit() {
    this.museums = this.museumListService.museums;
  }
}
