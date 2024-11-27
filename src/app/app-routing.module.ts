import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'todo', component: TodoListComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
