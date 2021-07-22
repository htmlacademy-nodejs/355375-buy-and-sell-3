'use strict';

const express = require(`express`);
const myRoutes = require(`./routes/my`);
const offersRoutes = require(`./routes/offers`);


const DEFAULT_PORT = 8080;

const app = express();

app.use(express.static(`${__dirname}/public`));

app.set(`views`, `${__dirname}/templates`);
app.set(`view engine`, `pug`);

app.use(`/my`, myRoutes);
app.use(`/offers`, offersRoutes);

app.listen(DEFAULT_PORT, () => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));


app.get(`/`, (req, res) => {
  res.render(`main`, {
    user: {
      isAuth: false,
    }
  });
});


app.get(`/register`, (req, res) => {
  res.render(`auth/sign-up`, {
    user: {
      isAuth: false,
    }
  });
});

app.get(`/login`, (req, res) => {
  res.render(`auth/login`, {
    user: {
      isAuth: false,
    }
  });
});

app.get(`/search`, (req, res) => {
  res.render(`search/search-result`, {
    user: {
      isAuth: false,
    }
  });
});


