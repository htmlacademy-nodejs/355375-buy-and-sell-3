'use strict';

const {Router} = require(`express`);

const offersRoutes = new Router();

offersRoutes.get(`/`, (req, res)=>{
  res.render(`errors/400`);
});

offersRoutes.get(`/category`, (req, res)=>{
  res.render(`errors/400`);
});

offersRoutes.get(`/category/:id`, (req, res)=>{
  res.render(`categories/category`, {
    user: {
      isAuth: true,
    }
  });
});

offersRoutes.get(`/add`, (req, res)=>{
  res.render(`tickets/new-ticket`, {
    user: {
      isAuth: true,
    }
  });
});

offersRoutes.get(`/edit/:id`, (req, res)=>{
  res.render(`tickets/ticket-edit`, {
    user: {
      isAuth: true,
    }
  });
});

offersRoutes.get(`/:id`, (req, res)=>{
  res.render(`tickets/ticket`, {
    user: {
      isAuth: true,
    }
  });
});

module.exports = offersRoutes;
