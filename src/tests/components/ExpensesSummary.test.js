import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should not be shown with no expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should show single expense amount", () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[2]]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should show multiple expenses' amount", () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
