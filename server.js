
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true
    }
))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signUp"
})

app.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: "Success"})

})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ Message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
        if (err) {
            return res.status(403).json({ Message: "Forbidden: Invalid or Expired Token" });
        }

        req.id = decoded.id;  
        next();  
    });
};

app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success"})
})





app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE id = ? AND password = ?";
    db.query(sql, [req.body.id, req.body.password], (err, data) => {
        if(err) return res.json({Message: "Server Side Error"});
        if(data.length > 0){
            const id = data[0].id;
            db.query(`SELECT * 
                FROM Student S
                INNER JOIN ContactInformation C ON S.rollNo = C.rollNo
                INNER JOIN FamilyInformation F ON S.rollNo = F.rollNo
                INNER JOIN PersonalInformation P ON S.rollNo = P.rollNo
                WHERE S.rollNo = ?;`,
                 [id], (err, studentData) => {
                if (err) return res.json({ Message: "Error fetching student details" })
                
                    console.log(id);
                    console.log(studentData);
                    const token = jwt.sign({id}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'})
                    res.cookie('token', token, { httpOnly: true });
                    return res.json({Status: "Success", StudentDetails: studentData})
                });

        } else {
            return res.json({Message: "No records exist"})
        }
    })
})

app.post('/attendance', verifyUser, (req, res) => {
    const { rollNo } = req.body;
    db.query(`SELECT * 
            FROM Student S
            INNER JOIN Course CR ON S.rollNo = CR.rollNo
            INNER JOIN Attendance A ON S.rollNo = A.rollNo AND A.courseId = CR.courseId
            WHERE S.rollNo = ?;`,
            [rollNo], (err, result) => {
        if (err) return res.json({ Message: "Error fetching student details" })
            return res.json({Status: "Success", StudentAttendance: result})

        });
})

app.post('/transcript', verifyUser, (req, res) => {
    const { rollNo } = req.body;
    db.query(`SELECT *
            FROM Course C
            JOIN Semester S
            ON C.semesterId = S.semesterId AND C.rollNo = ?;
            `,
            [rollNo], (err, result) => {
        if (err) return res.json({ Message: "Error fetching transcript details" })
            return res.json({Status: "Success", transcriptDetails: result})

        });
})

app.listen(8081, () => {
    console.log("Running");
})



