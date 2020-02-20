import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

const routes: Routes = [{ path: "", component: UserListComponent }];

@NgModule({
  declarations: [UserListComponent],
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
