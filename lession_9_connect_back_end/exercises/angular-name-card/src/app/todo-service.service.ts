import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  URL_API = 'http://localhost:3000/'
  constructor(private http: HttpClient) {
  }

  add() {

  }
}
