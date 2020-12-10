export {};

const User = require('../../mongodb/models/User');

const create = async (req: any, res: any, next: any) => {
  try {
    const { firstName, lastName } = req.body;
    const newUser = { firstName, lastName };
    res.send(await User.create(newUser));
  } catch (error) {
    next(error);
  }
};

module.exports = create;
