const mysql = require('mysql')
const express = require('express');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'noteapp'
})

db.connect(err => {
    if (err) throw err;

    console.log('MySql connected')

})

const app = express();

app.get('/getdata', (req, res) => { 

    let sql = "SELECT * FROM notes;"
    db.query(sql, (err, result) => { 
        if(err) throw err;

        res.send(result);
    })

   

})

app.use(express.json());

app.post('/post', (req, res) => {
    
    let data = req.body;   

    let sql = `INSERT INTO notes (title, body) VALUES ('${data.title}', '${data.body}');`
    db.query(sql, err => {

        if(err) throw err;
        console.log("Note inserted")

    })
    

})

app.delete('/delete/:id', (req, res) => { 

  
    const id = req.params.id;

    let sql = `DELETE FROM notes WHERE title = '${id}'`;

    db.query(sql, (err) => { 
        if(err) throw err;
    })



    
})

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });




app.listen('3000', () => {
    console.log('Server started on port 3000')

})