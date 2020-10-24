export {};

const User = require('../../mongodb/models/User');

const createUser = async (req: any, res: any, next: any) => {
  try {
    const { firstName, lastName } = req.body;
    const user = new User({ firstName, lastName });
    res.send(await user.save());
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
