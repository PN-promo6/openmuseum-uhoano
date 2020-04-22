import { Component, OnInit, Input } from "@angular/core";
import { MuseumListService } from "../services/museumList.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-museum-detail",
  templateUrl: "./museum-detail.component.html",
  styleUrls: ["./museum-detail.component.css"],
})
export class MuseumDetailComponent implements OnInit {
  museumName: string;
  adress: string;
  zipCode: string;
  city: string;
  phone: string;
  webSite: string;
  openInfo: string;
  museumRef: string;
  museumFax: string;
  museumNocturne: string;

  constructor(
    private museumListService: MuseumListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const museumRef = this.route.snapshot.params["museumRef"];
    this.museumName = this.museumListService.getMuseumById(
      museumRef
    ).nom_du_musee;

    this.adress = this.museumListService.getMuseumById(museumRef).adr;

    this.zipCode = this.museumListService.getMuseumById(museumRef).cp;

    this.museumFax = this.museumListService.getMuseumById(museumRef).fax;

    this.museumNocturne = this.museumListService.getMuseumById(
      museumRef
    ).jours_nocturnes;
  }
}
