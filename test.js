const models  = require('../db/models');

try {
    let user = await models.User.findAll({ where: { name: "Betty" } });
  } catch (err) {
  
  }