import { getDay, getMonth, getYear } from "date-fns";
import React from "react";
import DatePickerRaw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { useTheme } from "styled-components";
import { formatDateToTodoDate } from "../../shared/date-formatter";
import Icon from "../../shared/Icon";

const FormScheduleButton = styled.button`
  margin-right: ${(props) => props.theme.spaces[43]};
  font-size: ${(props) => props.theme.spaces[36]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.spaces[5]};
  padding: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[43]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.muted9};
  border-radius: ${(props) => props.theme.spaces[1]};
  color: ${(props) => props.theme.colors.text3};
  width: ${(props) => props.theme.spaces[44]};
  background-color: transparent;
  outline: none;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const TodoDateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: ${(props) => props.theme.spaces[28]};
  padding: ${(props) => props.theme.spaces[28]};
  min-height: ${(props) => props.theme.spaces[37]};
  cursor: pointer;
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

const Container = styled.div``;

const TodayTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary1};
`;

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

class DatePickerInput extends React.Component {
  render() {
    const todayDateValue = formatDateToTodoDate(new Date());
    const { onClick, value, placeholderText } = this.props;
    const finalValue = value ? formatDateToTodoDate(value) : placeholderText;

    const todayValue =
      finalValue === todayDateValue ? (
        <TodoDateContainer>
          <TodayIconContainer
            style={{
              color: finalValue === todayDateValue && "green",
            }}
          >
            <Icon name="calendar1" style={{ fontSize: 10 }} />
          </TodayIconContainer>
          <TodayTitle>Today</TodayTitle>
        </TodoDateContainer>
      ) : (
        <Container>
          <TodoDateContainer>
            <TodayIconContainer
              style={{
                color: finalValue === todayDateValue && "green",
              }}
            >
              <Icon name="calendar1" style={{ fontSize: 10 }} />
            </TodayIconContainer>
            <Container
              style={{ color: finalValue !== todayDateValue && "#555" }}
            >
              {finalValue}
            </Container>
          </TodoDateContainer>
        </Container>
      );

    return (
      <FormScheduleButton onClick={onClick}>{todayValue}</FormScheduleButton>
    );
  }
}

const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};

const renderDayContents = (date) => {
  const tooltipText = `Tooltip for date: ${date}`;
  return <Container title={tooltipText}>{date}</Container>;
};

const DatePicker = ({ onChange, selected, placeholder }) => {
  const { spaces } = useTheme();
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
    <Container>
      <DatePickerRaw
        onChange={onChange}
        selected={selected}
        // minDate={new Date()}
        customInput={<DatePickerInput placeholderText={placeholder} />}
        renderDayContents={renderDayContents}
        // filterDate={isWeekday}
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
                  style={{ marginRight: spaces[30] }}
                  onClick={decreaseMonth}
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

export default DatePicker;
