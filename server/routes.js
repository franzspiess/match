"use strict";

const router = require('koa-router')();

const controller = require('./controller/controller');


router.post('/create', controller.create)
router.get('/login', controller.login)
router.get('/potentials/:id', controller.getPotentials);
router.get('/matches/:id', controller.getMatches);
router.post('/setmatch/:id', controller.setMatch);
router.post('/setdecline/:id', controller.setDecline);
router.get('/myuser/:id', controller.getProfile);
router.post('/myuser/:id', controller.setProfile);
router.post('/msg/:id', controller.setMsg);

module.exports = router;