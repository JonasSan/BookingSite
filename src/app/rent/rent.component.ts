import { Component } from "@angular/core";
import { Booking } from "../models/booking.model";
import { FormPoster } from "../services/form-poster.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "rent",
  styleUrls: ["./rent.component.css"],
  templateUrl: "./rent.component.html"
})
export class RentComponent {
  rooms = [];
  model = new Booking(0, 0, "default", "", "", false, false);
  hasChosenRoomError = false;
  hasChosenDateError = false;

  constructor(private formPoster: FormPoster) {
    this.formPoster
      .getRooms()
      .subscribe(
        data => (this.rooms = data.rooms),
        err => console.log("get error: ", err)
      );
  }

  submitForm(form: NgForm) {
    this.validateRoomType(this.model.room);
    this.validateBooking(this.model.room);
    if (this.hasChosenRoomError) return;
    if (this.hasChosenDateError) return;
    this.formPoster.postBookingForm(this.model);

    this.formPoster
      .postBookingForm(this.model)
      .subscribe(
        data => console.log("success: ", data),
        err => console.log("error ", err)
      );
  }

  validateRoomType(value) {
    if (value === "default") this.hasChosenRoomError = true;
    else this.hasChosenRoomError = false;
  }

  validateBooking(value) {
    if (value === "") this.hasChosenRoomError = true;
    else this.hasChosenRoomError = false;
  }
}
