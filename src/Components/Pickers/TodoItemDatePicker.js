import { getDay, getYear, getMonth } from "date-fns";
import React from "react";
import DatePickerRaw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { formatDateToTodoDate } from "../../shared/date-formatter";
import Icon from "../../shared/Icon";

const TodoDateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 16px;
  cursor: pointer;
`;

const DateButton = styled.button`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 12px;
  white-space: nowrap;
  height: 16px;
  line-height: 16px;
  color: grey;
  border-radius: 3px;
  margin: 0 8px 0 0;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const today = new Date();

class TodoItemDatePickerInput extends React.Component {
  render() {
    const { onClick, value } = this.props;
    const compareValueComparison =
      formatDateToTodoDate(value) === formatDateToTodoDate(today);
    const compareItemDateComparison =
      formatDateToTodoDate(this.props.item.date) ===
      formatDateToTodoDate(today);

    const compareValue = compareValueComparison ? (
      <TodoDateContainer>
        <div
          style={{
            height: 12,
            width: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: compareValueComparison ? "green" : "grey",
            margin: "1px 2px 3px 0px",
          }}
        >
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </div>
        <span style={{ color: "green" }}>Today</span>
      </TodoDateContainer>
    ) : (
      formatDateToTodoDate(value)
    );

    const compareItemDate = compareItemDateComparison ? (
      <TodoDateContainer>
        <div
          style={{
            height: 12,
            width: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: compareItemDateComparison ? "green" : "grey",
            margin: "1px 2px 3px 0",
          }}
        >
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </div>
        <span style={{ color: "green" }}>Today</span>
      </TodoDateContainer>
    ) : (
      <TodoDateContainer>
        <div
          style={{
            height: 12,
            width: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "grey",
            margin: "1px 2px 3px 0",
          }}
        >
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </div>
        <span>{formatDateToTodoDate(this.props.item.date)}</span>
      </TodoDateContainer>
    );

    const finalValue = value ? compareValue : compareItemDate;

    return <DateButton onClick={onClick}>{finalValue}</DateButton>;
  }
}

const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};

const renderDayContents = (date) => {
  const tooltipText = `Tooltip for date: ${date}`;
  return <span title={tooltipText}>{date}</span>;
};

const TodoItemDatePicker = ({ onChange, selected, placeholder, item }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <DatePickerRaw
        onChange={onChange}
        selected={selected}
        minDate={new Date()}
        customInput={
          <TodoItemDatePickerInput placeholderText={placeholder} item={item} />
        }
        renderDayContents={renderDayContents}
        filterDate={isWeekday}
        renderCustomHeader={({ decreaseMonth, increaseMonth, date }) => (
          <div
            style={{
              margin: 0,
              marginTop: -8,
              backgroundColor: "white",
              borderRadius: 3,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "8px 10px 8px 13px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  marginLeft: 3,
                }}
              >
                {formatDateToTodoDate(today)}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 10px 4px 16px",
              }}
            >
              <span className="react-datepicker__current-month">
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 13,
                    display: "flex",
                  }}
                >
                  <span style={{ marginRight: 5 }}>
                    {months[getMonth(date)]}
                  </span>
                  <span>{getYear(date)}</span>
                </div>
              </span>
              <div>
                <button
                  onClick={decreaseMonth}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "grey",
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                >
                  <Icon name="leftArrow" />
                </button>
                <button
                  onClick={increaseMonth}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    color: "grey",
                    cursor: "pointer",
                  }}
                >
                  <Icon name="rightArrow" />
                </button>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};
export default TodoItemDatePicker;
