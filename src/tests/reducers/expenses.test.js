import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Booze",
    note: "",
    amount: 99900,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const id = "3";
  const updates = {
    note: "Mastercard",
    amount: 45000,
    createdAt: moment(0)
      .add(30, "days")
      .valueOf()
  };
  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state.find(element => element.id == id)).toEqual({
    id: "3",
    description: "Credit card",
    note: "Mastercard",
    amount: 45000,
    createdAt: moment(0)
      .add(30, "days")
      .valueOf()
  });
});

test("should not edit expense if expense not found", () => {
  const id = "30";
  const updates = {
    note: "Mastercard",
    amount: 45000,
    createdAt: moment(0)
      .add(30, "days")
      .valueOf()
  };
  const action = {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
