import React from 'react';
import { calendar } from './notAReactCalendar'

export class Calendar extends React.Component {

    render() {
        return <div ref={div => this.div = div} id="calendar-wrapper" />;
    }

    componentDidMount() {
        calendar(this.div);
    }

}