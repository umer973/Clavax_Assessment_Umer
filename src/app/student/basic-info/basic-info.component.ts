import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor() {

  }
  @Input() BasicInfo: FormGroup;
  // options: DatepickerOptions = {
  //   format: 'DD/MM/YYYY'
  // };
  ngOnInit(): void {
  }
  get f() {
    return this.BasicInfo.controls;
  }

  onGenderChange() {
  
    if (this.BasicInfo.get('Gender').value == "Other") {
        this.BasicInfo.controls['OtherReason'].setValidators([Validators.required, Validators.maxLength(12), Validators.pattern('^[a-zA-Z ]*$')])
    }
    else
    {
      this.BasicInfo.controls['OtherReason'].setValidators[''];
    }
    this.BasicInfo.controls['OtherReason'].updateValueAndValidity();

  }

}
