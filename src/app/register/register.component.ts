import { Component } from "@angular/core";
import { Customer } from "../models/customer.model";
import { FormPoster } from "../services/form-poster.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  model = new Customer(0, "", "", 0, "creditCard", true);

  constructor(private formPoster: FormPoster) {}

  submitForm(form: NgForm) {
    this.formPoster.postCustomerForm(this.model);
    this.formPoster
      .postCustomerForm(this.model)
      .subscribe(
        data => console.log("success: ", data),
        err => console.log("error ", err)
      );
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0)
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else this.model.firstName = value;
  }

  lastNameToUpperCase(value: string) {
    if (value.length > 0)
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    else this.model.lastName = value;
  }
}
