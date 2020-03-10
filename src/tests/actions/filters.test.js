import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setFilterText,
  sortByAmount,
  sortByDate
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should generate set filter text action object with passed values", () => {
  const passedText = "rent";
  const action = setFilterText(passedText);
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: passedText
  });
});

test("should generate set filter text action object with default values", () => {
  const action = setFilterText();
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: ""
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SET_SORTBY_AMOUNT"
  });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SET_SORTBY_DATE"
  });
});
