import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";


@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "https://localhost:44320";
  private header = ({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) {}

  
  
  getAllUsers() {
    return this.http.get(this.baseUrl + "/api/user/getallusers");
  }

  createUser(User) {
    return this.http.post(this.baseUrl + "/api/user/createUser", User, {headers : this.header});
  }

  updateUSer(User) {
    return this.http.put(this.baseUrl + "/api/user/updateUser", User, {headers : this.header});
  }

  deleteUser(id) {
    return this.http.delete(this.baseUrl + "/api/user/deleteuser?userid=" + id, {headers : this.header});
  }
}
