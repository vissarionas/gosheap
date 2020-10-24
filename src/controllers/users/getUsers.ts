export {};

const User = require('../../mongodb/models/User');

const getUsers = async (req: any, res: any, next: any) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
