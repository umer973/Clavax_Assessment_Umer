import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  @Input() AddressInfo: FormGroup;
  constructor() { }
  submitted = false;
  ngOnInit(): void {

  }
  get f() {
    return this.AddressInfo.controls;
  }

}
