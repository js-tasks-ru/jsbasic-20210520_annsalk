let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  };
  function sumSalary(salaries) {
    var sum = 0;
    for (let key in salaries) {
      let num = +(salaries[key]);
        if(num && isFinite(num)) {
        sum += num;
      }
    }
    return sum;
  }
