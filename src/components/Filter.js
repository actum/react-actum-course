import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Filter extends Component {

    render() {
        const { date, changeDate } = this.props;
        const { startDate, endDate } = date;


       return (
        <div>
            <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(select) => changeDate('startDate', select)}
            />

            <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={(select) => changeDate('endDate', select)}
            />
        </div>
        )
    }
}
export default Filter;