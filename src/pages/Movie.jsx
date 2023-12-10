import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function Movie() {
    const {id} = useParams();
    const {goBack} = useHistory();
    const value = useRouteMatch()
    const value2 = useLocation()
    console.log(value);
    console.log(value2);
    return (
        <>
            <h1> Some movie {id}</h1>
            <button className='btn' onClick={goBack}>go back</button>
        </>
    )
}

export {Movie}