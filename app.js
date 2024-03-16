const express = require('express');
const { router } = require('./routes/router');

const app = express();

app.use('/', router);

//lco3000/register-post

app.listen(3000, ()=>{
    console.log(`server is listen at port : 3000`)
});


//file :-
/*
M:- Model
V:- View
C:- Controller

C:- create
R:- read
U:- Update
D:- Delete

*/