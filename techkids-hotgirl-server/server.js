const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

mongoose.connect("mongodb://localhost/techkids-hotgirl")

const userRouter = require('./routers/userRouter');
const imageRouter = require('./routers/imageRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
	// const plainTextPassword = "123456789";
	// const salt = bcrypt.genSaltSync(12);
	// const hashPassword = bcrypt.hashSync(plainTextPassword, salt);
	// console.log("Hash: " + hashPassword, "Salt: " + salt);
	// console.log(bcrypt.compareSync(plainTextPassword, hashPassword));
	// console.log(bcrypt.compareSync("abcdef", hashPassword));
	res.send("Api router");
});
//api/images
app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);

// Middleware
app.use((req, res, next) => {
	console.log("404");
	res.send("404");
});

const port = 6969;
app.listen(port, (err) => {
	if(err) console.log(err)
	else console.log("Listen at port " + port);
});