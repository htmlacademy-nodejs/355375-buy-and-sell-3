'use strict';

const {Router} = require(`express`);

const offersRoutes = new Router();

offersRoutes.get(`/`, (req, res)=>{
  res.send(`/offers`);
});

offersRoutes.get(`/category/:id`, (req, res)=>{
  res.send(`/offers/category/:id ${req.params.id}`);
});

offersRoutes.get(`/add`, (req, res)=>{
  res.send(`/offers/add`);
});

offersRoutes.get(`/edit/:id`, (req, res)=>{
  res.send(`/offers/edit/:id ${req.params.id}`);
});

offersRoutes.get(`/:id`, (req, res)=>{
  res.send(`/offers/:id ${req.params.id}`);
});

module.exports = offersRoutes;
