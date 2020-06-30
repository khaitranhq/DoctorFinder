import React from 'react';
import Customard from "../../../common/CustomCard"

const Schedule = props => {
    return (<div>
        <label>Lịch hẹn</label>
        {
            appointments.map((appointment, key) => (<Customard />))
        }
    </div>)
};

export default Schedule;