'use strict';

const {Router} = require(`express`);
const {readFile} = require(`fs`).promises;
const FILENAME = `mocks.json`;
const {HttpCode} = require(`../../constants`);

const routes = new Router();

routes.get(`/offers`, async (req, res)=>{
  try {
    const content = await readFile(FILENAME, `utf-8`);
    const json = JSON.parse(content);
    res.status(HttpCode.OK).json(json);
  } catch (err) {
    res.status(HttpCode.OK).json([]);
  }
});

module.exports = routes;
