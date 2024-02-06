import React from 'react';

function SearchForm(props) {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">
                    Search:
                </label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For an Activity"
                    id="search"
                />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    type="submit"
                    className="btn btn-primary"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
