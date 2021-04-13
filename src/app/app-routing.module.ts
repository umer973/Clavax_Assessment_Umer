import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'studentList', component: StudentListComponent },
  { path: '', redirectTo: '/studentList', pathMatch: 'full' },
  { path: 'addStudent', component: StudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
