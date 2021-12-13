import {Link} from 'react-router-dom';

export const SearchList = ({filteredItems, id}) =>{
    
    return (
        <>
            <div className="searchBox">
            <Link to={`/recipe/${id}`}><li>{filteredItems}</li></Link>
            </div>
        </>
    )
}