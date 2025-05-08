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

const sql =`UPDATE Course
SET creditHours = 3, grade = 'I', point = 0, type = 'Core'
WHERE courseId = 2009 AND rollNo = '23P0554';`


// -- Expository Writing (BSE-4A)
// UPDATE Course
// SET creditHours = 2, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 1014 AND rollNo = '23P0554';

// -- Expository Writing Lab (BSE-4A)
// UPDATE Course
// SET creditHours = 1, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 1015 AND rollNo = '23P0554';

// -- Software Design and Architecture (BSE-4A)
// UPDATE Course
// SET creditHours = 3, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2003 AND rollNo = '23P0554';

// -- Database Systems Lab (BSE-4A)
// UPDATE Course
// SET creditHours = 1, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2004 AND rollNo = '23P0554';

// -- Database Systems (BSE-4A)
// UPDATE Course
// SET creditHours = 3, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2005 AND rollNo = '23P0554';

// -- Operating Systems (BSE-4A)
// UPDATE Course
// SET creditHours = 3, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2006 AND rollNo = '23P0554';

// -- Operating Systems Lab (BSE-4A)
// UPDATE Course
// SET creditHours = 1, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2007 AND rollNo = '23P0554';

// -- Design and Analysis of Algorithm (BSE-4A)
// UPDATE Course
// SET creditHours = 3, grade = 'I', point = 0, type = 'Core'
// WHERE courseId = 2009 AND rollNo = '23P0554';





db.query(sql)


app.listen(8081, () => {
    console.log("Running");
})