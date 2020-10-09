const fakeAsync = () => new Promise((resolve) => {
  setTimeout(() => resolve('Done'), 1000);
});

module.exports = async (req: any, res: any, next: any) => {
  try {
    const result = await fakeAsync();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
