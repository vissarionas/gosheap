export {};

const User = require('../../mongodb/models/User');

const deleteUser = async (req: any, res: any, next: any) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).send(deletedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
