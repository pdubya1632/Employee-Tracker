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
          delete obj['title'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting all Departments: ', err);
      });
  },

  create: async (title) => {
    return await Department.create({
      title: title,
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
