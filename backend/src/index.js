const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const apiv1 = require('./api/v1');
const middlewares = require('./middlewares');
require('dotenv').config();

mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully..'))
  .catch((err) => console.log(err));

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, 🌍! 👋',
  });
});

app.use('/api/v1', apiv1);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}...`));
