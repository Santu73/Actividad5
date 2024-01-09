const express = require('express');
const app = express();
app.use(express.json());

const librosRouter = require('./router/libros');

const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor en funcionamiento');
});
