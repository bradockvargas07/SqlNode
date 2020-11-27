const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show (req, res) {

      const users =await User.findAll({
          attributes: ['name', 'email'],
          where:{
              email: {
                [Op.iLike]: '%@gmail.com.br'
              }
          },
          include: [
              { association: 'addresses', where: {street: 'Rua tal'}},
              { association: 'techs',
                  required: false, // left outer join
                where: {
                    name:{
                        [Op.iLike]: '%node%'
                    }
                }
              },
          ]
      })

      return res.json(users);
  }
};
