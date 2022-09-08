const { Employee } = require('../models');

module.exports = {
  findAll: async () => {
    return await Employee.findAll({ raw: true });
  },

  findAllChoices: async () => {
    return await Employee.findAll()
      .then((res) => {
        const employeeData = res.map((record) => record.toJSON());

        let choices = employeeData.reduce((acc, cur) => {
          let { id, full_name } = cur;
          let ex = acc.find((x) => x.id === id);
          if (!ex) {
            ex = { id, full_name };
            acc.push(ex);
          }
          return acc;
        }, []);

        choices = choices.map(function (obj) {
          obj['value'] = obj['id'];
          delete obj['id'];
          obj['message'] = obj['full_name'];
          obj['name'] = obj['full_name'];
          delete obj['full_name'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting Employees: ', err);
      });
  },

  findAllManagers: async () => {
    return await Employee.findAll({
      where: { is_manager: true },
    })
      .then((res) => {
        // TODO: turn data formatting into function
        const employeeData = res.map((record) => record.toJSON());

        let choices = employeeData.reduce((acc, cur) => {
          let { id, full_name } = cur;
          let ex = acc.find((x) => x.id === id);
          if (!ex) {
            ex = { id, full_name };
            acc.push(ex);
          }
          return acc;
        }, []);

        choices = choices.map(function (obj) {
          obj['value'] = obj['id'];
          delete obj['id'];
          obj['message'] = obj['full_name'];
          delete obj['full_name'];
          return obj;
        });

        return choices;
      })
      .catch((err) => {
        console.log('>> Error while getting Employees: ', err);
      });
  },

  updateRole: async (id, roleId) => {
    return await Employee.update(
      {
        roleId: roleId,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then((res) => {
        console.log('>> Updated Employee Role');
        return res;
      })
      .catch((err) => {
        console.log('>> Error while updating role: ', err);
      });
  },

  create: async (input) => {
    return await Employee.create({
      first_name: input.first_name,
      last_name: input.last_name,
      roleId: input.roleId,
      salary: input.salary,
      is_manager: input.isManager,
      managerId: input.managerId,
      is_active: true,
    })
      .then((res) => {
        console.log(
          '>> Created employee: ' + JSON.stringify(res, null, 4)
        );
        return res;
      })
      .catch((err) => {
        console.log('>> Error while creating role: ', err);
      });
  },
};
