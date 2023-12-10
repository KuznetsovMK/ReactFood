import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";
import {getFilteredCategory} from "../api";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };