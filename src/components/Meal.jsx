function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div className='card-action'>
                <a href={`/meal/${idMeal}`} className='btn'>
                    Watch recipe
                </a>
            </div>
        </div>
    );
}

export {Meal};