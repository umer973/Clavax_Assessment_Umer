import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { v4 as uuid } from 'uuid';
import { StudentModal } from '../Modals/studentModal';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  addressForm: FormGroup;
  id: any;
  submitted = false;
  student: any;
  btnText = "Save";

  constructor(private formBuilder: FormBuilder, private studentServie: StudentService, private router: Router
    , private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.CreateFormControls();
    this.id = this._Activatedroute.snapshot.queryParamMap.get('Id');
    let stds = this.studentServie.getstudents();
    this.student = stds.find(p => p.id == this.id);
    if (this.id != null) {
      this.studentForm.patchValue(this.student)
      this.btnText = "Update";
    }
    else
      this.btnText = "Save";
  }

  CreateFormControls() {
    this.studentForm = this.formBuilder.group({
      id: [null],
      StudentName: ['', [Validators.required, Validators.maxLength(56), Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")]],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*$")]],
      DateOfBirth: ['', Validators.required],
      Gender: ['', Validators.required],
      OtherReason: [''],
      Address: this.formBuilder.group({
        Address: new FormControl("", [Validators.required, Validators.maxLength(256)]),
        Aditional: new FormControl("", [Validators.required, Validators.maxLength(256)]),
        PinCode: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]),
        City: new FormControl("", [Validators.required, Validators.maxLength(56)]),
        State: new FormControl("", [Validators.required, Validators.maxLength(56)])
      })

    });

    this.studentForm.valueChanges.subscribe(newVal=>console.log(newVal))
  }



  onSubmit() {
    console.log(this.studentForm.controls);
   
    this.submitted = true;

    this.studentServie.getstudents();
    if (this.id == null || this.id == undefined) {
      this.saveStudent();
    }
    else {
      this.updateStudent();
    }

  }
  saveStudent() {
    try {
      if (this.studentForm.value) {
        let newStudent = {
          id: uuid(),
          StudentName: this.studentForm.value.StudentName,
          Email: this.studentForm.value.Email,
          Mobile: this.studentForm.value.Mobile,
          DateOfBirth: this.studentForm.value.DateOfBirth,
          Gender: this.studentForm.value.Gender,
          Address: this.studentForm.controls['Address'].value.Address,
          Additional:  this.studentForm.controls['Address'].value.Additional,
          PinCode:  this.studentForm.controls['Address'].value.PinCode,
          State:  this.studentForm.controls['Address'].value.State,
          City:  this.studentForm.controls['Address'].value.City,

        }

        this.studentServie.addStudent(newStudent);
        alert("Saved")
        this.router.navigate(['studentList']);


      }
    }
    catch (err) {
    }


  }
  updateStudent() {
    try {
      if (this.studentForm.value) {
        this.studentForm.controls.id.setValue(this.id);

        this.studentServie.updateStudent(this.student, this.studentForm.value);


        alert("Updated")
        this.id = null;
        this.router.navigate(['studentList']);

      }
    }
    catch (err) {
    }
  }
  studentOnEdit(student: any) {
    this.studentForm.patchValue(student);
  }

}
