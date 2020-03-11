const getTotal = expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((prev, curr) => prev + curr, 0);
};

export default getTotal;
