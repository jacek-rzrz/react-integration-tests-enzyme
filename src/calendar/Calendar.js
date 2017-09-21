import React from 'react';
import { calendar } from './notAReactCalendar'

export class Calendar extends React.Component {

    render() {
        return <div className="calendar" ref={div => this.div = div} />;
    }

    componentDidMount() {
        calendar(this.div);
    }

}