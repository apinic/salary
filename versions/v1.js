var Salary = require('nicaragua-salary');

module.exports = function (request, reply) {
  if (request.query.hasOwnProperty('salary')) {
    var salary = new Salary(parseFloat(request.query.salary));
    
    var output = {
      monthly: {
        salary: salary.getSalary(),
        freeSalary: salary.getSalaryFree(),
        inss: salary.getInss(),
        ir: salary.getIr(),
        retention: salary.getRetention()
      },
      fortnightly: {
        salary: salary.getSalaryFortnightly(),
        freeSalary: salary.getSalaryFreeFortnightly(),
        inss: salary.getInssFortnightly(),
        ir: salary.getIrFortnightly(),
        retention: salary.getRetentionFortnightly()
      },
      annual: salary.getAnnual(),
      excess: salary.getExcess(),
      base: salary.getBase(),
      percentage: salary.getPercentage()
    };

    return reply(output);
  }
  else {
    var error = {
      error: {
        message: 'Es requerido un salario mensual como parámetro.'
      }
    };
    return reply(error);
  }
};
