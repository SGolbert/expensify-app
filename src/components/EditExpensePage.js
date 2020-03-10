import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  onSubmit = expense => {
    console.log(this);

    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: id => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
