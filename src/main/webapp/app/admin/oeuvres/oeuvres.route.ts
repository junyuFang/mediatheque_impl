import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { OeuvresComponent } from './oeuvres.component';

export const oeuvreRoute: Route = {
  path: 'jhi-oeuvres',
  component: OeuvresComponent,
  data: {
    pageTitle: 'Oeuvre Management'
  }
};
