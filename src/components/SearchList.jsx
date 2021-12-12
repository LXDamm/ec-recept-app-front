import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useHistory, useState } from 'react';


export const SearchList = ({filteredItems, id}) =>{

    return (
        <>
            <div className="searchBox">
            <Link to={`/recipe/${id}`}><li>{filteredItems}</li></Link>
            </div>
            
       
        </>
    )
}