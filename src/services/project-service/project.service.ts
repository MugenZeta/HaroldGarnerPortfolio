import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { projects } from "./project-interface";

import {IconsService} from "../icon-service/icons.service";
@Injectable({providedIn: 'root'})

export class ProjectService {
  constructor(private http : HttpClient) { }

  getProjects(): Observable<any> {
      return this.http.get<any>('https://api.github.com/users/MugenZeta/repos');
  }
}
