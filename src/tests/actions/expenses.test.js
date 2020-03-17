import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("should set up remove expense action object", () => {
  const action = removeExpense("123abc");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should set up a edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "lalala",
    amount: 10500
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "lalala",
      amount: 10500
    }
  });
});

test("should set up add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "mouse",
    amount: 3000,
    note: "cute",
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return db.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const store = createMockStore({});
  const defaultExpense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultExpense
        }
      });

      return db.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

// test("should set up the add expense action object with default values", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
