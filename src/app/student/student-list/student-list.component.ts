import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StudentModal } from 'src/app/Modals/studentModal';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studs: any;
  @Output() recordEdit = new EventEmitter<StudentModal>();
  constructor(private stuService: StudentService, private router: Router) { }

  ngOnInit() {

    this.studs = this.stuService.getstudents()
    console.log(this.studs);

  }


  show(id) {
    // this.router.navigate(['/View'], { queryParams: { 'Id': id } });
    this.router.navigate(['addStudent'], { queryParams: { 'Id': id } });

    // let stud = this.stuService.getstudents();
    // this.studs = stud.find(p => p.id == id);
    // console.log(this.studs);
    // this.recordEdit.emit(this.studs)
  }

  AddStudent() {
    this.router.navigate(['addStudent']);
  }

}
