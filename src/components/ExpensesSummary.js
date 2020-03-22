import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = props => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{props.expenses.length}</span> expense
          {props.expenses.length != 1 ? "s" : ""} totalling{" "}
          <span>
            {numeral(getTotalExpenses(props.expenses) / 100).format("$0,0.00")}
          </span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
