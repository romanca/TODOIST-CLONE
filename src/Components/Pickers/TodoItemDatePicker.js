import { getDay, getYear, getMonth } from "date-fns";
import React from "react";
import DatePickerRaw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { useTheme } from "styled-components";
import { formatDateToTodoDate } from "../../shared/date-formatter";
import Icon from "../../shared/Icon";

const TodoDateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: ${(props) => props.theme.spaces[28]};
  padding: ${(props) => props.theme.spaces[28]};
  min-height: ${(props) => props.theme.spaces[37]};
  cursor: pointer;
`;

const DateButton = styled.button`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  font-size: ${(props) => props.theme.spaces[15]};
  white-space: nowrap;
  height: ${(props) => props.theme.spaces[37]};
  line-height: ${(props) => props.theme.spaces[37]};
  color: ${(props) => props.theme.colors.text7};
  border-radius: ${(props) => props.theme.spaces[0]};
  margin: ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[37]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[28]};
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: ${(props) => props.theme.spaces[28]};
`;

const TodoIconContainer = styled.div`
  height: ${(props) => props.theme.spaces[15]};
  width: ${(props) => props.theme.spaces[15]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[39]} ${(props) => props.theme.spaces[0]}
    ${(props) => props.theme.spaces[28]};
`;

const Container = styled.div``;

const DatePickerContainer = styled.div`
  margin: ${(props) => props.theme.spaces[8]};
  margin-top: ${(props) => props.theme.spaces[83]};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.spaces[0]};
`;

const FormatDateContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[30]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[36]};
  align-items: center;
  justify-content: flex-start;
`;

const FormatDateTitle = styled.div`
  margin-left: ${(props) => props.theme.spaces[0]};
`;

const TodayIconContainer = styled.div`
  height: ${(props) => props.theme.spaces[15]};
  width: ${(props) => props.theme.spaces[15]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spaces[8]}
    ${(props) => props.theme.spaces[9]} ${(props) => props.theme.spaces[0]}
    ${(props) => props.theme.spaces[28]};
`;

const TodayTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary1};
`;

const DateSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spaces[9]}
    ${(props) => props.theme.spaces[30]} ${(props) => props.theme.spaces[37]}
    ${(props) => props.theme.spaces[9]};
`;

const DateContainer = styled.div`
  font-weight: ${(props) => props.theme.spaces[34]};
  font-size: ${(props) => props.theme.spaces[36]};
  display: flex;
`;

const MonthDate = styled.div`
  margin-right: ${(props) => props.theme.spaces[1]};
`;

const DecreaseIncreaseMonthButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
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
        <TodoIconContainer
          style={{
            color: compareValueComparison ? "green" : "grey",
          }}
        >
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </TodoIconContainer>
        <TodayTitle>Today</TodayTitle>
      </TodoDateContainer>
    ) : (
      formatDateToTodoDate(value)
    );

    const compareItemDate = compareItemDateComparison ? (
      <TodoDateContainer>
        <TodoIconContainer
          style={{
            color: compareItemDateComparison ? "green" : "grey",
          }}
        >
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </TodoIconContainer>
        <span style={{ color: "green" }}>Today</span>
      </TodoDateContainer>
    ) : (
      <TodoDateContainer>
        <TodoIconContainer>
          <Icon name="calendar1" style={{ fontSize: 10 }} />
        </TodoIconContainer>
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
  const { spaces } = useTheme();

  return (
    <Container>
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
          <DatePickerContainer>
            <FormatDateContainer>
              <FormatDateTitle>{formatDateToTodoDate(today)}</FormatDateTitle>
            </FormatDateContainer>
            <DateSelectorContainer>
              <Container className="react-datepicker__current-month">
                <DateContainer>
                  <MonthDate>{months[getMonth(date)]}</MonthDate>
                  <Container>{getYear(date)}</Container>
                </DateContainer>
              </Container>
              <Container>
                <DecreaseIncreaseMonthButton
                  onClick={decreaseMonth}
                  style={{ marginRight: spaces[30] }}
                >
                  <Icon name="leftArrow" />
                </DecreaseIncreaseMonthButton>
                <DecreaseIncreaseMonthButton onClick={increaseMonth}>
                  <Icon name="rightArrow" />
                </DecreaseIncreaseMonthButton>
              </Container>
            </DateSelectorContainer>
          </DatePickerContainer>
        )}
      />
    </Container>
  );
};
export default TodoItemDatePicker;
