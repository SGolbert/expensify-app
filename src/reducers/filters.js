import moment from "moment";

const filterReducerDefault = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = filterReducerDefault, action) => {
  switch (action.type) {
    case "SET_FILTER_TEXT":
      return {
        ...state,
        text: action.text
      };

    case "SET_SORTBY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };

    case "SET_SORTBY_DATE":
      return {
        ...state,
        sortBy: "date"
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };

    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
