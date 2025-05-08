const express = require('express')
const mysql = require('mysql')
const app = express();
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signUp"
})

const sql =`INSERT INTO Course (courseId, courseName, section, creditHours, grade, point, type, semesterId, rollNo)
VALUES 
(1000, 'Introduction to Information and Communication Technology', 'BSE-1A', 1, 'C+', 2.33, 'Core', 1, '23P0554'),

(1005, 'Programming Fundamentals - Lab', 'BSE-1A', 1, 'B-', 2.67, 'Core', 1, '23P0554'),

(1002, 'Programming Fundamentals', 'BSE-1A', 3, 'B+', 3.33, 'Core', 1, '23P0554'),

(1003, 'Calculus and Analytical Geometry', 'BSE-1A', 3, 'A+', 4.00, 'Core', 1, '23P0554'),

(1001, 'Applied Physics', 'BSE-1A', 3, 'A', 4.00, 'Core', 1, '23P0554'),

(1010, 'Functional English - Lab', 'BSE-1A', 1, 'B', 3.00, 'Core', 1, '23P0554'),

(1012, 'Functional English', 'BSE-1A', 2, 'B-', 2.67, 'Core', 1, '23P0554'),

(1013, 'Ideology and Constitution of Pakistan', 'BSE-1A', 2, 'B-', 2.67, 'Core', 1, '23P0554');`

//INSERTION FOR HOME PAGE
// -- Insert into Student table
// INSERT INTO Student (rollNo, degree, batch, status, campus, section) 
// VALUES (23P0554, 'BS(SE)', 'Fall 2023', 'Current', 'Peshawar', 'BSE-233A');

// -- Insert into FamilyInformation table
// INSERT INTO FamilyInformation (rollNo, relation, familyMemberName, cnic) 
// VALUES 
// ('23P0554', 'Father', '', '42101-1234567-1');

// -- Insert into ContactInformation table
// INSERT INTO ContactInformation (rollNo, address, homePhoneNumber, postalCode, city, country) 
// VALUES (23P0554, '123 Street, XYZ Town', '021-1234567', '25000', 'Peshawar', 'Pakistan');

// -- Insert into PersonalInformation table
// INSERT INTO PersonalInformation (rollNo, name, gender, email, dob, cnic, mobileNumber, bloodGroup, nationality) 
// VALUES (23P0554, 'Farooq Khan', 'Male', 'farooqkhan2426@gmail.com', '2004-10-03', '42101-9876543-2', '0312-1234567', 'O+', 'Pakistani');

//INSERTION FOR COURSE

// INSERT INTO Course (courseId, courseName, section, creditHours, grade, point, type, semesterId, rollNo)
// VALUES 
// (1000, 'Introduction to Information and Communication Technology', 'BSE-1A', 1, 'C+', 2.33, 'Core', 1, '23P0554'),

// (1005, 'Programming Fundamentals - Lab', 'BSE-1A', 1, 'B-', 2.67, 'Core', 1, '23P0554'),

// (1002, 'Programming Fundamentals', 'BSE-1A', 3, 'B+', 3.33, 'Core', 1, '23P0554'),

// (1003, 'Calculus and Analytical Geometry', 'BSE-1A', 3, 'A+', 4.00, 'Core', 1, '23P0554'),

// (1001, 'Applied Physics', 'BSE-1A', 3, 'A', 4.00, 'Core', 1, '23P0554'),

// (1010, 'Functional English - Lab', 'BSE-1A', 1, 'B', 3.00, 'Core', 1, '23P0554'),

// (1012, 'Functional English', 'BSE-1A', 2, 'B-', 2.67, 'Core', 1, '23P0554'),

// (1013, 'Ideology and Constitution of Pakistan', 'BSE-1A', 2, 'B-', 2.67, 'Core', 1, '23P0554');


//INSERTION FOR ATTENDANCE

// INSERT INTO Attendance (
//     attendanceId, rollNo, courseId, lectureId, status, attendancePercentage, date, duration
// )
// VALUES 
// (1, '23P0554', '2003', 1, 'Present', 95.00, '2025-04-10', 90),
// (2, '23P0554', '2003', 2, 'Absent', 90.00, '2025-04-15', 90),
// (1, '23P0554', '20015', 1, 'Late', 85.00, '2025-04-12', 90),
// (2, '23P0554', '20015', 1, 'Present', 95.00, '2025-04-02', 90),
// (2, '23P0554', '20014', 2, 'Absent', 90.00, '2025-04-13', 90),
// (1, '23P0554', '20014', 1, 'Late', 85.00, '2025-04-20', 90);


// INSETION FOR SEMESTER
// INSERT INTO Semester (semesterId, rollNo, session, year)
// VALUES (4, '23P0554', 'spring', 2025);




db.query(sql)


app.listen(8081, () => {
    console.log("Running");
})