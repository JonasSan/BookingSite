import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Customer } from "../models/customer.model";
import { Booking } from "../models/booking.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/delay";

@Injectable()
export class FormPoster {
  constructor(private httpClient: HttpClient) {}

  getRooms(): Observable<any> {
    return this.httpClient
      .get("http://localhost:3100/getrooms")
      .map(response => response["data"] || {})
      .catch(this.handleError);
  }
  postCustomerForm(customer: Customer): Observable<any> {
    const body = JSON.stringify(customer);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers };
    return this.httpClient
      .post(
        "http://localhost:3100/postcustomer",
        JSON.stringify(customer),
        options
      )
      .map(response => response["fields"] || {})
      .catch(this.handleError);
  }

  postBookingForm(booking: Booking): Observable<any> {
    const body = JSON.stringify(booking);
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers };
    return this.httpClient
      .post(
        "http://localhost:3100/postbooking",
        JSON.stringify(booking),
        options
      )
      .map(response => response["fields"] || {})
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.log("service post error: ", error);
    return Observable.throw(error.statusText);
  }
}
