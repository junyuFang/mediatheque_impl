import { Component, OnInit } from '@angular/core';
import { OeuvreService } from "./oeuvres.service";
import { Oeuvres } from "app/admin";

@Component({
  selector: 'jhi-oeuvre',
  templateUrl: './oeuvres.component.html',
})
export class OeuvresComponent {

  title = 'Tour of Heroes';

}
