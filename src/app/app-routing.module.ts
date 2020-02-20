import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { FormUserComponent } from "./components/form-user/form-user.component";

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "form-user", component: FormUserComponent }
];

@NgModule({
  declarations: [UserListComponent, FormUserComponent],
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
