import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "form-user",
  templateUrl: "./form-user.component.html",
  styleUrls: ["./form-user.component.scss"]
})
export class FormUserComponent implements OnInit {
  @Input("accion") accion: string = "Update";
  @Input("username") username: string;
  @Input("name") name: string;
  @Input("email") email: string;
  @Input("phone") phone: string;
  createUser: User = { "username": "", "name": "", "email": "", "phone": "" };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    console.log("this form: ", this);
  }

  onsubmit() {
    if (this.accion === "Create") {
      console.log("createUser: ", this.createUser);
      const payload = JSON.stringify(this.createUser);
      this.userService.createUser(payload).subscribe(
        resp => {
          console.log("resp: ", resp);
          alert("User create succes");
          this.router.navigate([""]);
        },
        error => {
          console.log("error: ", error);
        }
      );
    } else {
      const payload = JSON.stringify(this.createUser);
      this.userService.updateUSer(payload).subscribe(
        resp => {
          console.log("resp: ", resp);
          alert("User update succes");
          this.router.navigate([""]);
        },
        error => {
          console.log("error: ", error);
        }
      );
    }
  }

  back() {
    this.router.navigate([""]);
  }
}
