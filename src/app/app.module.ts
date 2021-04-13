import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddressInfoComponent } from './student/address-info/address-info.component';
import { BasicInfoComponent } from './student/basic-info/basic-info.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentService } from './student.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddressInfoComponent,
    BasicInfoComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
