import getTotalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const total = getTotalExpenses([]);
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  const total = getTotalExpenses([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});

test("should correctly add up multiple expenses", () => {
  const total = getTotalExpenses(expenses);
  expect(total).toBe(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});
