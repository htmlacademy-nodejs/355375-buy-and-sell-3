'use strict';

const {Router} = require(`express`);

const myRoutes = new Router();

myRoutes.get(`/`, (req, res)=>{
  res.render(`tickets/my-tickets`, {
    user: {
      isAuth: true,
    }
  });
});

myRoutes.get(`/comments`, (req, res)=>{
  res.render(`comments/comments`, {
    user: {
      isAuth: true,
    }
  });
});

module.exports = myRoutes;
