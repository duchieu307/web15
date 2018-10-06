const express = require('express');
const path = require('path');
const app = express();

// Get, Post, Put, Delete

// http://localhost:3000/......
app.use(express.static('HTML CSS'));
// app.use(express.static('../Bai 2'));

app.get('/', (req, res) => {
    console.log(__dirname);
    // res.send({ success: 1, data: "Hello" });
    res.sendFile(path.resolve(__dirname, '/HTML CSS/index.html'));
});
// http://localhost:3000/style.css
// app.get('/style.css', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../nav/style.css'));
// });

app.listen(3000, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 3000!");
});
