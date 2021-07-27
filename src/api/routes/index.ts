import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
  return res.json({ message: 'OK' });
});

export default Router;
