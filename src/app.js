import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./stores/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setEndDate,
  setFilterText,
  setStartDate,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 1000,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 7000,
    createdAt: 1500
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 90000,
    createdAt: 1200
  })
);

// store.dispatch(setFilterText("water"));

// setTimeout(() => {
//   store.dispatch(setFilterText("bill"));
// }, 3000);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
