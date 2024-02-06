import React from "react";

function ActivityDetail(props) {
    return (
        <div className="text-center">
            <h3>Activity: {props.activity}</h3>
            <h3>Type: {props.type}</h3>
            <h3>Accessibility: {props.accessibility}</h3>
            <h3>Participants: {props.participants}</h3>
            <h3>Price: {props.price}</h3>
        </div>
    );
}

export default ActivityDetail;
