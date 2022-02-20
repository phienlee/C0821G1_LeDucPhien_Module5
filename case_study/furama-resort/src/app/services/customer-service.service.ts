import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ICustomer} from "../customers/icustomer";

const API_URL = `${environment.urlApi}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(API_URL + "/customers");
  }

  addCustomer(customer): Observable<ICustomer> {
    return this.http.post<ICustomer>(API_URL + "/customers", customer);
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(API_URL + `/customers/${id}`);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(API_URL + `/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<ICustomer>{
    return this.http.delete<ICustomer>(API_URL + `/customers/${id}`)
  }
}
