import React from "react";
import DatePickerRaw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
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
`;
const CalendarIconContainer = styled.div`
  width: ${(props) => props.theme.spaces[37]};
  height: ${(props) => props.theme.spaces[37]};
  margin-right: ${(props) => props.theme.spaces[9]};
`;

class DatePickerInput extends React.Component {
  render() {
    const { onClick, value, placeholderText } = this.props;
    const finalValue = value ? formatDateToTodoDate(value) : placeholderText;

    return (
      <FormScheduleButton onClick={onClick}>
        <CalendarIconContainer>
          <Icon name="calendar1" />
        </CalendarIconContainer>
        {finalValue}
      </FormScheduleButton>
    );
  }
}

const DatePicker = ({ onChange, selected, placeholder }) => {
  return (
    <DatePickerRaw
      onChange={onChange}
      selected={selected}
      minDate={new Date()}
      customInput={<DatePickerInput placeholderText={placeholder} />}
    />
  );
};
export default DatePicker;
