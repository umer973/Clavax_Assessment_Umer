import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
    this.load();
  }

  getstudents() {
    let std = JSON.parse(localStorage.getItem('students'));
    return std;
  }

  addStudent(newBlog) {
    let stus = JSON.parse(localStorage.getItem('students'));
    stus.push(newBlog);
    localStorage.setItem('students', JSON.stringify(stus));
  }



  updateStudent(oldStudent, newStudent) {
    let stus = JSON.parse(localStorage.getItem('students'));

    for (let i = 0; i < stus.length; i++) {
      if (stus[i].id == oldStudent.id) {
        stus[i] = newStudent;
      }
    }
    localStorage.setItem('students', JSON.stringify(stus));
  }

  load() {
    if (localStorage.getItem('students') === null || localStorage.getItem('students') == undefined) {

      let stus = [
        {
          id: 1,
          StudentName: "dsad",
          Email: "test1@gmail.com",
          Mobile: "54333322111",
          DateOfBirth: "02/04/2022",
          Gender: "Male",

          Address:{
            "Address": "Jammu",
            "Aditional": "Test",
            "PinCode": "5555",
            "City": "test",
            "State": "J & k",
            "therReason": ""
            }


        },
        {
          id: 2,
          StudentName: "sds",
          Email: "test2@gmail.com",
          Mobile: "54333322111",
          DateOfBirth: "02/04/2022",
          Gender: "Female",

          Address:{
            "Address": "Jammu",
            "Aditional": "Test",
            "PinCode": "5555",
            "City": "test",
            "State": "J & k",
            "therReason": ""
            }

        },
      ];

      localStorage.setItem('students', JSON.stringify(stus));
      return
    } else {

    }
  }
}
