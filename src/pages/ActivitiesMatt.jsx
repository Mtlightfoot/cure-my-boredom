import React, { useState } from 'react';
import ActivityDetail from '../components/ActivityDetail';

function ActivitiesMatt(props) {
    console.log(props)

    return <div>

        {props.searchData ? (
            <ActivityDetail
                activity={props.searchResult.results.activity}
                type={props.searchResult.results.type}
                accessibility={props.searchResult.results.accessibility}
                participants={props.searchResult.results.participants}
                price={props.searchResult.results.price}
            />) : (
            <h3>No results to display</h3>
        )}
    </div>
}

export default ActivitiesMatt;
