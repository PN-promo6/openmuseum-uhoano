import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SingleMuseumComponent } from "./single-museum/single-museum.component";
import { MuseumListService } from "./services/museumList.service";
import { AddMuseumComponent } from "./add-museum/add-museum.component";
import { HomeComponent } from "./home/home.component";
import { MuseumDetailComponent } from "./museum-detail/museum-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  { path: "add", component: AddMuseumComponent },
  { path: "singleMuseum", component: SingleMuseumComponent },
  { path: "", component: HomeComponent },
  { path: "museum/:museumRef", component: MuseumDetailComponent },
  { path: "not-found", component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    HomeComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [MuseumListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
