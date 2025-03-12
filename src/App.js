import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";

import { addPostions } from "./store/positions/position-actions";
import data  from "./mock/data";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPostions(data));
    });
    return (
        <>
            <TheHeader />
            <div className="container">
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
