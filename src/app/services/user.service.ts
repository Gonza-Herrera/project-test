import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "https://localhost:44320";
  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers() {
    return this.http.get(this.baseUrl + "/api/user/getallusers");
  }

  createUser(User) {
    return this.http.post(this.baseUrl + "/api/v1/admins/login", User);
  }
}
