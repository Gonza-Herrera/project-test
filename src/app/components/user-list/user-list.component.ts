import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";



@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  accion: string = "";
  displayedColumns: string[] = ["username", "name", "email", "phone", "accion"];
  dataUsers: any;
  dataSource: any = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      res => {
        console.log("res: ", res);
        this.dataSource = res;
      },
      error => {
        console.log("error: ", error);
      }
    );
  }

  onCreateUser() {
    this.accion = "Create";

    this.router.navigate(["/form-user"]);
  }

  update() {
    this.accion = "Update";
    this.router.navigate(["/form-user"]);
  }

  deleteUser(obj) {
    this.userService.deleteUser(obj.userId).subscribe(res => {
      alert("User Delete Succes")
    },
    error =>{
    });
  }
}
