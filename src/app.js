const express = require('express');
const app = express();
app.use(express.json());

const authRouter = require('./routes/auth.routes'); 
const pdfrouter = require('./routes/pdf.routes');
const adminrouter = require('./routes/admin.routes');

app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});

app.use('/api/auth', authRouter);
app.use('/api/pdf', pdfrouter);
app.use('/api/admin', adminrouter);




module.exports = app;