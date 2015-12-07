# salary
API para consultar el IR e INSS de un salario fijo en Nicaragua

##Ejemplo:

http://salary.apinic.org/v1/calculate?salary=28493.12

##Resultado:
    {
        "monthly": {
            "salary":"28493.12",
            "freeSalary":"23453.17",
            "inss":"1780.82",
            "ir":"3259.13",
            "retention":"5039.95"
        },
        "fortnightly": {
            "salary":14246.56,
            "freeSalary":"11726.58",
            "inss":"890.41",
            "ir":"1629.57",
            "retention":"2519.98"
        },
        "annual":"320547.60",
        "excess":200000,
        "base":15000,
        "percentage":0.2
    }
