import React, { useState } from "react";
import DatePickers from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePickers
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yy"
        minDate={new Date()}
        filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default DatePicker;
