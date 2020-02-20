import { Component, OnInit } from "@angular/core";

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
  displayedColumns: string[] = ["username", "name", "email", "phone", "accion"];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
