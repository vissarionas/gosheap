module.exports = (err:any, _req: any, res:any) => {
  res.status(400).send(err.message);
};
