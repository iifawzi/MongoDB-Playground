const express = require('express');
const studentRoutes = require('./routes/student');
const mongoConnect = require('./util/database').mongoConnect;
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));
app.use(studentRoutes);

mongoConnect(()=>{
app.listen(3000);
})