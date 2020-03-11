import React from "react";
import { connect } from "react-redux";
import getTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = props => {
  if (props.expenses.length === 0) {
    return <p></p>;
  } else {
    return (
      <div>
        <p>
          Viewing {props.expenses.length} expense
          {props.expenses.length > 1 ? "s" : ""} totalling{" "}
          {numeral(getTotalExpenses(props.expenses) / 100).format("$0,0.00")}
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
