import React, { useState } from 'react';
import API from '../utils/BoredApi';
import ActivityDetail from '../components/ActivityDetail';
import SearchForm from '../components/SearchForm';

function Activities() {
    // const [searchData, setSearchData] = useState({
    //     search: '',
    //     results: [],
    // });

    // const searchActivities = (query) => {
    //     API.search(query)
    //         .then((res) => setSearchData({ ...searchData, results: res.data }))
    //         .catch((err) => console.log(err));
    // };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;

    //     setSearchData({
    //         ...searchData,
    //         [name]: value,
    //     });
    // };

    // When the form is submitted, search the OMDB API for the value of `searchData.search`
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     searchActivities(searchData.search);
    // };
    // console.log(searchData)

    return <div>
    <p>Hello</p>


        {/* <ActivityDetail
            activity={searchData.results.activity}
            type={searchData.results.type}
            accessibility={searchData.results.accessibility}
            participants={searchData.results.participants}
            price={searchData.results.price}
        />
        {
            searchData.results.activity ? (
                <ActivityDetail

                />
            ) : (
                <h3>No Results to Display</h3>
            )
        }

        <SearchForm
            value={searchData.search}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
        /> */}


    </div>
}

export default Activities;
