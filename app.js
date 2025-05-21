import express from 'express';
import router from './routes/router.js';

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(3000, () => {
  console.log(`Server is listening at port 3000`);
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