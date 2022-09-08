const { Department } = require('../models');

module.exports = {
  findAll: async () => {
    return await Department.findAll({ raw: true });
  },

  findAllChoices: async () => {
    return await Department.findAll()
      .then((res) => {
        const shortList = res.map((record) => record.toJSON());

        let choices = shortList.reduce((acc, cur) => {
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
          delete obj['name'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting all Departments: ', err);
      });
  },

  create: async (name) => {
    return await Department.create({
      name: name,
    })
      .then((res) => {
        console.log(
          '>> Created Department: ' + JSON.stringify(res, null, 4)
        );
        return res;
      })
      .catch((err) => {
        console.log('>> Error while creating Department: ', err);
      });
  },
};
