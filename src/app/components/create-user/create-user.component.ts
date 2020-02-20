import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"]
})
export class CreateUserComponent implements OnInit {
  createUser: User = { username: "", name: "", email: "", phone: "" };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onCreateUser() {
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
  }

  back() {
    this.router.navigate([""]);
  }
}
