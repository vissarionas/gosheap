const createEmail = (name) => `${name}@gmail.com`;
const homeCtrl = (req, res) => {
    res.status(200).send(createEmail('vissarion'));
};
module.exports = { homeCtrl };
