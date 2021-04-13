export class StudentModal {
    load() {
        if (localStorage.getItem('students') === null || localStorage.getItem('students') == undefined) {
            console.log('No Data Found... ');
            let stus = [
                {
                    id: 1,
                    StudentName: "GHI",
                    Email: "test@gmail.com",
                    Mobile: "9191919191",
                    DateOfBirth: "03/04/2020",
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
                    StudentName: "Abc",
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
                {
                    id: 3,
                    StudentName: "Def",
                    Email: "test3@gmail.com",
                    Mobile: "31333444444",
                    DateOfBirth: "03/04/2021",
                    Gender: "Other",


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
            console.log('Found students...');
        }
    }
}
