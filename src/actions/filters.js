export const setFilterText = (text = "") => ({
  type: "SET_FILTER_TEXT",
  text
});

export const sortByAmount = () => ({
  type: "SET_SORTBY_AMOUNT"
});

export const sortByDate = () => ({
  type: "SET_SORTBY_DATE"
});

export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});
