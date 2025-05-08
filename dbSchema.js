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

const sql =`CREATE TABLE Student (
    rollNo VARCHAR(20) NOT NULL UNIQUE PRIMARY KEY,
    degree VARCHAR(100) NOT NULL,
    batch VARCHAR(20) NOT NULL,
    status VARCHAR(50) NOT NULL,
    campus VARCHAR(100) NOT NULL,
    section VARCHAR(10) NOT NULL
);`



// CREATE TABLE FamilyInformation (
//     rollNo VARCHAR(20) NOT NULL,
//     relation VARCHAR(50) NOT NULL,
//     familyMemberName VARCHAR(100) NOT NULL,
//     cnic VARCHAR(15) NOT NULL UNIQUE,
//     PRIMARY KEY (rollNo, relation),
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE
// );

// CREATE TABLE ContactInformation (
//     rollNo VARCHAR(20) NOT NULL PRIMARY KEY,
//     address TEXT NOT NULL,
//     homePhoneNumber VARCHAR(15),
//     postalCode VARCHAR(10),
//     city VARCHAR(50) NOT NULL,
//     country VARCHAR(50) NOT NULL,
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE
// );

// CREATE TABLE PersonalInformation (
//     rollNo VARCHAR(20) NOT NULL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     gender ENUM('Male', 'Female', 'Other') NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     dob DATE NOT NULL,
//     cnic VARCHAR(15) NOT NULL UNIQUE,
//     mobileNumber VARCHAR(15) NOT NULL UNIQUE,
//     bloodGroup VARCHAR(5),
//     nationality VARCHAR(50) NOT NULL,
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE
// );

// CREATE TABLE Course (
//     courseId INT NOT NULL,
//     rollNo VARCHAR(20) NOT NULL,
//     courseName VARCHAR(100) NOT NULL,
//     PRIMARY KEY (courseId, rollNo),
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE
// );

// CREATE TABLE Lecture (
//     lectureId INT NOT NULL AUTO_INCREMENT,
//     courseId INT NOT NULL,
//     date DATE NOT NULL,
//     duration INT NOT NULL, -- Duration in minutes
//     PRIMARY KEY (lectureId, courseId),
//     FOREIGN KEY (courseId) REFERENCES Course(courseId) ON DELETE CASCADE
// );

// CREATE TABLE Attendance (
//     attendanceId INT NOT NULL AUTO_INCREMENT,
//     rollNo VARCHAR(20) NOT NULL,
//     courseId INT NOT NULL,
//     date DATE NOT NULL,
//     duration INT NOT NULL, -- Duration in minutes
//     lectureId INT NOT NULL,
//     status ENUM('Present', 'Absent', 'Late') NOT NULL,
//     attendancePercentage DECIMAL(5,2),
//     PRIMARY KEY (attendanceId, rollNo, courseId, lectureId),
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE,
//     FOREIGN KEY (courseId) REFERENCES Course(courseId) ON DELETE CASCADE,
//     FOREIGN KEY (lectureId) REFERENCES Lecture(lectureId) ON DELETE CASCADE
// );

// CREATE TABLE Semester (
//     semesterId INT NOT NULL,
//     rollNo VARCHAR(20) NOT NULL,
//     session VARCHAR(50) NOT NULL,
//     year YEAR NOT NULL,
//     PRIMARY KEY (semesterId, rollNo),
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE
// );

// CREATE TABLE Transcript (
//     transcriptId INT NOT NULL AUTO_INCREMENT,
//     rollNo VARCHAR(20) NOT NULL,
//     semesterId INT NOT NULL,
//     grade VARCHAR(5) NOT NULL,
//     creditHours INT NOT NULL,
//     PRIMARY KEY (transcriptId, rollNo, semesterId),
//     FOREIGN KEY (rollNo) REFERENCES Student(rollNo) ON DELETE CASCADE,
//     FOREIGN KEY (semesterId) REFERENCES Semester(semesterId) ON DELETE CASCADE
// );

// ALTER TABLE Course
// ADD COLUMN creditHours INT,
// ADD COLUMN grade VARCHAR(5),
// ADD COLUMN point DECIMAL(4,2),
// ADD COLUMN type VARCHAR(50);



db.query(sql)


app.listen(8081, () => {
    console.log("Running");
})

