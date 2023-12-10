function CategoryItem(props) {
    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className='card-content'>
                <span className='card-title'>{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <a href={`/category/${strCategory}`} className='btn'>
                    Watch category
                </a>
            </div>
        </div>
    );
}

export {CategoryItem};