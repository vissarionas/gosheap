// eslint-disable-next-line no-unused-vars
module.exports = (err:any, _req: any, res:any, _next: any) => {
  res.status(400).send(err.message);
};
