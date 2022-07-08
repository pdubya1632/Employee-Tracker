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
          let { id, title } = cur;
          let ex = acc.find((x) => x.id === id);
          if (!ex) {
            ex = { id, title };
            acc.push(ex);
          }
          return acc;
        }, []);

        choices = choices.map(function (obj) {
          obj['value'] = obj['id'];
          delete obj['id'];
          obj['message'] = obj['title'];
          obj['name'] = obj['title'];
          delete obj['title'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting all Roles: ', err);
      });
  },

  create: async (title, departmentId) => {
    return await Role.create({
      title: title,
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
