const { Role } = require('../models');

module.exports = {
  findAll: async () => {
    return await Role.findAll({ raw: true });
  },

  findAllChoices: async () => {
    return await Role.findAll({})
      .then((res) => {
        const roles = res.map((role) => role.toJSON());

        let choices = roles.reduce((acc, cur) => {
          let { id, name } = cur;
          let ex = acc.find((x) => x.id === id);
          if (!ex) {
            ex = { id, name };
            acc.push(ex);
          }
          return acc;
        }, []);

        choices = choices.map(function (obj) {
          obj['value'] = obj['id'];
          delete obj['id'];
          obj['message'] = obj['name'];
          obj['name'] = obj['name'];
          delete obj['name'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting all Roles: ', err);
      });
  },

  create: async (name, departmentId) => {
    return await Role.create({
      name: name,
      departmentId: departmentId,
    })
      .then((res) => {
        console.log(
          '>> Created role: ' + JSON.stringify(res, null, 4)
        );
        return res;
      })
      .catch((err) => {
        console.log('>> Error while creating role: ', err);
      });
  },
};
