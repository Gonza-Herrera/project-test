import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";

export interface PeriodicElement {
  name: string;
  username: number;
  email: number;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { username: 1, name: "Hydrogen", email: 1.0079, phone: "H" },
  { username: 2, name: "Helium", email: 4.0026, phone: "He" },
  { username: 3, name: "Lithium", email: 6.941, phone: "Li" }
];

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  accion: string = "";
  displayedColumns: string[] = ["username", "name", "email", "phone", "accion"];
  dataUsers: any;
  //dataSource: any = [];
  dataSource = ELEMENT_DATA;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      res => {
        console.log("res: ", res);
        //this.dataSource = res;
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

  deleteUser(event) {
    this.dataSource.forEach(item => {
      let index: number = this.dataSource.findIndex(d => d === item);
      this.dataSource.splice(index, 1);
    });
    const object = this.dataSource.find(data => {
      return data;
    });
    const payload = JSON.stringify(object);

    this.userService.deleteUser(payload);
  }
}
