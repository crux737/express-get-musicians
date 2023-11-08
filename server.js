const express = required('express');
const app = express();
const musicianRouter = require('./routes/musicians')
const port = 3000;




app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/musicians`)
})